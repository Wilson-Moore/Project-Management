import AllProjectHeader from './AllProjectHeader.jsx'
import SearchFilters from './../components/ui/SearchFilters.jsx'
import AllProjectList from './AllProjectList.jsx'
import './../assets/styles/allProjectLayout.css'
import './../assets/styles/icons.css'
import './../assets/styles/button.css'

function AllProjectLayout(props) {
      if (props.wallets) {
            return (
                  <div className="project-layout">
                        <AllProjectHeader txt="portefeuille" total={props.wallets.length} loading={props.loading}/>
                        <SearchFilters txt="Wallet" />
                        {!props.loading ? <AllProjectList wallets={props.wallets} /> :
                              <div className="laoding">Loading...</div>
                        }
                  </div>
            );
      }else if(props.programs) {
            return (
                  <div className="project-layout">
                        <AllProjectHeader txt="programmes" total={props.programs.length} loading={props.loading}/>
                        <SearchFilters txt="Program" />
                        {!props.loading ? <AllProjectList programs={props.programs} /> :
                              <div className="laoding">Loading...</div>
                        }
                  </div>
            );
      }else if(props.subprograms) {
            return (
                  <div className="project-layout">
                        <AllProjectHeader txt="sous-programmes" total={props.subprograms.length} loading={props.loading} />
                        <SearchFilters txt="SubProgram" />
                        {!props.loading ? <AllProjectList subprograms={props.subprograms} /> :
                              <div className="laoding">Loading...</div>
                        }
                  </div>
            );
      }else if(props.actions){
            return (
                  <div className="project-layout">
                        <AllProjectHeader txt="actions" total={props.actions.length} loading={props.loading} />
                        <SearchFilters txt="Action" />
                        {!props.loading ? <AllProjectList actions={props.actions} /> :
                              <div className="laoding">Loading...</div>
                        }
                  </div>
            );
      }else if(props.operations) {
            
            const encoursCount = props.operations.filter(operation => 
                  operation.situation === "in the works"
            ).length;
            
            const finiCount = props.operations.filter(operation => 
                  operation.situation === "fini"
            ).length;
            
            const attCount = props.operations.filter(operation => 
                  operation.situation === "on halt"
            ).length;


            return (
                  <div className="project-layout">
                        <AllProjectHeader txt="opérations" total={props.operations.length} loading={props.loading} encours={encoursCount} fini={finiCount} enattente={attCount} />
                        <SearchFilters txt="Operation" />
                        {!props.loading ? <AllProjectList operations={props.operations} /> :
                              <div className="laoding">Loading...</div>
                        }
                  </div>
            );
      }else if(props.projects) {
            return (
                  <div className="project-layout">
                        <AllProjectHeader txt="projets" total={props.projects.length} loading={props.loading} />
                        <SearchFilters txt="Project" />
                        {!props.loading ? <AllProjectList projects={props.projects} /> :
                              <div className="laoding">Loading...</div>
                        }
                  </div>
            );
      }
}

export default AllProjectLayout;