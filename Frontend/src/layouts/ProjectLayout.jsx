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
                        <ProjectHeader project={project} _operation={props._operation} _action={props._action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet}/>
                        <ProjectTabs project={project} _operation={props._operation} _action={props._action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet}/>
                  </div>
            );
      }else if(props.consultation) {
            const { consultation } = props;
            return (
                  <div className="project-layout">
                        <ProjectHeader consultation={consultation} _operation={props._operation} _action={props._action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet}/>
                        <ProjectTabs consultation={consultation} _operation={props._operation} _action={props._action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet}/>
                  </div>
            );
      }else if(props.notice) {
            const { notice } = props;
            return (
                  <div className="project-layout">
                        <ProjectHeader notice={notice} _operation={props._operation} _action={props._action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet}/>
                        <ProjectTabs notice={notice} _operation={props._operation} _action={props._action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet}/>
                  </div>
            );
      }
}

export default ProjectLayout