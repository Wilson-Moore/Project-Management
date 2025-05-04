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

            return (
                  <div className="project-header">
                        <BreadCrumbs items={updateBreadcrumbPaths(BREADCRUMB_TEMPLATES.walletDetails)} dynamicLabels={{ walletName: wallet.title }} itemIds={{ walletId: wallet.code }} />
                        <div className="project-title">
                              <h1>Détails du portefeuille</h1>
                              <div className="project-status">
                                    <span className="status in-progress">In Progress</span>
                              </div>
                        </div>
                        <ProjectMeta />
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

            return (
                  <div className="project-header">
                        <BreadCrumbs items={updateBreadcrumbPaths(BREADCRUMB_TEMPLATES.programDetails)} dynamicLabels={{ programName: program.title, walletName: props._wallet.title }} itemIds={{ programId: program.code, walletId: props._wallet.code}} />
                        <div className="project-title">
                              <h1>Détails du programme</h1>
                              <div className="project-status">
                                    <span className="status in-progress">In Progress</span>
                              </div>
                        </div>
                        <ProjectMeta />
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
                              .replace(':subprogramId', subprogram.code || '')
                  }));
            };

            return (
                  <div className="project-header">
                        <BreadCrumbs items={updateBreadcrumbPaths(BREADCRUMB_TEMPLATES.subprogramDetails)} dynamicLabels={{ subProgramName: subprogram.title, programName: props._program.title, walletName: props._wallet.title }} itemIds={{ subprogramId: subprogram.code, programId: props._program.code, walletId: props._wallet.code }} />
                        <div className="project-title">
                              <h1>Détails du sous-programme</h1>
                              <div className="project-status">
                                    <span className="status in-progress">In Progress</span>
                              </div>
                        </div>
                        <ProjectMeta />
                  </div>
            );
      }
}
export default ProjectHeader;