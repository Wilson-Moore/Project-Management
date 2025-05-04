import ProjectListItem from "../components/ui/ProjectListItem.jsx";

function AllProjectList(props) {
      if (props.wallets) {
            return (
                  <div className="actions-list" id="actions-list">
                        {props.wallets.map((wallet) => (
                              <ProjectListItem key={wallet.code} wallet={wallet} />
                        ))}
                  </div>
            );
      }else if(props.programs) {
            return (
                  <div className="actions-list" id="actions-list">
                        {props.programs.map((program) => (
                              <ProjectListItem key={program.code} program={program} />
                        ))}
                  </div>
            );
      }
}

export default AllProjectList;