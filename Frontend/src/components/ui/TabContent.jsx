import ProjectOverview from './ProjectOverview';

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
      }
}

export default TabContent;