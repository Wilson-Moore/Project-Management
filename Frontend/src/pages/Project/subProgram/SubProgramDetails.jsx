import ProjectLayout from "../../../layouts/ProjectLayout";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

function SubProgramDetails() {
  const {
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
  
    const fetchData = async () => {
      try {
        setLoading(true);
        
          if (!subprogramId) {
            setLoading(false);
            return;
          }
          
            const subprogramResponse = await axiosClient.get(`/subprograms/${subprogramId}?include=actions,program.wallet`);
            setSubprogram(subprogramResponse.data.data);
            setWallet(subprogramResponse.data.data.program.wallet);
            setProgram(subprogramResponse.data.data.program);
          
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrors(error);
      }
    };
  
    fetchData();
  }, [subprogramId,]);

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