import ProjectLayout from "../../../layouts/ProjectLayout.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

function OperationDetails() {
      const { 
            walletId, 
            programId,
            subprogramId,
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

      const actionId = operationId.slice(2,20);

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
                  // const foundSubprogram = programData.subprograms.find(sub => sub.id === subprogramId);
                  const foundSubprogram = true;
                  if (foundSubprogram) {
                        const subprogramResponse = await axiosClient.get(`/subprograms/${subprogramId}?include=actions`);
                        const subprogramData = subprogramResponse.data.data;
                        setSubprogram(subprogramData);

                        if (!actionId) {
                              setLoading(false);
                              return;
                        }

                        // Use the freshly fetched subprogramData instead of the state subprogram
                        const foundAction = true;
                        if (foundAction) {
                              const actionResponse = await axiosClient.get(`/actions/${actionId}?include=operations`);
                              const actionData = actionResponse.data.data;
                              setAction(actionData);

                              if (!operationId) {
                                    setLoading(false);
                                    return;
                              }

                              // Use the freshly fetched actionData instead of the state action
                              const foundOperation = true;
                              if (foundOperation) {
                                    const operationResponse = await axiosClient.get(`/operations/${operationId}`);
                                    const operationData = operationResponse.data.data;
                                    setOperation(operationData);
                              } else {
                                    setErrors("Operation not found");
                              }
                        }

                  }
                  
                  }
                  
                  setLoading(false);
                  } catch (error) {
                  setLoading(false);
                  setErrors(error);
                  }
            };
            
            fetchData();
      }, [walletId, programId, subprogramId, actionId, operationId]);

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