// NewProject.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../axios-client.js";
import { NotificationStateContext } from "../../../contexts/NotificationContextProvider.jsx";
import './../../../assets/styles/model.css';

export default function NewProject() {
      const navigate = useNavigate();
      let { projectId } = useParams();
      const [project, setProject] = useState({
      objectif: '',
      start_date: '', 
      assessment_date: '', 
      cost: '', 
      duration: '', 
      operation_number: ''
      });
      const [errors, setErrors] = useState(null);
      const [loading, setLoading] = useState(false);
      const { setNotification } = NotificationStateContext();
      
      useEffect(() => {
      if (projectId) {
            setLoading(true);
            axiosClient.get(`/projects/${projectId}`)
            .then(({ data }) => {
            setLoading(false);
            setProject(data.data);
            })
            .catch(() => {
            setLoading(false);
            });
      }
      }, [projectId]);

      const handleChange = (e) => {
      const { name, value } = e.target;
      setProject(prev => ({ ...prev, [name]: value }));
      };

      const onSubmit = (e) => {
      e.preventDefault();
      
      // Validate form
      const validationErrors = {};
      if (!project.objectif.trim()) validationErrors.objectif = ['Objectif is required'];
      if (!project.start_date.trim()) validationErrors.start_date = ['Start date is required'];
      if (!project.operation_number.trim()) validationErrors.operation_number = ['Operation number is required'];
      
      if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
      }
      
      setLoading(true);
      
      const request = projectId
            ? axiosClient.put(`/projects/${project.id}`, project)
            : axiosClient.post('/projects', project);

      request
            .then(() => {
            setLoading(false);
            setNotification(projectId ? 'Project was successfully updated' : 'Project was successfully created');
            navigate('/projects');
            })
            .catch(err => {
            setLoading(false);
            const response = err.response;
            if (response && response.status === 422) {
            setErrors(response.data.errors);
            }
            });
      };

      return (
      <div className="container">
            <div className="header">
            <h1>{projectId ? `Update Project: ${project.id}` : 'New Project'}</h1>
            </div>
            
            <div className="card animated fadeInDown">
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
            <form onSubmit={onSubmit}>
                  <div className="form-group">
                  <label htmlFor="objectif">Objectif</label>
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
                  type="date"
                  value={project.start_date}
                  onChange={handleChange}
                  />
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="assessment_date">Date d'évaluation</label>
                  <input
                  id="assessment_date"
                  name="assessment_date"
                  type="date"
                  value={project.assessment_date}
                  onChange={handleChange}
                  />
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="cost">Cost</label>
                  <input
                  id="cost"
                  name="cost"
                  type="text"
                  value={project.cost}
                  onChange={handleChange}
                  placeholder="Enter project cost"
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
                  
                  <div className="form-group">
                  <label htmlFor="operation_number">Operation Number</label>
                  <input
                  id="operation_number"
                  name="operation_number"
                  type="text"
                  value={project.operation_number}
                  onChange={handleChange}
                  placeholder="Enter operation number"
                  />
                  </div>
                  
                  <div className="form-actions">
                  <button
                  type="button"
                  onClick={() => navigate('/projects')}
                  className="btn btn-cancel"
                  >
                  Cancel
                  </button>
                  <button
                  type="submit"
                  className="btn btn-primary"
                  >
                  {projectId ? 'Update' : 'Create'}
                  </button>
                  </div>
            </form>
            )}
            </div>
      </div>
      );
}