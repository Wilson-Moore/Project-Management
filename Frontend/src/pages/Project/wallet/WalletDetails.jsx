import ProjectLayout from "../../../layouts/ProjectLayout";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

function WalletDetails() {
  const { 
    walletId,
  } = useParams();
  const [wallet,setwallet]=useState({code: '',title: '',programs: []});
  const [loading,setLoading]=useState(false);
  const {setNotification}=NotificationStateContext()
  const [errors,setErrors]=useState(null)
  const navigate=useNavigate()

  useEffect(() => {
    if (walletId) {
      setLoading(true);
      axiosClient.get(`/wallets/${walletId}?include_programs=1`)
      .then(({ data }) => {
            setLoading(false);
            setwallet(data.data);
      })
      .catch(() => {
            setLoading(false);
      });
    }
  },[walletId]);
  if(!loading) {
    return (
      <ProjectLayout wallet={wallet} />
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

export default WalletDetails;