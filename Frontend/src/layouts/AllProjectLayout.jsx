import React, { useState } from 'react'
import AllProjectHeader from './AllProjectHeader.jsx'
import SearchFilters from './../components/ui/SearchFilters.jsx'
import AllProjectList from './AllProjectList.jsx'
import './../assets/styles/allProjectLayout.css'
import './../assets/styles/icons.css'
import './../assets/styles/button.css'
import axios from '../axios-client.js'

function AllProjectLayout(props) {
      if (props.wallets) {
            return (
                  <div className="project-layout">
                        <AllProjectHeader txt="portefeuille" total={props.wallets.length} loading={props.loading}/>
                        <SearchFilters txt="portefeuille" />
                        {!props.loading ? <AllProjectList wallets={props.wallets} /> :
                              <div className="laoding">Loading...</div>
                        }
                  </div>
            );
      }else if(props.programs) {
            return (
                  <div className="project-layout">
                        <AllProjectHeader txt="programmes" total={props.programs.length} loading={props.loading}/>
                        <SearchFilters txt="programme" />
                        
                        {!props.loading ? <AllProjectList programs={props.programs} /> :
                              <div className="laoding">Loading...</div>
                        }
                  </div>
            );
      }else if(props.subprograms) {
            const [subprograms, setSubPrograms] = useState([]);
            const [search, setSearch] = useState('');
            const [loading, setLoading] = useState('');

            const handleSearchSubmit = (event) => {
                  setSearch(event.target.value);
                  event.preventDefault();
                  getActions();
                  console.log("hi");
            }

            const getActions=()=>{
                  setLoading(true)
                  axios.get(`/subprograms?program=${search}`)
                  .then(({ data }) => {
                  setLoading(false)
                  setSubPrograms(data.data)
                  settotalpages(data.meta.last_page)
                  })
                  .catch(() => {
                  setLoading(false)
                  })
            }
            
            return (
                  <div className="project-layout">
                              <AllProjectHeader txt="sous-programmes" total={props.subprograms.length} loading={props.loading} />
                              <SearchFilters txt="sousprogramme" />
                              <div className="search-container">
                                    <span className="search-icon"><i className="icon-search"></i></span>
                                    <input 
                                          onKeyDown={(event) => {
                                                if (event.key === 'Enter') {
                                                            handleSearchSubmit(event);
                                                }
                                          }} 
                                          type="text" 
                                          id="action-search" 
                                          placeholder="Search actions..." 
                                    />
                              </div>
            
                              {!props.loading ? <AllProjectList subprograms={props.subprograms} /> :
                                    <div className="laoding">Loading...</div>
                              }
                  </div>
            );
      }else if(props.actions){
            return (
                  <div className="project-layout">
                        <AllProjectHeader txt="actions" total={props.actions.length} loading={props.loading} />
                        <SearchFilters txt="action" />
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
                        <SearchFilters txt="operation" />
                        {!props.loading ? <AllProjectList operations={props.operations} /> :
                              <div className="laoding">Loading...</div>
                        }
                  </div>
            );
      }else if(props.projects) {
            return (
                  <div className="project-layout">
                        <AllProjectHeader txt="projets" total={props.projects.length} loading={props.loading} />
                        <SearchFilters txt="projet" />
                        {!props.loading ? <AllProjectList projects={props.projects} /> :
                              <div className="laoding">Loading...</div>
                        }
                  </div>
            );
      }else if(props.consultations) {
            
      }else if(props.partners) {
            return (
                  <div className="project-layout">
                        <AllProjectHeader txt="partners" total={props.partners.length} loading={props.loading} />
                        <SearchFilters txt="partner" />
                        {!props.loading ? <AllProjectList partners={props.partners} /> :
                              <div className="laoding">Loading...</div>
                        }
                  </div>
            );
      }
}

export default AllProjectLayout;