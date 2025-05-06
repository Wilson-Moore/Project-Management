import ProjectHeader from './ProjectHeader.jsx'
import ProjectTabs from './ProjectTabs.jsx'
import './../assets/styles/projectLayout.css'


function ProjectLayout(props) {
      if(props.wallet){
            const { wallet } = props;
            return (
                  <div className="project-layout">
                        <ProjectHeader wallet={wallet} />
                        <ProjectTabs wallet={wallet} />
                  </div>
            );
      }else if(props.program) {
            const { program } = props;
            return (
                  <div className="project-layout">
                        <ProjectHeader program={program} _wallet={props._wallet}/>
                        <ProjectTabs program={program} _wallet={props._wallet}/>
                  </div>
            );
      }else if(props.subprogram) {
            const { subprogram } = props;
            return (
                  <div className="project-layout">
                        <ProjectHeader subprogram={subprogram} _program={props._program} _wallet={props._wallet}/>
                        <ProjectTabs subprogram={subprogram} _program={props._program} _wallet={props._wallet}/>
                  </div>
            );
      }else if(props.action) {
            const { action } = props;
            return (
                  <div className="project-layout">
                        <ProjectHeader  action={action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet}/>
                        <ProjectTabs action={action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet}/>
                  </div>
            );
      }else if(props.operation) {
            const { operation } = props;
            return (
                  <div className="project-layout">
                        <ProjectHeader operation={operation} _action={props._action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet}/>
                        <ProjectTabs operation={operation} _action={props._action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet}/>
                  </div>
            );
      }else if(props.project) {
            const { project } = props;
            return (
                  <div className="project-layout">
                        <ProjectHeader project={project}/>
                        <ProjectTabs project={project} />
                  </div>
            );
      }
      // const { 
      //       walletId, 
      //       programId, 
      //       subprogramId, 
      //       actionId 
      // } = useParams();
      // const [wallet,setwallet]=useState({code: '',title: ''});
      // const [program,setprogram]=useState({code: '',title: '',wallet_code:''});
      // const [subprogram,setsubprogram]=useState({code: '',title: '',program_code:''});
      // const [action,setaction]=useState({code: '',type: '',subprogram_code:''});
      // const [loading,setLoading]=useState(false);
      // const {setNotification}=NotificationStateContext()
      // const [errors,setErrors]=useState(null)
      // const navigate=useNavigate()
      // const [notFound, setNotFound] = useState('');
      
      // useEffect(() => {
            
      //       if(actionId) {
      //             // setLoading(true);
      //             axiosClient.get(`/actions/${actionId}`)
      //             .then(({ data }) => {
      //                   // setLoading(false);
      //                   setaction(data.data);
      //             })
      //             .catch(() => {
      //                   // setLoading(false);
      //                   console.log("there isnt a program with this code");
      //                   setNotFound("Action doesn't exist!");
      //             });
      //       }
            
            
      //       if (subprogramId) {
      //             // setLoading(true);
      //             axiosClient.get(`/subprograms/${subprogramId}`)
      //             .then(({ data }) => {
      //                   // setLoading(false);
      //                   setsubprogram(data.data);
      //             })
      //             .catch(() => {
      //                   // setLoading(false);
      //                   console.log("there isnt a program with this code");
      //                   setNotFound("SubProgram doesn't exist!");
      //             });
      //       }
            
      //       if (programId) {
      //             // setLoading(true);
      //             axiosClient.get(`/programs/${programId}`)
      //             .then(({ data }) => {
      //                   // setLoading(false);
      //                   setprogram(data.data);
      //             })
      //             .catch(() => {
      //                   // setLoading(false);
      //                   console.log("there isnt a program with this code");
      //                   setNotFound("Program doesn't exist!");
      //                   });
      //       }
            
      //       if (walletId) {
      //       // setLoading(true);
      //       axiosClient.get(`/wallets/${walletId}`)
      //       .then(({ data }) => {
      //             // setLoading(false);
      //             setwallet(data.data);
      //       })
      //       .catch(() => {
      //             // setLoading(false);
      //             console.log("there isnt a program with this code");
      //             setNotFound("Wallet doesn't exist!");
      //             });
      //       }
      // }, [walletId, actionId, programId, subprogramId]);
      
      // if(notFound) {
      //       return <h1>{notFound}</h1>;
      // }

}

export default ProjectLayout