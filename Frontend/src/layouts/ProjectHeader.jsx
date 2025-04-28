import BreadCrumbs from './../components/ui/BreadCrumbs.jsx'
import ProjectMeta from './../components/ui/ProjectMeta.jsx'
import './../assets/styles/projectHeader.css'
import { BREADCRUMB_TEMPLATES } from '../constants/breadcrumbs.js';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import {NotificationStateContext} from "../contexts/NotificationContextProvider.jsx";

function ProjectHeader() {
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


      useEffect(() => {
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
            }

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
            }

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
            }
      }, [walletId, actionId, programId, subprogramId]);

      

      const dynamicLabels = {
            walletName: wallet.title,
            programName: program.title,
            subProgramName: subprogram.title,
            actionId: action.type
      };

      const itemIds = {
            walletId: walletId && wallet.code,
            programId: programId && program.code,
            subProgramId: subprogramId && subprogram.code,
            actionId: actionId && action.code
      };

      const pathsWithIds = BREADCRUMB_TEMPLATES.actionDetails.map(item => {
            if (!item.path) return item;
            if(walletId) {
                  return {
                        ...item,
                        path: item.path
                        .replace(':walletId', itemIds.walletId)
                  }
            }else {
                  
            }
            if(programId) {
                  return {
                        ...item,
                        path: item.path
                        .replace(':programId', itemIds.programId)
                  }
            }
            if(subprogramId) {
                  return {
                        ...item,
                        path: item.path
                        .replace(':subprogramId', itemIds.subprogramId)
                  }
            }
            if(action) {
                  return {
                        ...item,
                        path: item.path
                        .replace(':actionId', itemIds.actionId)
                  }
            }

            // return {
            //       ...item,
            //       path: item.path
            //       .replace(':walletId', itemIds.walletId)
            //       .replace(':programId', itemIds.programId)
            //       .replace(':subProgramId', itemIds.subProgramId)
            //       .replace(':actionId', itemIds.actionId)
            // };
      });

      const info =  actionId ? "d'action" : subprogramId ? "du sous-program" : programId ? "du program" : walletId ? "du portefeuille" : "-";
      const code =  actionId ? action.code : subprogramId ? subprogram.code : programId ? program.code : walletId ? wallet.code : "-";
      const title =  actionId ? action.title : subprogramId ? subprogram.title : programId ? program.title : walletId ? wallet.title : "-";

      if(!loading) {
            return (
                  <div className="project-header">
                        <BreadCrumbs items={pathsWithIds} dynamicLabels={dynamicLabels} itemIds={itemIds} />
                        <div className="project-title">
                              <h1>Détails {info}</h1>
                              <div className="project-status">
                                    <span className="status in-progress">In Progress</span>
                              </div>
                        </div>
                        <ProjectMeta />
                  </div>
            );
      }else {
            return (
                  <div className="project-header">
                        <div>Loading...</div>
                        <div className="project-title">
                              <h1>Détails d'action</h1>
                              <div className="project-status">
                                    <span className="status in-progress">In Progress</span>
                              </div>
                        </div>
                        <ProjectMeta />
                  </div>
            );
      }
}

export default ProjectHeader