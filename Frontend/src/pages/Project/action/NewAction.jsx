// ActionModel.jsx
import { useState } from 'react';
import './../../../assets/styles/model.css';
import { useEffect } from 'react';

export default function ActionModel({ onClose, onSave, initialData, isUpdate = false }) {
      const [action, setAction] = useState(initialData);
      const [errors, setErrors] = useState(null);
      const [loading, setLoading] = useState(false);
      const [formattedCode, setFormattedCode] = useState('');

      const handleChange = (e) => {
      const { name, value } = e.target;
      setAction(prev => ({ ...prev, [name]: value }));
      };

      const formatCode = (code) => {
            let formatted = '';
            for (let i = 0; i < code.length; i++) {
                  if (i === 3 || i === 6 || i === 8 || i === 12 || i === 15) {
                        formatted += '.';
                  }
                  if (i < code.length) {
                        formatted += code[i];
                  }
            }
            setFormattedCode(formatted);
      };

      useEffect(() => {
            if (initialData) {
                  formatCode(initialData.code.replace(/\./g, ''));
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

      const handleCodeChange = (e) => {
            const { value } = e.target;
            setAction(prev => ({ ...prev, code: value.replace(/\./g, '')}));
            formatCode(value.replace(/\./g, ''));
      }

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
                        value={formattedCode}
                        onChange={handleCodeChange}
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