import OperationItem from "./OperationItem";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../axios-client.js";
import {NotificationStateContext} from "../../contexts/NotificationContextProvider.jsx";

function ProjectOverview() {
      const { 
            walletId, 
            programId, 
            subprogramId, 
            actionId 
      } = useParams();
      const [wallet,setwallet]=useState({code: '',title: ''});
      const [program,setprogram]=useState({code: '',title: '',wallet_code:''});
      const [subprogram,setsubprogram]=useState({code: '',title: '',program_code:''});
      const [action,setaction]=useState({code: '',type: '',subprogram_code:''});
      const [loading,setLoading]=useState(false);
      const {setNotification}=NotificationStateContext()
      const [errors,setErrors]=useState(null)
      const navigate=useNavigate()

      const [currentpage,setcurrentpage]=useState(1);
      const [subEntities,setsub]=useState([]);
      const [totalpages,settotalpages]=useState(1);


      useEffect(() => {
            getsub();
            if(actionId) {
                  setLoading(true);
                  axiosClient.get(`/actions/${actionId}`)
                  .then(({ data }) => {
                        setLoading(false);
                        setaction(data.data);
                  })
                  .catch(() => {
                        setLoading(false);
                  });
            }else
            
            if (subprogramId) {
                  setLoading(true);
                  axiosClient.get(`/subprograms/${subprogramId}`)
                  .then(({ data }) => {
                        setLoading(false);
                        setsubprogram(data.data);
                  })
                  .catch(() => {
                        setLoading(false);
                        });
            }else

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
            }else
            
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
      }, [walletId, actionId, programId, subprogramId, currentpage]);


      const getsub = () => {
            setLoading(true);
            
            let endpoint = '';
            let filterKey = '';
            
            // if (actionId) {
            //   endpoint = '/operations';
            //   filterKey = 'action';
            // } else 
            if (subprogramId) {
                  endpoint = '/actions';
                  filterKey = 'subprogram';
            } else if (programId) {
                  endpoint = '/subprograms';
                  filterKey = 'program';
            } else if (walletId) {
                  endpoint = '/programs';
                  filterKey = 'wallet';
            } else {
                  setLoading(false);
                  return;
            }

            axiosClient.get(`${endpoint}?page=${currentpage}`)
            .then(({ data }) => {
                    // Filter results based on parent ID
                  const filteredData = data.data.filter(item => 
                        item[filterKey] === (actionId || subprogramId || programId || walletId)
                  );
                  setLoading(false);
                  setsub(filteredData);
                  settotalpages(data.meta.last_page);
            })
            .catch((error) => {
                  setLoading(false);
                  console.error("Error getting sub-entities:", error);
            setNotification({
                  message: "Failed to load data",
                  type: "error"
            });
            });
      };

      const info =  actionId ? "l'action" : subprogramId ? "le sous-program" : programId ? "le program" : walletId ? "le portefeuille" : "-";
      const code =  actionId ? action.code : subprogramId ? subprogram.code : programId ? program.code : walletId ? wallet.code : "-";
      const title =  actionId ? action.title : subprogramId ? subprogram.title : programId ? program.title : walletId ? wallet.title : "-";

      return (
            <div className="project-overview">
                  <div className="overview-section">
                        <h3>Informations sur {info}</h3>
                        <h5>Code: {code}</h5>
                        <h5>Intitulé: {title}</h5>
                  </div>
                  <div className="overview-section" style={{backgroundColor: "white"}}>
                        <h3>les opérations</h3>
                        {subEntities.length > 0 ? (
                        subEntities.map((entity, index) => (
                              <OperationItem key={index} entity ={entity} operationName={entity.title || "No title"} year="2024" isObserved creator="Fischer" status={index === 0 ? "Fini" : "En cours"} />    
                        ))
                        ) : (
                              !loading ? <p>Aucune opération trouvée</p> : <div>Loading ...</div>
                        )}
                  </div>
            </div>
      );
}

export default ProjectOverview;