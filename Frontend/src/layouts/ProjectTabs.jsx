import TabsNav from './../components/ui/TabsNav.jsx'
import TabContent from './../components/ui/TabContent.jsx'
import './../assets/styles/projectTabs.css'

function ProjectTabs(props) {

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
                        <TabContent program={program} active/>
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
      }
}

export default ProjectTabs
