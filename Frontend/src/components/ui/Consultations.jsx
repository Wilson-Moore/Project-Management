import { useState, useEffect } from 'react';
import SearchFilters from "./SearchFilters.jsx";
import OperationItem from './OperationItem.jsx';
import axiosClient from '../../axios-client.js';
import ProjectListItem from './ProjectListItem.jsx';

function Consultations(props) {
      const { operation } = props;
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [consultations, setConsultations] = useState([]);

      useEffect(() => {setConsultations(operation.consultations);})

      if (loading) {
            return (
                  <div className="project-consultations">
                  <h3>Les projets</h3>
                  <div className="loading">Chargement des projets...</div>
                  </div>
            );
      }

      if (error) {
            return (
                  <div className="project-consultations">
                  <h3>Les projets</h3>
                  <div className="error">{error}</div>
                  </div>
            );
      }

      return (
            <div className="project-consultations">
                  {/* <SearchFilters/> */}
                  <h3>Les consultation</h3>
                  {consultations && consultations.length > 0 ? (
                        consultations.map((consultation) => (
                              <ProjectListItem key={consultation.id} consultation={consultation} />
                        ))
                  ) : (
                  <p>Aucun projet trouvé</p>
                  )}
            </div>
      );
}

export default Consultations;