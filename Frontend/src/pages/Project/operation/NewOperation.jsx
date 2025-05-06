// OperationModel.jsx
import { useState } from 'react';
import './../../../assets/styles/model.css';

export default function OperationModel({ onClose, onSave, initialData, isUpdate = false }) {
      const [operation, setOperation] = useState(initialData);
      const [errors, setErrors] = useState(null);
      const [loading, setLoading] = useState(false);

      const handleChange = (e) => {
      const { name, value } = e.target;
      setOperation(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = (e) => {
      e.preventDefault();
      
      setLoading(true);
      
      // Pass the data to the parent component
      onSave(operation)
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
            <h2>{isUpdate ? `Update Operation: ${initialData.title}` : 'New Operation'}</h2>
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
                  <label htmlFor="number">Operation Number</label>
                  <input
                        id="number"
                        name="number"
                        type="text"
                        value={operation.number}
                        onChange={ev => setOperation({...operation, number: ev.target.value, action_code: ev.target.value.slice(2,-5)})}
                        placeholder="Enter operation number"
                  />
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                        id="title"
                        name="title"
                        type="text"
                        value={operation.title}
                        onChange={handleChange}
                        placeholder="Enter operation title"
                  />
                  </div>

                  <div className="form-group">
                  <label htmlFor="initial_ap">Initial AP</label>
                  <input
                        id="initial_ap"
                        name="initial_ap"
                        type="text"
                        value={operation.initial_ap}
                        onChange={handleChange}
                        placeholder="Enter operation initial ap"
                  />
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="current_ap">Current AP</label>
                  <input
                        id="current_ap"
                        name="current_ap"
                        type="text"
                        value={operation.current_ap}
                        onChange={handleChange}
                        placeholder="Enter operation current ap"
                  />
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="date_of_notification">Date de notification</label>
                  <input
                        id="date_of_notification"
                        name="date_of_notification"
                        type="text"
                        value={operation.date_of_notification}
                        onChange={handleChange}
                        placeholder="Enter operation date de notification"
                        />
                  </div>
                  
                  <div className="form-group hidden">
                  <input
                        id="action_code"
                        name="action_code"
                        type="text"
                        value={operation.action_code}
                        onChange={handleChange}
                        />
                  </div>

                  <div className="form-group ">
                        <label htmlFor="situation">Situation</label>
                        <select 
                              id="situation"
                              name="situation"
                              type="text"
                              value={operation.action_code}
                              onChange={handleChange}
                              placeholder="Enter operation situation"
                        >
                              <option value="1" selected>in the works</option>
                              <option value="2">on halt</option>
                        </select>
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