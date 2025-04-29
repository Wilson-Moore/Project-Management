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
    if (walletId) {
      setLoading(true);
      axiosClient.get(`/wallets/${walletId}`)
      .then(({ data }) => {
            setLoading(false);
            setwallet(data.data);
      })
      .catch(() => {
            setLoading(false);
      });
    }
    
    if (programId) {
      setLoading(true);
      axiosClient.get(`/programs/${programId}`)
      .then(({ data }) => {
            setLoading(false);
            setprogram(data.data);
      })
      .catch(() => {
            setLoading(false);
      });
    }
  },[walletId, programId]);

  if(!loading) {
    return (
      <ProjectLayout program={program} _wallet={wallet} />
    );
  }else {
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
}

export default ProgramDetails;