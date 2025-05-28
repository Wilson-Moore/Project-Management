import { useState, useEffect } from 'react';
import SearchFilters from "./SearchFilters.jsx";
import OperationItem from './OperationItem.jsx';
import axiosClient from '../../axios-client.js';
import ProjectListItem from './ProjectListItem.jsx';

function Notices(props) {
      const { operation } = props;
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [notices, setNotices] = useState([]);

      useEffect(() => {setNotices(operation.notices);})

      if (loading) {
            return (
                  <div className="project-notices">
                  <h3>Les Avis d'appel d'offres</h3>
                  <div className="loading">Chargement des Avis d'appel d'offres...</div>
                  </div>
            );
      }

      if (error) {
            return (
                  <div className="project-notices">
                  <h3>Les Avis d'appel d'offres</h3>
                  <div className="error">{error}</div>
                  </div>
            );
      }

      return (
            <div className="project-notices">
                  {/* <SearchFilters/> */}
                  <h3>Les Avis d'appel d'offres</h3>
                  {notices && notices.length > 0 ? (
                        notices.map((notice) => (
                              <ProjectListItem key={notice.id} notice={notice} />
                        ))
                  ) : (
                  <p>Aucun projet trouvé</p>
                  )}
            </div>
      );
}

export default Notices;