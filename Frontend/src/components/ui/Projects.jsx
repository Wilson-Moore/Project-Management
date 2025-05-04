import { useState, useEffect } from 'react';
import SearchFilters from "./SearchFilters.jsx";
import OperationItem from './OperationItem.jsx';
import axiosClient from '../../axios-client.js'; // Make sure the path is correct

function Projects(props) {
      const { operation } = props;
      const [projects, setProjects] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      useEffect(() => {
            // Only fetch projects data when this component mounts
            const fetchProjects = async () => {
                  if (!operation || !operation.number) return;
                  
                  try {
                  // Fetch projects data specifically for this operation
                  const response = await axiosClient.get(`/operations/${operation.number}?include=projects`);
                  const operationData = response.data.data;
                  setProjects(operationData.projects || []);
                  setLoading(false);
                  } catch (err) {
                  setError(err.message || "Failed to load projects");
                  setLoading(false);
                  }
            };

            fetchProjects();
      }, [operation]);

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
                  {projects.length > 0 ? (
                  projects.map((project, index) => (
                        <OperationItem 
                              key={index} 
                              entity={project} 
                              operationName={project.id || "No title"} 
                              year={project.start_date.slice(0,4) || "-"}
                        />
                  ))
                  ) : (
                  <p>Aucun projet trouvé</p>
                  )}
            </div>
      );
}

export default Projects;