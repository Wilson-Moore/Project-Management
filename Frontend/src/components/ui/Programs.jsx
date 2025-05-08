import { useState, useEffect } from 'react';
import SearchFilters from "./SearchFilters.jsx";
import OperationItem from './OperationItem.jsx';
import axiosClient from '../../axios-client.js';
import ProjectListItem from './ProjectListItem.jsx';

function Programs(props) {
      const { wallet } = props;
      const [programs, setPrograms] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      
      useEffect(() => {setPrograms(wallet.programs);})
      
      if (loading) {
            return (
                  <div className="project-programs">
                  <h3>Les programmes</h3>
                  <div className="loading">Chargement des programmes...</div>
                  </div>
            );
      }

      if (error) {
            return (
                  <div className="project-programs">
                  <h3>Les programmes</h3>
                  <div className="error">{error.message}</div>
                  </div>
            );
      }

      return (
            <div className="project-programs">
                  {/* <SearchFilters/> */}
                  <h3>Les programmes</h3>
                  {programs && programs.length > 0 ? (
                        programs.map((program) => (
                              <ProjectListItem key={program.code} program={program} />
                        ))
                  ) : (
                  <p>Aucun programme trouvé</p>
                  )}
            </div>
      );
}

export default Programs;