// ProjectModel.jsx
import { useState } from 'react';
import './../../../assets/styles/model.css';
import {useEffect} from 'react';

export default function ProjectModel({ onClose, onSave, initialData, isUpdate = false }) {
      const [project, setProject] = useState(initialData);
      const [errors, setErrors] = useState(null);
      const [loading, setLoading] = useState(false);
      const [formattedCode, setFormattedCode] = useState('');
      const [formattedCost, setFormattedCost] = useState('');
      
      const handleChange = (e) => {
      const { name, value } = e.target;
      
      setProject(prev => ({ ...prev, [name]: value }));
      };

      const formatCost = (ap) => {
            let formatted = '';
            for (let i = 0; i < ap.length; i++) {
                  // Add a space every 3 characters
                  if (i > 0 && i % 3 === 0) {
                        formatted += ' ';
                  }
                  if (i < ap.length) {
                        formatted += ap[i];
                  }
            }
      
            // Dynamically update the corresponding field
            setProject(prev => ({ ...prev, cost: ap.replace(/\ /g, '') }));
            setFormattedCost(formatted);
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
                  
                  if (initialData.cost) {
                        formatAp(initialData.cost.replace(/\ /g, ''));
                  }
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
      
      const handleCostChange = (e) => {
            const { value } = e.target;
            formatCost(value.replace(/\ /g, ''));
      };

      const handleDuration = (e) => {
            const { name, value } = e.target;

            const sanitizedValue = parseInt(value, 10) || 0;
      
            // Update the corresponding duration field
            setProject((prev) => {
                  const currentDuration = prev.duration || 'P0Y0M0D';
                  const durationRegex = /^P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?$/;
                  const match = currentDuration.match(durationRegex);

                  const years = match?.[1] || 0;
                  const months = match?.[2] || 0;
                  const days = match?.[3] || 0;
      
                  // Construct the ISO 8601 duration format
                  const updatedDuration = {
                        years: name === 'years' ? sanitizedValue : years,
                        months: name === 'months' ? sanitizedValue : months,
                        days: name === 'days' ? sanitizedValue : days,
                  };

                   // Construct the ISO 8601 duration format
                  const isoDuration = `P${updatedDuration.years}Y${updatedDuration.months}M${updatedDuration.days}D`;
      
                  return { ...prev, duration: isoDuration };
            });
      };

      const parseDuration = (duration) => {
            const durationRegex = /^P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?$/;
            const match = duration.match(durationRegex);
      
            return {
                  years: match?.[1] || 0,
                  months: match?.[2] || 0,
                  days: match?.[3] || 0,
            };
      };

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
                  <div className="subform-group">

                  <label htmlFor="years">years</label>
                  <input
                        id="years"
                        name="years"
                        type="number"
                        value={parseDuration(project.duration).years}
                        onChange={handleDuration}
                        placeholder="Years"
                        min={0}
                  />
                  <label htmlFor="months">months</label>
                  <input
                        id="months"
                        name="months"
                        type="number"
                        value={parseDuration(project.duration).months}
                        onChange={handleDuration}
                        placeholder="Months"
                        min={0}
                  />
                  <label htmlFor="days">days</label>
                  <input
                        id="days"
                        name="days"
                        type="number"
                        value={parseDuration(project.duration).days}
                        onChange={handleDuration}
                        placeholder="Days"
                        min={0}
                  />
                  <input
                        id="duration"
                        name="duration"
                        type="hidden"
                        value={project.duration || ''}
                  />
                  </div>
                  </div>
                  
                  {/* cost */}
                  <div className="form-group">
                  <label htmlFor="cost">Coût</label>
                  <input
                        id="cost"
                        name="cost"
                        type="text"
                        value={formattedCost}
                        onChange={handleCostChange}
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