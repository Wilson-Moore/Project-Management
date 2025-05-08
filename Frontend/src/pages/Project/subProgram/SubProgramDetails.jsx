import ProjectLayout from "../../../layouts/ProjectLayout";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

function SubProgramDetails() {
  const { 
    walletId, 
    programId,
    subprogramId,
  } = useParams();
  const [wallet, setWallet] = useState({code: '', title: '', programs: []});
  const [program, setProgram] = useState({code: '', title: '', wallet_code: '', subprograms: []});
  const [subprogram, setSubprogram] = useState({id: '', code: '', title: '', program_code: '', actions: []});
  const [loading, setLoading] = useState(false);
  const {setNotification} = NotificationStateContext()
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!walletId) return;
  
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // // Fetch wallet data
        // const walletResponse = await axiosClient.get(`/wallets/${walletId}`);
        // const walletData = walletResponse.data.data;
        // setWallet(walletData);
        
        if (!programId) {
          setLoading(false);
          return;
        }
  
          // Fetch program data
          const programResponse = await axiosClient.get(`/programs/${programId}`);
          const programData = programResponse.data.data;
          setProgram(programData);
          if (!subprogramId) {
            setLoading(false);
            return;
          }
          
            const subprogramResponse = await axiosClient.get(`/subprograms/${subprogramId}?include=actions`);
            setSubprogram(subprogramResponse.data.data);
          
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrors(error);
      }
    };
  
    fetchData();
  }, [walletId, programId, subprogramId,]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-threedots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    );
  }
  
  if(errors) {
    return (
      <div className="alert">
        {errors.message
        ? errors.message : "An error occurred while fetching the data."}
      </div>
    );
  }

  return (
    <ProjectLayout subprogram={subprogram} _program={program} _wallet={wallet} />
  );
}

export default SubProgramDetails;