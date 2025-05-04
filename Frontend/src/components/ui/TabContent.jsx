import Consultations from './Consultations.jsx';
import ProjectOverview from './ProjectOverview';
import Projects from './Projects.jsx';

function TabContent(props) {
      const className = "tab-content" + (props.active ? " active": "");

      if(props.wallet) {
            const { wallet } = props;
            return (
                  <div className={className}>
                        <ProjectOverview wallet={wallet} />
                  </div>
            );
      }else if(props.program) {
            const { program } = props;
            return (
                  <div className={className}>
                        <ProjectOverview program={program} />
                  </div>
            );
      }else if(props.subprogram) {
            const { subprogram } = props;
            return (
                  <div className={className}>
                        <ProjectOverview subprogram={subprogram} _program={props._program} _wallet={props._wallet} />
                  </div>
            );
      }else if(props.operation) {
            const { operation } = props;
            return (
                  <div className={className}>
                        {props.overview ? <ProjectOverview operation={operation} _action={props._action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet} /> :
                        props.projects ? <Projects operation={operation}/> : 
                        props.consultations ? <Consultations operation={operation} /> : ""}
                  </div>
            );
      }else if(props.project) {
            const { project } = props;
            return (
                  <div className={className}>
                        {props.overview ? <ProjectOverview project={project} _operation={props._operation} _action={props._action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet} /> : ""}
                  </div>
            );
      }else {
            return (
                  <div className={className}>

                  </div>
            );
      }
}

export default TabContent;