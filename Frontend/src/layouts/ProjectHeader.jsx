import BreadCrumbs from './../components/ui/BreadCrumbs.jsx'
import ProjectMeta from './../components/ui/ProjectMeta.jsx'
import './../assets/styles/projectHeader.css'
import { BREADCRUMB_TEMPLATES } from '../constants/breadcrumbs.js';
import AddNew from './../components/ui/AddNew.jsx'
import Avis from './../components/ui/Avis.jsx'

function ProjectHeader(props) {
      if(props.wallet) {
            const { wallet } = props;
      
            const updateBreadcrumbPaths = (walletDetails) => {
                  return walletDetails.map(item => ({
                        ...item,
                        path: item.path
                              .replace(':walletId', wallet.code || '')
                  }));
            };

            const statusclass = "status" + (wallet.active_status == 'Active' ? ' status-in-progress' : '');
            return (
                  <div className="project-header">
                        <BreadCrumbs items={updateBreadcrumbPaths(BREADCRUMB_TEMPLATES.walletDetails)} dynamicLabels={{ walletName: wallet.title }} itemIds={{ walletId: wallet.code }} />
                        <div className="project-title">
                              <h1>Détails du portefeuille</h1>
                              <div className="project-status">
                                    <span className={statusclass}>{wallet.active_status}</span>
                              </div>
                        </div>
                        <ProjectMeta wallet={wallet} />
                        <div className='add-new'>
                              <AddNew wallet={wallet} txt="programme" disabled/>
                              <AddNew wallet={wallet} txt="portefeuille" edit/>
                        </div>
                  </div>
            );
      }else if(props.program) {
            const { program } = props;

            const updateBreadcrumbPaths = (programDetails) => {
                  return programDetails.map(item => ({
                        ...item,
                        path: item.path
                        .replace(':walletId', props._wallet.code || '')
                        .replace(':programId', program.code || '')
                  }));
            };
            
            const statusclass = "status" + (program.active_status == 'Active' ? ' status-in-progress' : '');
            return (
                  <div className="project-header">
                        <BreadCrumbs items={updateBreadcrumbPaths(BREADCRUMB_TEMPLATES.programDetails)} dynamicLabels={{ programName: program.title, walletName: props._wallet.title }} itemIds={{ programId: program.code, walletId: props._wallet.code}} />
                        <div className="project-title">
                              <h1>Détails du programme</h1>
                              <div className="project-status">
                                    <span className={statusclass}>{program.active_status}</span>
                              </div>
                        </div>
                        <ProjectMeta program={program} _wallet={props._wallet} />
                        <div className='add-new'>
                              <AddNew program={program} txt="sousprogramme" disabled/>
                              <AddNew program={program} txt="programme" edit/>
                        </div>
                  </div>
            );
      } else if (props.subprogram) {
            const { subprogram } = props;
            
            const updateBreadcrumbPaths = (subprogramDetails) => {
                  return subprogramDetails.map(item => ({
                        ...item,
                        path: item.path
                        .replace(':walletId', props._wallet.code || '')
                        .replace(':programId', props._program.code || '')
                        .replace(':subProgramId', subprogram.id || '')
                  }));
            };
            
            const statusclass = "status" + (subprogram.active_status == 'Active' ? ' status-in-progress' : '');
            return (
                  <div className="project-header">
                        <BreadCrumbs items={updateBreadcrumbPaths(BREADCRUMB_TEMPLATES.subprogramDetails)} dynamicLabels={{ subProgramName: subprogram.title, programName: props._program.title, walletName: props._wallet.title }} itemIds={{ subprogramId: subprogram.id, programId: props._program.code, walletId: props._wallet.code }} />
                        <div className="project-title">
                              <h1>Détails du sous-programme</h1>
                              <div className="project-status">
                                    <span className={statusclass}>{subprogram.active_status}</span>
                              </div>
                        </div>
                        <ProjectMeta subprogram={subprogram} _program={props._program} _wallet={props._wallet}/>
                        <div className='add-new'>
                              <AddNew subprogram={subprogram} _program={props._program} _wallet={props._wallet} txt="action" disabled/>
                              <AddNew subprogram={subprogram} _program={props._program} _wallet={props._wallet} txt="sousprogramme" edit/>
                        </div>
                  </div>
            );
      }else if(props.action) {
            const { action } = props;

            const updateBreadcrumbPaths = (actionDetails) => {
                  return actionDetails.map(item => ({
                        ...item,
                        path: item.path
                              .replace(':walletId', props._wallet.code || '')
                              .replace(':programId', props._program.code || '')
                              .replace(':subProgramId', props._subprogram.id || '')
                              .replace(':actionId', action.code || '')
                        }));
                  };
                  
                  const statusclass = "status" + (action.active_status == 'Active' ? ' en-cours' : '');
                  return (
                        <div className="project-header">
                        <BreadCrumbs items={updateBreadcrumbPaths(BREADCRUMB_TEMPLATES.actionDetails)} dynamicLabels={{actionName: action.title, subProgramName: props._subprogram.title, programName: props._program.title, walletName: props._wallet.title }} itemIds={{actionId: action.code, subProgramId: props._subprogram.id, programId: props._program.code, walletId: props._wallet.code }} />
                        <div className="project-title">
                              <h1>Détails d'Action</h1>
                              <div className="project-status">
                                    <span className={statusclass}>{action.active_status}</span>
                              </div>
                        </div>
                        <ProjectMeta action={action}/>
                        <div className='add-new'>
                              <AddNew action={action} txt="operation" disabled/>
                              <AddNew action={action} txt="action" edit/>
                        </div>
                  </div>
            );
            
            
      }else if(props.operation) {
            const { operation } = props;
            
            const updateBreadcrumbPaths = (operationDetails) => {
                  return operationDetails.map(item => ({
                        ...item,
                        path: item.path
                        .replace(':walletId', props._wallet.code || '')
                        .replace(':programId', props._program.code || '')
                        .replace(':subProgramId', props._subprogram.id || '')
                        .replace(':actionId', props._action.code || '')
                        .replace(':operationId', operation.number || '')
                  }));
            };
            const statusclass = "status" + (operation.situation == 'in the works' ? ' en-cours' : operation.situation == 'on halt' ? ' pending' : '');
            return (
                  <div className="project-header">
                        <BreadCrumbs items={updateBreadcrumbPaths(BREADCRUMB_TEMPLATES.operationDetails)} dynamicLabels={{operationName: operation.title, actionName: props._action.title, subProgramName: props._subprogram.title, programName: props._program.title, walletName: props._wallet.title }} itemIds={{ operationId: operation.number, actionId: props._action.code, subProgramId: props._subprogram.id, programId: props._program.code, walletId: props._wallet.code }} />
                        <div className="project-title">
                              <h1>Détails d'Opération</h1>
                              <div className="project-status">
                                    <span className={statusclass}>{operation.situation}</span>
                              </div>
                        </div>
                        <ProjectMeta operation={operation}/>
                        <div className='add-new'>
                              <AddNew operation={operation} txt="projet" disabled/>
                              {/* <AddNew operation={operation} txt="consultation" disabled/>
                              <AddNew operation={operation} txt="avis d'appel d'offres" disabled/> */}
                              <Avis operation={operation}/>
                              <AddNew operation={operation} txt="operation" edit/>
                        </div>
                  </div>
            );
            
      }else if(props.project) {
            const { project } = props;

            const updateBreadcrumbPaths = (propjectDetails) => {
                  return propjectDetails.map(item => ({
                        ...item,
                        path: item.path
                              .replace(':walletId', props._wallet.code || '')
                              .replace(':programId', props._program.code || '')
                              .replace(':subProgramId', props._subprogram.id || '')
                              .replace(':actionId', props._action.code || '')
                              .replace(':operationId', props._operation.number || '')
                              .replace(':projectId', project.id || '')
                  }));
            };

            const statusclass = "status" + (project.active_status == 'Active' ? ' en-cours' :  ' pending');
            return (
                  <div className="project-header">
                        <BreadCrumbs items={updateBreadcrumbPaths(BREADCRUMB_TEMPLATES.projectDetails)} dynamicLabels={{ projectName: project.objectif, operationName: props._operation.title, actionName: props._action.title, subProgramName: props._subprogram.title, programName: props._program.title, walletName: props._wallet.title }} itemIds={{ projectId: project.id, operationId: props._operation.number, actionId: props._action.code, subProgramId: props._subprogram.id, programId: props._program.code, walletId: props._wallet.code }} />
                        <div className="project-title">
                              <h1>Détails du projet</h1>
                              <div className="project-status">
                                    <span className={statusclass}>{project.active_status}</span>
                              </div>
                        </div>
                        <ProjectMeta project={project} _operation={props._operation} _action={props._action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet}/>
                  </div>
            );
      }else if(props.consultation) {
            const { consultation } = props;

            const updateBreadcrumbPaths = (consultationDetails) => {
                  return consultationDetails.map(item => ({
                        ...item,
                        path: item.path
                              .replace(':walletId', props._wallet.code || '')
                              .replace(':programId', props._program.code || '')
                              .replace(':subProgramId', props._subprogram.id || '')
                              .replace(':actionId', props._action.code || '')
                              .replace(':operationId', props._operation.number || '')
                              .replace(':consultation', consultation.id || '')
                  }));
            };

            const statusclass = "status" + (consultation.active_status == 'Active' ? ' en-cours' :  ' pending');
            return (
                  <div className="project-header">
                        <BreadCrumbs items={updateBreadcrumbPaths(BREADCRUMB_TEMPLATES.consultationDetails)} dynamicLabels={{ consultationName: 'consultation', operationName: props._operation.title, actionName: props._action.title, subProgramName: props._subprogram.title, programName: props._program.title, walletName: props._wallet.title }} itemIds={{ consultationId: consultation.id, operationId: props._operation.number, actionId: props._action.code, subProgramId: props._subprogram.id, programId: props._program.code, walletId: props._wallet.code }} />
                        <div className="project-title">
                              <h1>Détails du consultation</h1>
                              <div className="project-status">
                                    <span className={statusclass}>{consultation.active_status}</span>
                              </div>
                        </div>
                        <ProjectMeta consultation={consultation} _operation={props._operation} _action={props._action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet}/>
                  </div>
            );
      }else if(props.notice) {
            const { notice } = props;

            const updateBreadcrumbPaths = (noticeDetails) => {
                  return noticeDetails.map(item => ({
                        ...item,
                        path: item.path
                              .replace(':walletId', props._wallet.code || '')
                              .replace(':programId', props._program.code || '')
                              .replace(':subProgramId', props._subprogram.id || '')
                              .replace(':actionId', props._action.code || '')
                              .replace(':operationId', props._operation.number || '')
                              .replace(':notice', notice.id || '')
                  }));
            };

            const statusclass = "status" + (notice.active_status == 'Active' ? ' en-cours' :  ' pending');
            return (
                  <div className="project-header">
                        <BreadCrumbs items={updateBreadcrumbPaths(BREADCRUMB_TEMPLATES.noticeDetails)} dynamicLabels={{ noticeName: "Avis d'appel d'offres", operationName: props._operation.title, actionName: props._action.title, subProgramName: props._subprogram.title, programName: props._program.title, walletName: props._wallet.title }} itemIds={{ noticeId: notice.id, operationId: props._operation.number, actionId: props._action.code, subProgramId: props._subprogram.id, programId: props._program.code, walletId: props._wallet.code }} />
                        <div className="project-title">
                              <h1>Détails de l'Avis d'appel d'offres</h1>
                              <div className="project-status">
                                    <span className={statusclass}>{notice.active_status}</span>
                              </div>
                        </div>
                        <ProjectMeta notice={notice} _operation={props._operation} _action={props._action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet}/>
                        <AddNew notice={notice} txt="avis d'appel d'offres" edit/>
                  </div>
            );
      }
}
export default ProjectHeader;