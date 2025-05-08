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
                        <TabsNav type='wallet'/>
                        <TabContent wallet={wallet} active overview/>
                        <TabContent wallet={wallet} programs/>
                  </div>
            );
      }else if(props.program) {
            const { program } = props;
            return (
                  <div className="project-tabs">
                        <TabsNav type='program'/>
                        <TabContent program={program} _wallet={props._wallet} active overview/>
                        <TabContent program={program} _wallet={props._wallet} subprograms/>
                  </div>
            );
      }else if(props.subprogram) {
            const { subprogram } = props;
            return (
                  <div className="project-tabs">
                        <TabsNav type='subprogram'/>
                        <TabContent subprogram={subprogram} active _program={props._program} _wallet={props._wallet} overview/>
                        <TabContent subprogram={subprogram} _program={props._program} _wallet={props._wallet} actions/>
                  </div>
            );
      }else if(props.action) {
            const { action } = props;
            return (
                  <div className="project-tabs">
                        <TabsNav type='action'/>
                        <TabContent active action={action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet} overview/>
                        <TabContent action={action} _subprogram={props._subprogram} _program={props._program} _wallet={props._wallet} operations/>
                  </div>
            );
      }else if(props.operation) {
            const { operation } = props;
            return (
                  <div className="project-tabs">
                        <TabsNav type='operation'/>
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
                        <TabsNav type='project'/>
                        <TabContent project={project} active overview/>
                  </div>
            );
      }
}

export default ProjectTabs
