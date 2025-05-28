import Consultations from './Consultations.jsx';
import ProjectOverview from './ProjectOverview';
import Projects from './Projects.jsx';
import Programs from './Programs.jsx';
import SubPrograms from './Subprograms.jsx';
import Actions from './Actions.jsx';
import Operations from './Operations.jsx';
import Notices from './Notices.jsx';
import Documents from './Documents.jsx';

function TabContent(props) {
      const className = "tab-content" + (props.active ? " active": "");
      
      if(props.wallet) {
            const { wallet } = props;
            return (
                  <div className={className}>
                        {props.overview ? <ProjectOverview wallet={wallet} /> :
                        props.programs ? <Programs wallet={wallet}/> : ""}
                  </div>
            );
      }else if(props.program) {
            const { program } = props;
            return (
                  <div className={className}>
                        {props.overview ? <ProjectOverview program={program} _wallet={props._wallet} /> :
                        props.subprograms ? <SubPrograms program={program}/> : ""}
                  </div>
            );
      }else if(props.subprogram) {
            const { subprogram } = props;
            return (
                  <div className={className}>
                        {props.overview ? <ProjectOverview subprogram={subprogram} _program={props._program} _wallet={props._wallet} /> :
                        props.actions ? <Actions subprogram={subprogram}/> : ""}
                  </div>
            );
      }else if(props.action) {
            const { action} = props;
            return (
                  <div className={className}>
                        {props.overview ? <ProjectOverview action={action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet} /> :
                        props.operations ? <Operations action={action}/> : ""}
                  </div>
            );
      }
      else if(props.operation) {
            const { operation } = props;
            return (
                  <div className={className}>
                        {props.overview ? <ProjectOverview operation={operation} _action={props._action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet} /> :
                        props.projects ? <Projects operation={operation}/> : 
                        props.consultations ? <Consultations operation={operation} /> : 
                        props.notices ? <Notices operation={operation} /> : 
                        props.documents ? <Documents operation={operation}/> : ''}
                  </div>
            );
      }else if(props.project) {
            const { project } = props;
            return (
                  <div className={className}>
                        {props.overview ? <ProjectOverview project={project}  /> : ""}
                  </div>
            );
      }else if(props.consultation) {
            const { consultation } = props;
            return (
                  <div className={className}>
                        {props.overview ? <ProjectOverview consultation={consultation}  /> : ""}
                  </div>
            );
      }else if(props.notice) {
            const { notice } = props;
            return (
                  <div className={className}>
                        {props.overview ? <ProjectOverview notice={notice}  /> : ""}
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