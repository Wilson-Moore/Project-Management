// NoticeModel.jsx
import { useState } from 'react';
import './../../../assets/styles/model.css';
import {useEffect} from 'react';

export default function NoticeModel({ onClose, onSave, initialData, isUpdate = false, disabled = false }) {
      const [notice, setNotice] = useState(initialData);
      const [errors, setErrors] = useState(null);
      const [loading, setLoading] = useState(false);
      const [formattedCode, setFormattedCode] = useState('');
      
      const handleChange = (e) => {
      const { name, value } = e.target;
      
      setNotice(prev => ({ ...prev, [name]: value }));
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
                  formatNumber(initialData.operation_number?.replace(/\./g, ''));
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
      onSave(notice)
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
            setNotice(prev => ({ ...prev, operation_number: value.replace(/\./g, '') }));
            formatNumber(value.replace(/\./g, ''));
      }
      

      return (
      <div className="modal-overlay">
            <div className="modal-container">
            <div className="modal-header">
            <h2>{isUpdate ? `Update Notice: ${initialData.title}` : 'New Notice'}</h2>
            <button onClick={onClose} className="close-button">&times;</button>
            </div>
            
            <div className="modal-body">
            {loading && (
                  <div className="loading-container">
                  <div className="loader"></div>
                  </div>
            )}
            
            {/* {errors && (
                  <div className="error-alert">
                  {Object.keys(errors).map(key => (
                  <p key={key}>{errors[key][0]}</p>
                  ))}
                  </div>
            )} */}
            
            {!loading && (
                  <form onSubmit={handleSubmit}>

                  <div className="form-group">
                  <label htmlFor="french_publication_date">Date de publication (fr)</label>
                  <input
                        id="french_publication_date"
                        name="french_publication_date"
                        type="text"
                        value={notice.french_publication_date}
                        onChange={handleChange}
                        placeholder="yyyy/mm/dd"
                  />
                  {errors?.french_publication_date && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.french_publication_date}
                              </p>
                        )}
                  </div>

                  <div className="form-group">
                  <label htmlFor="arab_publication_date">Date de publication (ar)</label>
                  <input
                        id="arab_publication_date"
                        name="arab_publication_date"
                        type="text"
                        value={notice.arab_publication_date}
                        onChange={handleChange}
                        placeholder="yyyy/mm/dd"
                  />
                  {errors?.arab_publication_date && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.arab_publication_date}
                              </p>
                        )}
                  </div>

                  <div className="form-group">
                  <label htmlFor="BOMOP_date">Date BOMOP </label>
                  <input
                        id="BOMOP_date"
                        name="BOMOP_date"
                        type="text"
                        value={notice.BOMOP_date}
                        onChange={handleChange}
                        placeholder="yyyy/mm/dd"
                  />
                  {errors?.BOMOP_date && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.BOMOP_date}
                              </p>
                        )}
                  </div>

                  <div className="form-group">
                  <label htmlFor="observation">Observation</label>
                  <textarea 
                        id="observation"
                        name="observation"
                        type="textArea"
                        value={notice.observation}
                        onChange={handleChange}
                        placeholder="Enter notice observation"
                  />
                  {errors?.observation && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.observation}
                              </p>
                        )}
                  </div>
                  

                  <div className="form-group">
                  <label htmlFor="operation_number">Numéro d'Opération</label>
                  <input
                        id="operation_number"
                        name="operation_number"
                        type="text"
                        value={formattedCode}
                        onChange={handleNumberChange}
                        placeholder="Enter notice Numéro d'Opération"
                        disabled = {disabled}
                  />
                  {errors?.operation_number && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.operation_number}
                              </p>
                        )}
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