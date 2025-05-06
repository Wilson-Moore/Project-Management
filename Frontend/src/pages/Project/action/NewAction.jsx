// ActionModel.jsx
import { useState } from 'react';
import './../../../assets/styles/model.css';

export default function ActionModel({ onClose, onSave, initialData, isUpdate = false }) {
      const [action, setAction] = useState(initialData);
      const [errors, setErrors] = useState(null);
      const [loading, setLoading] = useState(false);

      const handleChange = (e) => {
      const { name, value } = e.target;
      setAction(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = (e) => {
      e.preventDefault();
      
      setLoading(true);
      
      // Pass the data to the parent component
      onSave(action)
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

      return (
      <div className="modal-overlay">
            <div className="modal-container">
            <div className="modal-header">
            <h2>{isUpdate ? `Update Action: ${initialData.title}` : 'New Action'}</h2>
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
                  <label htmlFor="code">Code</label>
                  <input
                        id="code"
                        name="code"
                        type="text"
                        value={action.code}
                        onChange={handleChange}
                        placeholder="Enter action code"
                  />
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                        id="title"
                        name="title"
                        type="text"
                        value={action.title}
                        onChange={handleChange}
                        placeholder="Enter action title"
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