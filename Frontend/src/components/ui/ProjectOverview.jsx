import OperationItem from "./OperationItem";
import './../../assets/styles/projectOverview.css'

function ProjectOverview(props) {
      if(props.wallet) {
            const { wallet } = props;
            return (
                  <div className="detail-grid">
                        <div className="detail-column">
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Code de Portefeuille:</h3>
                              <p className="detail-value">{wallet.code}</p>
                              </div>
                              </div>
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Intitulé de Portefeuille:</h3>
                              <p className="detail-value">{wallet.title}</p>
                              </div>
                              </div>
                        </div>
                  </div>
            );
      }else if(props.program) {
            const { program } = props;
            return (
                  <div className="detail-grid">
                        <div className="detail-column">
                              <div className="detail-row">
                              <div className="detail-cell">
                                    <h3 className="detail-label">Code de Programme:</h3>
                                    <p className="detail-value">{program.code}</p>
                              </div>
                              <div className="detail-cell">
                                    <h3 className="detail-label">Code de Portefeuille:</h3>
                                    <p className="detail-value">{props._wallet.code}</p>
                              </div>
                              </div>
                              <div className="detail-row">
                              <div className="detail-cell">
                                    <h3 className="detail-label">Intitulé de Programme:</h3>
                                    <p className="detail-value">{program.title}</p>
                              </div>
                              <div className="detail-cell">
                                    <h3 className="detail-label">Intitulé de Portefeuille:</h3>
                                    <p className="detail-value">{props._wallet.title}</p>
                              </div>
                              </div>
                        </div>
                  </div>
            );

      }else if(props.subprogram) {
            const { subprogram } = props;
            return (
                  <div className="detail-grid">
                        <div className="detail-column">
                              <div className="detail-row">
                              <div className="detail-cell">
                                    <h3 className="detail-label">Code de Sous-Programme:</h3>
                                    <p className="detail-value">{subprogram.code}</p>
                              </div>
                              <div className="detail-cell">
                                    <h3 className="detail-label">Code de Programme:</h3>
                                    <p className="detail-value">{props._program.code}</p>
                              </div>
                              
                              </div>
                              <div className="detail-row">
                              <div className="detail-cell">
                                    <h3 className="detail-label">Intitulé de Sous-Programme:</h3>
                                    <p className="detail-value">{subprogram.title}</p>
                              </div>
                              <div className="detail-cell">
                                    <h3 className="detail-label">Intitulé de Programme:</h3>
                                    <p className="detail-value">{props._program.title}</p>
                              </div>
                              
                              </div>
                        </div>
                        <div className="detail-column">
                              <div className="detail-row">
                                    <div className="detail-cell">
                                          <h3 className="detail-label">Code de Portefeuille:</h3>
                                          <p className="detail-value">{props._wallet.code}</p>
                                    </div>
                              </div>
                              <div className="detail-row">
                                    <div className="detail-cell">
                                          <h3 className="detail-label">Intitulé de Portefeuille:</h3>
                                          <p className="detail-value">{props._wallet.title}</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            );
      }else if(props.action) {
            const { action } = props;

            let formattedCode = '';
            for (let i = 0; i < action.code.length; i++) {
                  if (i === 3 || i === 6 || i === 8 || i === 12 || i === 15) {
                  formattedCode += '.';
                  }
                  if (i < action.code.length) {
                  formattedCode += action.code[i];
                  }
            }

            return (
                  <div className="detail-grid">
                        <div className="detail-column">
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Code d'Action:</h3>
                              <p className="detail-value">{formattedCode}</p>
                              </div>
                              </div>
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Intitulé d'Action:</h3>
                              <p className="detail-value">{action.title}</p>
                              </div>
                              </div>
                        </div>
                  </div>
            );
      }else if(props.operation) {
            const { operation } = props;

            let formattedCode = '';
            for (let i = 0; i < operation.number.length; i++) {
                  if (i === 1 || i === 2 || i === 5 || i === 8 || i === 10 || i === 14 || i === 17 || i === 20 || i === 22) {
                  formattedCode += '.';
                  }
                  if (i < operation.number.length) {
                  formattedCode += operation.number[i];
                  }
            }
            return (
                  <div className="detail-grid">
                        <div className="detail-column">
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">N° de l'opération:</h3>
                              <p className="detail-value">{formattedCode}</p>
                              </div>
                              <div className="detail-cell">
                              <h3 className="detail-label">Intitulé de l'Opération:</h3>
                              <p className="detail-value">{operation.title}</p>
                              </div>
                              </div>
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Année de notification:</h3>
                              <p className="detail-value">{operation.date_of_notification?.slice(0,4) || '2025'}</p>
                              </div>
                              <div className="detail-cell">
                              <h3 className="detail-label">AP Actuelle:</h3>
                              <p className="detail-value">{operation.current_ap || '323000'}.00 da</p>
                              </div>
                              </div>
                        </div>
                        
                        <div className="detail-column">
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">AP Initial:</h3>
                              <p className="detail-value">{operation.initial_ap || '300000'}.00 da</p>
                              </div>
                              <div className="detail-cell">
                              <h3 className="detail-label">Révaluation:</h3>
                              <p className="detail-value">{operation.revaluation || '-'}</p>
                              </div>
                              </div>
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Situation:</h3>
                              <p className="detail-value">{operation.situation || 'on halt'}</p>
                              </div>
                              <div className="detail-cell">
                              <h3 className="detail-label">Observation:</h3>
                              <p className="detail-value">{operation.observation || '-'}</p>
                              </div>
                              </div>
                        </div>
                        
                        <div className="detail-wide">
                              <div className="detail-row">
                              <div className="detail-cell detail-quarter">
                              <h3 className="detail-label">Individualisée:</h3>
                              <p className="detail-value">{operation.individualized || '-'}</p>
                              </div>
                              </div>
                        </div>
                  </div>
            );
      }else if(props.project) {
            const { project } = props;
            return (
                  <>
                  {/* <div className="project-overview-simple">
                        <h5>N° du projet: {project.id || "-"}</h5>
                        <h5>Intitulé du projet: {project.objectif || "-"}</h5>
                        <h5>Date de début: {project.start_date.slice(0,10) || "-"}</h5>
                        <h5>Date d'évaluation: {project.assessment_date.slice(0,10) || "-"}</h5>
                        <h5>Duration: {project.duration || "-"}</h5>
                        <h5>coût: {project.cost + ".00da" || "-"}</h5>
                  </div> */}
                  <div className="detail-grid">
                  <div className="detail-column">
                        <div className="detail-row">
                        {/* <div className="detail-cell">
                        <h3 className="detail-label">N° du projet: </h3>
                        <p className="detail-value">{project.id || "-"}</p>
                        </div> */}
                        <div className="detail-cell">
                        <h3 className="detail-label">Intitulé du projet: </h3>
                        <p className="detail-value">{project.objectif || "-"}</p>
                        </div>
                        </div>
                        <div className="detail-row">
                        <div className="detail-cell">
                        <h3 className="detail-label">Date de début: </h3>
                        <p className="detail-value">{project.start_date.slice(0,10) || "-"}</p>
                        </div>
                        <div className="detail-cell">
                        <h3 className="detail-label">Date d'évaluation: </h3>
                        <p className="detail-value">{project.assessment_date.slice(0,10) || "-"}</p>
                        </div>
                        </div>
                  </div>
                  
                  <div className="detail-column">
                        <div className="detail-row">
                        <div className="detail-cell">
                        <h3 className="detail-label">Duration: </h3>
                        <p className="detail-value">{project.duration || "-"}</p>
                        </div>
                        <div className="detail-cell">
                        <h3 className="detail-label">coût: </h3>
                        <p className="detail-value">{project.cost + ".00da" || "-"}</p>
                        </div>
                        </div>
                        <div className="detail-row">
                        <div className="detail-cell">
                        <h3 className="detail-label">Situation:</h3>
                        <p className="detail-value">{ 'on halt'}</p>
                        </div>
                        <div className="detail-cell">
                        <h3 className="detail-label">Observation:</h3>
                        <p className="detail-value">{ '-'}</p>
                        </div>
                        </div>
                  </div>
                  
                  <div className="detail-wide">
                        <div className="detail-row">
                        <div className="detail-cell detail-quarter">
                        <h3 className="detail-label">Individualisée:</h3>
                        <p className="detail-value">{ '-'}</p>
                        </div>
                        </div>
                  </div>
            </div>
            </>
            );
      }
      


      // const { 
      //       walletId, 
      //       programId, 
      //       subprogramId, 
      //       actionId 
      // } = useParams();
      // const [wallet,setwallet]=useState({code: '',title: '',programs: []});
      // const [program,setprogram]=useState({code: '',title: '',wallet_code:'',subprograms: []});
      // const [subprogram,setsubprogram]=useState({id: '',code:'',title: '',program_code:'',actions: []});
      // const [action,setaction]=useState({code: '',type: '',subprogram_code:''});
      // const [loading,setLoading]=useState(false);
      // const {setNotification}=NotificationStateContext()
      // const [errors,setErrors]=useState(null)
      // const navigate=useNavigate()

      // const [currentpage,setcurrentpage]=useState(1);
      // const [subEntities,setsub]=useState([]);
      // const [totalpages,settotalpages]=useState(1);


      // useEffect(() => {
      //       getsub();
      //       if(actionId) {
      //             setLoading(true);
      //             axiosClient.get(`/actions/${actionId}`)
      //             .then(({ data }) => {
      //                   setLoading(false);
      //                   setaction(data.data);
      //             })
      //             .catch(() => {
      //                   setLoading(false);
      //             });
      //       }else
            
      //       if (subprogramId) {
      //             setLoading(true);
      //             axiosClient.get(`/subprograms/${subprogramId}`)
      //             .then(({ data }) => {
      //                   setLoading(false);
      //                   setsubprogram(data.data);
      //             })
      //             .catch(() => {
      //                   setLoading(false);
      //             });
      //       }else
            
      //       if (programId) {
      //             setLoading(true);
      //             axiosClient.get(`/programs/${programId}`)
      //             .then(({ data }) => {
      //                   setLoading(false);
      //                   setprogram(data.data);
      //             })
      //             .catch(() => {
      //                   setLoading(false);
      //             });
      //       }else
            
      //       if (walletId) {
      //             setLoading(true);
      //             axiosClient.get(`/wallets/${walletId}`)
      //             .then(({ data }) => {
      //                   setLoading(false);
      //                   setwallet(data.data);
      //             })
      //             .catch(() => {
      //                   setLoading(false);
      //             });
      //       }
      // }, [walletId, actionId, programId, subprogramId, currentpage]);
      

      // const getsub = () => {
      //       setLoading(true);
            
      //       let endpoint = '';
      //       let filterKey = '';
            
      //       // if (actionId) {
      //       //   endpoint = '/operations';
      //       //   filterKey = 'action';
      //       // } else 
      //       if (subprogramId) {
      //             endpoint = '/actions';
      //             filterKey = 'subprogram';
      //       } else if (programId) {
      //             endpoint = '/subprograms';
      //             filterKey = 'program';
      //       } else if (walletId) {
      //             endpoint = '/programs';
      //             filterKey = 'wallet';
      //       } else {
      //             setLoading(false);
      //             return;
      //       }

      //       axiosClient.get(`${endpoint}?page=${currentpage}`)
      //       .then(({ data }) => {
      //               // Filter results based on parent ID
      //             const filteredData = data.data.filter(item => 
      //                   item[filterKey] === (actionId || subprogramId || programId || walletId)
      //             );
      //             setLoading(false);
      //             setsub(filteredData);
      //             settotalpages(data.meta.last_page);
      //       })
      //       .catch((error) => {
      //             setLoading(false);
      //             console.error("Error getting sub-entities:", error);
      //       setNotification({
      //             message: "Failed to load data",
      //             type: "error"
      //       });
      //       });
      // };

      // const info =  actionId ? "l'action" : subprogramId ? "le sous-program" : programId ? "le program" : walletId ? "le portefeuille" : "-";
      // const code =  actionId ? action.code : subprogramId ? subprogram.id : programId ? program.code : walletId ? wallet.code : "-";
      // const title =  actionId ? action.title : subprogramId ? subprogram.title : programId ? program.title : walletId ? wallet.title : "-";

      // return (
      //       <div className="project-overview">
      //             <div className="overview-section">
      //                   <h3>Informations sur {info}</h3>
      //                   <h5>Code: {code}</h5>
      //                   <h5>Intitulé: {title}</h5>
      //             </div>
      //             <div className="overview-section" style={{backgroundColor: "white"}}>
      //                   <h3>les opérations</h3>
      //                   {subEntities.length > 0 ? (
      //                   subEntities.map((entity, index) => (
      //                         <OperationItem key={index} entity ={entity} operationName={entity.title || "No title"} year="2024" isObserved creator="Fischer" status={index === 0 ? "Fini" : "En cours"} />    
      //                   ))
      //                   ) : (
      //                         !loading ? <p>Aucune opération trouvée</p> : <div>Loading ...</div>
      //                   )}
      //             </div>
      //       </div>
      // );
}

export default ProjectOverview;