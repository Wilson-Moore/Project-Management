import React, { useState } from 'react';
import TabsNav from './../components/ui/TabsNav.jsx'
import TabContent from './../components/ui/TabContent.jsx'
import './../assets/styles/projectTabs.css'


function ProjectTabs(props) {

      const [clicked, setClicked] = useState(' ');

      if (props.wallet) {
            const { wallet } = props;
            return (
                  <div className="project-tabs">
                        <TabsNav />
                        <TabContent wallet={wallet} active/>
                  </div>
            );
      }else if(props.program) {
            const { program } = props;
            return (
                  <div className="project-tabs">
                        <TabsNav />
                        <TabContent program={program} _wallet={props._wallet} active/>
                  </div>
            );
      }else if(props.subprogram) {
            const { subprogram } = props;
            return (
                  <div className="project-tabs">
                        <TabsNav />
                        <TabContent subprogram={subprogram} active _program={props._program} _wallet={props._wallet}/>
                  </div>
            );
      }else if(props.action) {
            const { action } = props;
            return (
                  <div className="project-tabs">
                        <TabsNav clicked={clicked}/>
                        <TabContent active action={action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet} overview/>
                        <TabContent />
                        <TabContent />
                        <TabContent />
                        <TabContent />
                  </div>
            );
      }else if(props.operation) {
            const { operation } = props;
            return (
                  <div className="project-tabs">
                        <TabsNav clicked={clicked}/>
                        <TabContent operation={operation} active _action={props._action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet} overview/>
                        <TabContent />
                        <TabContent operation={operation} consultations/>
                        <TabContent />
                        <TabContent operation={operation} projects/>
                  </div>
            );
      }else if(props.project) {
            const { project } = props;
            return (
                  <div className="project-tabs">
                        <TabsNav clicked={clicked}/>
                        <TabContent project={project} active overview/>
                  </div>
            );
      }
}

export default ProjectTabs
