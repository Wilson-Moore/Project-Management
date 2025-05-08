import { useState, useEffect } from 'react';
import SearchFilters from "./SearchFilters.jsx";
import OperationItem from './OperationItem.jsx';
import axiosClient from '../../axios-client.js';
import ProjectListItem from './ProjectListItem.jsx';

function Projects(props) {
      const { operation } = props;
      const [projects, setProjects] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      
      useEffect(() => {setProjects(operation.projects);})
      
      if (loading) {
            return (
                  <div className="project-projects">
                  <h3>Les projets</h3>
                  <div className="loading">Chargement des projets...</div>
                  </div>
            );
      }

      if (error) {
            return (
                  <div className="project-projects">
                  <h3>Les projets</h3>
                  <div className="error">{error}</div>
                  </div>
            );
      }

      return (
            <div className="project-projects">
                  {/* <SearchFilters/> */}
                  <h3>Les projets</h3>
                  {projects && projects.length > 0 ? (
                        projects.map((project) => (
                              <ProjectListItem key={project.id} project={project} />
                        ))
                  ) : (
                  <p>Aucun projet trouvé</p>
                  )}
            </div>
      );
}

export default Projects;