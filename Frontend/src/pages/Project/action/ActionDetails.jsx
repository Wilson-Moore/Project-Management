import ProjectLayout from "../../../layouts/ProjectLayout.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

function ActionDetails() {
      const { 
            actionId,
      } = useParams();
      const [wallet, setWallet] = useState({code: '', title: '', programs: []});
      const [program, setProgram] = useState({code: '', title: '', wallet_code: '', subprograms: []});
      const [subprogram, setSubprogram] = useState({id: '', code: '', title: '', program_code: '', actions: []});
      const [action, setAction] = useState({code: '', title: '', type: '', subprogram_id: '', operations: []});
      const [loading, setLoading] = useState(false);
      const {setNotification} = NotificationStateContext()
      const [errors, setErrors] = useState(null)
      const navigate = useNavigate()

      useEffect(() => {
            
            const fetchData = async () => {
                  try {
                        setLoading(true);
                        const actionResponse = await axiosClient.get(`/actions/${actionId}?include=operations`);
                        const actionData = actionResponse.data.data;
                        setAction(actionData);
                        setLoading(false);
                  } catch (error) {
                        setLoading(false);
                        setErrors(error);
                  }
            };
            
            fetchData();
      }, [actionId]);

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
            {errors.message}
            </div>
      );
      }

      return (
      <ProjectLayout action={action} _subprogram={subprogram} _program={program} _wallet={wallet} />
      );
}

export default ActionDetails;