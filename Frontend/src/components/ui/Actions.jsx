import { useState, useEffect } from 'react';
import SearchFilters from "./SearchFilters.jsx";
import OperationItem from './OperationItem.jsx';
import axiosClient from '../../axios-client.js';
import ProjectListItem from './ProjectListItem.jsx';

function Actions(props) {
      const { subprogram } = props;
      const [actions, setActions] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      
      useEffect(() => {setActions(subprogram.actions);})
      
      if (loading) {
            return (
                  <div className="project-actions">
                  <h3>Les actions</h3>
                  <div className="loading">Chargement des actions...</div>
                  </div>
            );
      }

      if (error) {
            return (
                  <div className="project-actions">
                  <h3>Les actions</h3>
                  <div className="error">{error.message}</div>
                  </div>
            );
      }

      return (
            <div className="project-actions">
                  {/* <SearchFilters/> */}
                  <h3>Les actions</h3>
                  {actions && actions.length > 0 ? (
                        actions.map((action) => (
                              <ProjectListItem key={action.code} action={action} />
                        ))
                  ) : (
                  <p>Aucun action trouvé</p>
                  )}
            </div>
      );
}

export default Actions;