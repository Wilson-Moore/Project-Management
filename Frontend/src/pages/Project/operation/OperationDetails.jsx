import ProjectLayout from "../../../layouts/ProjectLayout.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

function OperationDetails() {
      const { 
            operationId,
      } = useParams();
      const [wallet, setWallet] = useState({code: '', title: '', programs: []});
      const [program, setProgram] = useState({code: '', title: '', wallet_code: '', subprograms: []});
      const [subprogram, setSubprogram] = useState({id: '', code: '', title: '', program_code: '', actions: []});
      const [action, setAction] = useState({code: '', title: '', type: '', subprogram_id: '', operations: []});
      const [operation, setOperation] = useState({number: '', title: '', date_of_notification: '', initial_ap: '', current_ap: '', situation: '', action_code: '', projects: []});
      const [loading, setLoading] = useState(false);
      const {setNotification} = NotificationStateContext()
      const [errors, setErrors] = useState(null)
      const navigate = useNavigate()


      useEffect(() => {
            
            const fetchData = async () => {
                  try {
                        setLoading(true);
                        const operationResponse = await axiosClient.get(`/operations/${operationId}?include=projects,consultations,documents,notices,action.subprogram.program.wallet`);
                        const operationData = operationResponse.data.data;
                        setOperation(operationData);
                        setWallet(operationData.action.subprogram.program.wallet);
                        setProgram(operationData.action.subprogram.program);
                        setSubprogram(operationData.action.subprogram);
                        setAction(operationData.action);
                        setLoading(false);
                  } catch (error) {
                        setLoading(false);
                        setErrors(error);
                  }
            };
            
            fetchData();
      }, [operationId]);

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
      <ProjectLayout operation={operation} _action={action} _subprogram={subprogram} _program={program} _wallet={wallet} />
      );
}

export default OperationDetails;