import { useState, useEffect } from 'react';
import SearchFilters from "./SearchFilters.jsx";
import OperationItem from './OperationItem.jsx';
import axiosClient from '../../axios-client.js';
import ProjectListItem from './ProjectListItem.jsx';

function Operations(props) {
      const { action } = props;
      const [operations, setOperations] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      
      useEffect(() => {setOperations(action.operations);})
      
      if (loading) {
            return (
                  <div className="project-operations">
                  <h3>Les opérations</h3>
                  <div className="loading">Chargement des opérations...</div>
                  </div>
            );
      }

      if (error) {
            return (
                  <div className="project-operations">
                  <h3>Les opérations</h3>
                  <div className="error">{error.message}</div>
                  </div>
            );
      }

      return (
            <div className="project-operations">
                  {/* <SearchFilters/> */}
                  <h3>Les opérations</h3>
                  {operations && operations.length > 0 ? (
                        operations.map((operation) => (
                              <ProjectListItem key={operation.number} operation={operation} />
                        ))
                  ) : (
                  <p>Aucun opération trouvé</p>
                  )}
            </div>
      );
}

export default Operations;