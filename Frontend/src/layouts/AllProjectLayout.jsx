import AllProjectHeader from './AllProjectHeader.jsx'
import SearchFilters from './../components/ui/SearchFilters.jsx'
import AllProjectList from './AllProjectList.jsx'
import './../assets/styles/allProjectLayout.css'
import './../assets/styles/icons.css'

function AllProjectLayout(props) {
      if (props.wallets) {
            return (
                  <div className="project-layout">
                        <AllProjectHeader total={props.wallets.length}/>
                        <SearchFilters />
                        <AllProjectList wallets={props.wallets} />
                  </div>
            );
      }else if(props.programs) {
            return (
                  <div className="project-layout">
                        <AllProjectHeader total={props.programs.length}/>
                        <SearchFilters txt="Programme" />
                        <AllProjectList programs={props.programs} />
                  </div>
            );
      }
}

export default AllProjectLayout;