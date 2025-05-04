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
        
        // Fetch wallet data
        const walletResponse = await axiosClient.get(`/wallets/${walletId}?include=programs`);
        const walletData = walletResponse.data.data;
        setWallet(walletData);
        
        if (!programId) {
          setLoading(false);
          return;
        }
  
        // Use the freshly fetched walletData instead of the state wallet
        const foundProgram = walletData.programs.find(program => program.code === programId);
        if (foundProgram) {
          // Fetch program data
          const programResponse = await axiosClient.get(`/programs/${programId}?include=subprograms`);
          const programData = programResponse.data.data;
          setProgram(programData);
          if (!subprogramId) {
            setLoading(false);
            return;
          }
          
          // Use the freshly fetched programData instead of the state program
          //programData.subprograms.find(sub => sub.id === subprogramId);
          const foundSubprogram = true;
          if (foundSubprogram) {
            const subprogramResponse = await axiosClient.get(`/subprograms/${subprogramId}?include=actions`);
            setSubprogram(subprogramResponse.data.data);
          }else {
            setLoading(false);
            setErrors("SubProgram doesn't exist!");
          }
        }
        
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