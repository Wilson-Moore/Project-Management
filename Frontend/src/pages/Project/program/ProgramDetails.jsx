import ProjectLayout from "../../../layouts/ProjectLayout";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

function ProgramDetails() {
  const { 
    walletId, 
    programId,
  } = useParams();
  const [wallet,setwallet]=useState({code: '',title: '',programs: []});
  const [program,setprogram]=useState({code: '',title: '',wallet_code:'',subprograms: []});
  const [loading,setLoading]=useState(false);
  const {setNotification}=NotificationStateContext()
  const [errors,setErrors]=useState(null)
  const navigate=useNavigate()

    useEffect(() => {
      if (!walletId) return;
    
      const fetchData = async () => {
        try {
          setLoading(true);
          
          // Fetch wallet data
          const walletResponse = await axiosClient.get(`/wallets/${walletId}?include=programs`);
          const walletData = walletResponse.data.data;
          setwallet(walletData);

          if (!programId) {
            setLoading(false);
            return;
          }
    
          // Use the freshly fetched walletData instead of the state wallet
          const foundProgram = walletData.programs.find(program => program.code === programId);
          if (foundProgram) {
            // Fetch program data
            const programResponse = await axiosClient.get(`/programs/${programId}?include=subprograms`);
            setprogram(programResponse.data.data);
          }else {
            setLoading(false);
            setErrors("Program doesn't exist!");
          }
          
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setErrors(error);
        }
      };
    
      fetchData();
    }, [walletId, programId]);

  if(loading) {
    return(
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
    return(
      <div className="alert">
        {errors}
      </div>
    );
  }

  return (
    <ProjectLayout program={program} _wallet={wallet} />
  );
  
}

export default ProgramDetails;