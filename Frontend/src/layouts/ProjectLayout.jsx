import ProjectHeader from './ProjectHeader.jsx'
import ProjectTabs from './ProjectTabs.jsx'
import './../assets/styles/ProjectLayout.css'
import {redirect, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "./../axios-client.js";
import {NotificationStateContext} from "./../contexts/NotificationContextProvider.jsx";


function ProjectLayout() {
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
      const [notFound, setNotFound] = useState('');
      
      useEffect(() => {
            
            if(actionId) {
                  // setLoading(true);
                  axiosClient.get(`/actions/${actionId}`)
                  .then(({ data }) => {
                        // setLoading(false);
                        setaction(data.data);
                  })
                  .catch(() => {
                        // setLoading(false);
                        console.log("there isnt a program with this code");
                        setNotFound("Action doesn't exist!");
                  });
            }
            
            
            if (subprogramId) {
                  // setLoading(true);
                  axiosClient.get(`/subprograms/${subprogramId}`)
                  .then(({ data }) => {
                        // setLoading(false);
                        setsubprogram(data.data);
                  })
                  .catch(() => {
                        // setLoading(false);
                        console.log("there isnt a program with this code");
                        setNotFound("SubProgram doesn't exist!");
                  });
            }
            
            if (programId) {
                  // setLoading(true);
                  axiosClient.get(`/programs/${programId}`)
                  .then(({ data }) => {
                        // setLoading(false);
                        setprogram(data.data);
                  })
                  .catch(() => {
                        // setLoading(false);
                        console.log("there isnt a program with this code");
                        setNotFound("Program doesn't exist!");
                        });
            }
            
            if (walletId) {
            // setLoading(true);
            axiosClient.get(`/wallets/${walletId}`)
            .then(({ data }) => {
                  // setLoading(false);
                  setwallet(data.data);
            })
            .catch(() => {
                  // setLoading(false);
                  console.log("there isnt a program with this code");
                  setNotFound("Wallet doesn't exist!");
                  });
            }
      }, [walletId, actionId, programId, subprogramId]);
      
      if(notFound) {
            return <h1>{notFound}</h1>;
      }
      return (
            <div className="project-detail">
                  <ProjectHeader />
                  <ProjectTabs />
            </div>
      );
}

export default ProjectLayout