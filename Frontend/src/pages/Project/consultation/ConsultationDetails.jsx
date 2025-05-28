import ProjectLayout from "../../../layouts/ProjectLayout.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

function ConsultationDetails() {
      const { 
            consultationId,
      } = useParams();
      const [wallet, setWallet] = useState({code: '', title: '', programs: []});
      const [program, setProgram] = useState({code: '', title: '', wallet_code: '', subprograms: []});
      const [subprogram, setSubprogram] = useState({id: '', code: '', title: '', program_code: '', actions: []});
      const [action, setAction] = useState({code: '', title: '', type: '', subprogram_id: '', operations: []});
      const [operation, setOperation] = useState({number: '', title: '', date_of_notification: '', initial_ap: '', current_ap: '', situation: '', action_code: '', consultations: []});
      const [consultation, setConsultation] = useState({id: '', objectif: '', start_date: '', cost: '', duration: '', assessment_date: '', operation_number: ''});
      const [loading, setLoading] = useState(false);
      const {setNotification} = NotificationStateContext()
      const [errors, setErrors] = useState(null)
      const navigate = useNavigate()

      useEffect(() => {
            const fetchData = async () => {
                  try {
                  
                        const consultationResponse = await axiosClient.get(`/consultations/${consultationId}?include=operation.action.subprogram.program.wallet`);
                        const consultationData = consultationResponse.data.data;
                        setConsultation(consultationData);
                        setOperation(consultationData.operation);
                        setWallet(consultationData.operation.action.subprogram.program.wallet);
                        setProgram(consultationData.operation.action.subprogram.program);
                        setSubprogram(consultationData.operation.action.subprogram);
                        setAction(consultationData.operation.action);

                        setLoading(false);
                  }catch (error) {
                        setLoading(false);
                        setErrors(error);
                  }
            };
            
            fetchData();
      }, [consultationId]);

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
      <ProjectLayout consultation={consultation} _operation={operation} _action={action} _subprogram={subprogram} _program={program} _wallet={wallet} />
      );
}

export default ConsultationDetails;