import BreadCrumbs from './../components/ui/BreadCrumbs.jsx'
import ProjectMeta from './../components/ui/ProjectMeta.jsx'
import './../assets/styles/projectHeader.css'
import { BREADCRUMB_TEMPLATES } from '../constants/breadcrumbs.js';

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
                        <BreadCrumbs items={updateBreadcrumbPaths(BREADCRUMB_TEMPLATES.subprogramDetails)} dynamicLabels={{ subProgramName: subprogram.title, programName: props._program.title, walletName: props._wallet.title }} itemIds={{ subprogramId: subprogram.code, programId: props._program.code, walletId: props._wallet.code }} />
                        <div className="project-title">
                              <h1>Détails du sous-programme</h1>
                              <div className="project-status">
                                    <span className={statusclass}>{subprogram.active_status}</span>
                              </div>
                        </div>
                        <ProjectMeta subprogram={subprogram} _program={props._program} _wallet={props._wallet}/>
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
                  </div>
            );
            
      }else if(props.project) {
            const { project } = props;

            // const updateBreadcrumbPaths = (propjectDetails) => {
            //       return propjectDetails.map(item => ({
            //             ...item,
            //             path: item.path
            //                   .replace(':walletId', props._wallet.code || '')
            //                   .replace(':programId', props._program.code || '')
            //                   .replace(':subProgramId', props._subprogram.id || '')
            //                   .replace(':actionId', props._action.code || '')
            //                   .replace(':operationId', props._operation.number || '')
            //                   .replace(':projectId', project.id || '')
            //       }));
            // };

            return (
                  <div className="project-header">
                        {/* <BreadCrumbs items={updateBreadcrumbPaths(BREADCRUMB_TEMPLATES.projectDetails)} dynamicLabels={{ projectName: project.objectif, operationName: props._operation.title, actionName: props._action.title, subProgramName: props._subprogram.title, programName: props._program.title, walletName: props._wallet.title }} itemIds={{ projectId: project.id, operationId: props._operation.number, actionId: props._action.code, subProgramId: props._subprogram.id, programId: props._program.code, walletId: props._wallet.code }} /> */}
                        <div className="project-title">
                              <h1>Détails du projet</h1>
                              <div className="project-status">
                                    <span className="status in-progress">{project.situation}</span>
                              </div>
                        </div>
                        <ProjectMeta project={project} />
                  </div>
            );
      }
}
export default ProjectHeader;