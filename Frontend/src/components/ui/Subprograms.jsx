import { useState, useEffect } from 'react';
import SearchFilters from "./SearchFilters.jsx";
import OperationItem from './OperationItem.jsx';
import axiosClient from '../../axios-client.js';
import ProjectListItem from './ProjectListItem.jsx';

function SubPrograms(props) {
      const { program } = props;
      const [subprograms, setSubPrograms] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      
      useEffect(() => {setSubPrograms(program.subprograms);})
      
      if (loading) {
            return (
                  <div className="project-subprograms">
                  <h3>Les sous sous programmes</h3>
                  <div className="loading">Chargement des sous programmes...</div>
                  </div>
            );
      }

      if (error) {
            return (
                  <div className="project-subprograms">
                  <h3>Les sous programmes</h3>
                  <div className="error">{error.message}</div>
                  </div>
            );
      }

      return (
            <div className="project-subprograms">
                  {/* <SearchFilters/> */}
                  <h3>Les sous programmes</h3>
                  {subprograms && subprograms.length > 0 ? (
                        subprograms.map((subprogram) => (
                              <ProjectListItem key={subprogram.id} subprogram={subprogram} />
                        ))
                  ) : (
                  <p>Aucun sous-programme trouvé</p>
                  )}
            </div>
      );
}

export default SubPrograms;