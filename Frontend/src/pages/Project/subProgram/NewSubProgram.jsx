// SubProgramModel.jsx
import { useState } from 'react';
import './../../../assets/styles/model.css';
import { useEffect } from 'react';

export default function SubProgramModel({ onClose, onSave, initialData, isUpdate = false }) {
      const [subprogram, setSubProgram] = useState(initialData);
      const [errors, setErrors] = useState(null);
      const [loading, setLoading] = useState(false);

      const handleChange = (e) => {
      const { name, value } = e.target;
      setSubProgram(prev => ({ ...prev, [name]: value }));
      };

      
      useEffect(() => {
           // Add event listener for keydown
            window.addEventListener('keydown', handleClose);

            // Cleanup function to remove the event listener
            return () => {
                  window.removeEventListener('keydown', handleClose);
            };
      }, []);

      const handleSubmit = (e) => {
      e.preventDefault();
      
      setLoading(true);
      
      // Pass the data to the parent component
      onSave(subprogram)
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

      return (
      <div className="modal-overlay">
            <div className="modal-container">
            <div className="modal-header">
            <h2>{isUpdate ? `Update SubProgram: ${initialData.title}` : 'New SubProgram'}</h2>
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
                        value={subprogram.code}
                        onChange={handleChange}
                        placeholder="Enter subprogram code"
                  />
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                        id="title"
                        name="title"
                        type="text"
                        value={subprogram.title}
                        onChange={handleChange}
                        placeholder="Enter subprogram title"
                  />
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="program_code">Program code</label>
                  <input
                        id="program_code"
                        name="program_code"
                        type="text"
                        value={subprogram.program_code}
                        onChange={handleChange}
                        placeholder="Enter program code"
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