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
      }else if(props.subprograms) {
            return (
                  <div className="actions-list" id="actions-list">
                        {props.subprograms.map((subprogram) => (
                              <ProjectListItem key={subprogram.id} subprogram={subprogram} />
                        ))}
                  </div>
            );
      }else if(props.actions) {
            return (
                  <div className="actions-list" id="actions-list">
                        {props.actions.map((action) => (
                              <ProjectListItem key={action.code} action={action} />
                        ))}
                  </div>
            );
      }else if(props.operations) {
            return (
                  <div className="actions-list" id="actions-list">
                        {props.operations.map((operation) => (
                              <ProjectListItem key={operation.number} operation={operation} />
                        ))}
                  </div>
            );
      }else if(props.projects) {
            return (
                  <div className="actions-list" id="actions-list">
                        {props.projects.map((project) => (
                              <ProjectListItem key={project.id} project={project} />
                        ))}
                  </div>
            );
      }else if(props.consultations) {
            
      }else if(props.partners) {
            return (
                  <div className="actions-list" id="actions-list">
                        {props.partners.map((partner) => (
                              <ProjectListItem key={partner.nif} partner={partner} />
                        ))}
                  </div>
            );
      }
}

export default AllProjectList;