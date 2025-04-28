import ProjectOverview from './ProjectOverview';

function TabContent(props) {
      const className = "tab-content" + (props.active ? " active": "");

      return (
            <div className={className}>
                  <ProjectOverview />
            </div>
      );
}

export default TabContent;