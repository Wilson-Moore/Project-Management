import TabsNav from './../components/ui/TabsNav.jsx'
import TabContent from './../components/ui/TabContent.jsx'
import './../assets/styles/projectTabs.css'

function ProjectTabs() {
      return (
            <div className="project-tabs">
                  <TabsNav />
                  <TabContent active/>
            </div>
      );
}

export default ProjectTabs
