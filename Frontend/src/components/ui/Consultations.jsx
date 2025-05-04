import { useState, useEffect } from 'react';
import SearchFilters from "./SearchFilters.jsx";
import OperationItem from './OperationItem.jsx';
import axiosClient from '../../axios-client.js'; // Make sure the path is correct

function Consultations(props) {
      const { operation } = props;
      const [consultations, setConsultations] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      useEffect(() => {
            // Only fetch consultaions data when this component mounts
            const fetchConsultations= async () => {
                  if (!operation || !operation.number) return;
                  
                  try {
                  // Fetch consultations data specifically for this operation
                  const response = await axiosClient.get(`/operations/${operation.number}?include=consultations`);
                  const operationData = response.data.data;
                  setConsultations(operationData.consultations || []);
                  setLoading(false);
                  } catch (err) {
                  setError(err.message || "Failed to load consultations");
                  setLoading(false);
                  }
            };

            fetchConsultations();
      }, [operation]);

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
                  {consultations.length > 0 ? (
                  consultations.map((consultation, index) => (
                        <OperationItem 
                              key={index} 
                              entity={consultation} 
                              operationName={consultation.id || "No title"} 
                              year={consultation.signature_date.slice(0,4) || "-"}
                        />
                  ))
                  ) : (
                  <p>Aucun projet trouvé</p>
                  )}
            </div>
      );
}

export default Consultations;