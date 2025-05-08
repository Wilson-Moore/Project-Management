// ProjectModel.jsx
import { useState } from 'react';
import './../../../assets/styles/model.css';
import {useEffect} from 'react';

export default function ProjectModel({ onClose, onSave, initialData, isUpdate = false }) {
      const [project, setProject] = useState(initialData);
      const [errors, setErrors] = useState(null);
      const [loading, setLoading] = useState(false);
      const [formattedCode, setFormattedCode] = useState('');
      const handleChange = (e) => {
      const { name, value } = e.target;
      
      setProject(prev => ({ ...prev, [name]: value }));
      };

      const formatNumber = (number) => {
            let formatted = '';
            for (let i = 0; i < number.length; i++) {
                  if (i === 1 || i === 2 || i === 5 || i === 8 || i === 10 || i === 14 || i === 17 || i === 20 || i === 22) {
                        formatted += '.';
                  }
                  if (i < number.length) {
                        formatted += number[i];
                  }
            }
            setFormattedCode(formatted);
      };
      useEffect(() => {
            if (initialData) {
                  formatNumber(initialData.operation_number.replace(/\./g, ''));
            }
            // Add event listener for keydown
            window.addEventListener('keydown', handleClose);

            // Cleanup function to remove the event listener
            return () => {
                  window.removeEventListener('keydown', handleClose);
            };
      }, [initialData]);

      const handleSubmit = (e) => {
      e.preventDefault();
      
      setLoading(true);
      
      // Pass the data to the parent component
      onSave(project)
            .then(() => {
            setLoading(false);
            onClose();
            })
            .catch(err => {
            setLoading(false);
            if (err.response && err.response.status === 422) {
            setErrors(err.response.data.errors);
            }
            });
      };

      const handleClose = (event) => {
            //if pressed esc key
            if (event.key === 'Escape') {
                  onClose();
            }
      };
      
      const handleNumberChange = (e) => {
            const { value } = e.target;
            setProject(prev => ({ ...prev, operation_number: value.replace(/\./g, '') }));
            formatNumber(value.replace(/\./g, ''));
      }
      
      return (
      <div className="modal-overlay">
            <div className="modal-container">
            <div className="modal-header">
            <h2>{isUpdate ? `Update Project: ${initialData.title}` : 'New Project'}</h2>
            <button onClick={onClose} className="close-button">&times;</button>
            </div>
            
            <div className="modal-body">
            {loading && (
                  <div className="loading-container">
                  <div className="loader"></div>
                  </div>
            )}
            
            {errors && (
                  <div className="error-alert">
                  {Object.keys(errors).map(key => (
                  <p key={key}>{errors[key][0]}</p>
                  ))}
                  </div>
            )}
            
            {!loading && (
                  <form onSubmit={handleSubmit}>
                  
                  <div className="form-group">
                  <label htmlFor="objectif">Objecctif</label>
                  <input
                        id="objectif"
                        name="objectif"
                        type="text"
                        value={project.objectif}
                        onChange={handleChange}
                        placeholder="Enter project objectif"
                  />
                  </div>

                  <div className="form-group">
                  <label htmlFor="start_date">Date de début</label>
                  <input
                        id="start_date"
                        name="start_date"
                        type="text"
                        value={project.start_date}
                        onChange={handleChange}
                        placeholder="yyyy/mm/dd"
                  />
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="assessment_date">date d'évaluation</label>
                  <input
                        id="assessment_date"
                        name="assessment_date"
                        type="text"
                        value={project.assessment_date}
                        onChange={handleChange}
                        placeholder="yyyy/mm/dd"
                  />
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="duration">Duration</label>
                  <input
                        id="duration"
                        name="duration"
                        type="text"
                        value={project.duration}
                        onChange={handleChange}
                        placeholder="Enter project duration"
                  />
                  </div>
                  
                  {/* cost */}
                  <div className="form-group">
                  <label htmlFor="cost">Coût</label>
                  <input
                        id="cost"
                        name="cost"
                        type="text"
                        value={project.cost}
                        onChange={handleChange}
                        placeholder="Enter project coût"
                  />
                  </div>

                  <div className="form-group">
                  <label htmlFor="operation_number">Numéro d'Opération</label>
                  <input
                        id="operation_number"
                        name="operation_number"
                        type="text"
                        value={formattedCode}
                        onChange={handleNumberChange}
                        placeholder="Enter project Numéro d'Opération"
                  />
                  </div>

                  <div className="form-actions">
                  <button
                        type="button"
                        onClick={onClose}
                        className="btn btn-cancel"
                  >
                        Cancel
                  </button>
                  <button
                        type="submit"
                        className="btn btn-primary"
                  >
                        {isUpdate ? 'Update' : 'Create'}
                  </button>
                  </div>
                  </form>
            )}
            </div>
            </div>
      </div>
      );
}