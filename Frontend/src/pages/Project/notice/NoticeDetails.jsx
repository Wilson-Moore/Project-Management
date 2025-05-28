import ProjectLayout from "../../../layouts/ProjectLayout.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

function NoticeDetails() {
      const { 
            noticeId,
      } = useParams();
      const [wallet, setWallet] = useState({code: '', title: '', programs: []});
      const [program, setProgram] = useState({code: '', title: '', wallet_code: '', subprograms: []});
      const [subprogram, setSubprogram] = useState({id: '', code: '', title: '', program_code: '', actions: []});
      const [action, setAction] = useState({code: '', title: '', type: '', subprogram_id: '', operations: []});
      const [operation, setOperation] = useState({number: '', title: '', date_of_notification: '', initial_ap: '', current_ap: '', situation: '', action_code: '', notices: []});
      const [notice, setNotice] = useState({id: '', objectif: '', start_date: '', cost: '', duration: '', assessment_date: '', operation_number: ''});
      const [loading, setLoading] = useState(false);
      const {setNotification} = NotificationStateContext()
      const [errors, setErrors] = useState(null)
      const navigate = useNavigate()

      useEffect(() => {
            const fetchData = async () => {
                  try {
                  
                        const noticeResponse = await axiosClient.get(`/notices/${noticeId}?include=operation.action.subprogram.program.wallet`);
                        const noticeData = noticeResponse.data.data;
                        setNotice(noticeData);
                        setOperation(noticeData.operation);
                        setWallet(noticeData.operation.action.subprogram.program.wallet);
                        setProgram(noticeData.operation.action.subprogram.program);
                        setSubprogram(noticeData.operation.action.subprogram);
                        setAction(noticeData.operation.action);

                        setLoading(false);
                  }catch (error) {
                        setLoading(false);
                        setErrors(error);
                  }
            };
            
            fetchData();
      }, [noticeId]);

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
      <ProjectLayout notice={notice} _operation={operation} _action={action} _subprogram={subprogram} _program={program} _wallet={wallet} />
      );
}

export default NoticeDetails;