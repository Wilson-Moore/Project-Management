// OperationModel.jsx
import { useState } from 'react';
import './../../../assets/styles/model.css';
import {useEffect} from 'react';

export default function OperationModel({ onClose, onSave, initialData, isUpdate = false, disabled = false, noOverlay = false }) {
      const [operation, setOperation] = useState(initialData);
      const [errors, setErrors] = useState(null);
      const [loading, setLoading] = useState(false);
      const [formattedCode, setFormattedCode] = useState('');
      const [formattedIAp, setFormattedIAp] = useState('');
      const [formattedCAp, setFormattedCAp] = useState('');

      const handleChange = (e) => {
      const { name, value } = e.target;
      // if(name = 'date_of_notification') {
      //       setOperation(prev => ({ ...prev, [name]: value?.replace(/\-/g, '/') }));

      // }else{
            setOperation(prev => ({ ...prev, [name]: value }));
            
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

      const formatAp = (ap, fieldName) => {
            ap = ap.toString().replace(/\ /g, '');
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
            setOperation(prev => ({ ...prev, [fieldName]: parseFloat(ap) }));
            if (fieldName === 'initial_ap') {
                  setFormattedIAp(formatted);
            } else if (fieldName === 'current_ap') {
                  setFormattedCAp(formatted); // Optional: Add another state if needed
            }
      };
      
      useEffect(() => {
            if (initialData) {
                  const situation = operation.situation === "in the works" ? "1" : operation.situation === "on halt" ? "2" : operation.situation === "completed" ? "3" : "1";
                  setOperation(prev => ({ ...prev, situation : situation, date_of_notification : operation.date_of_notification?.replace(/\-/g, '/') }));
                  formatNumber(initialData.number.replace(/\./g, ''));
                  if (initialData.initial_ap) {
                        formatAp(initialData.initial_ap, 'initial_ap');
                  }
                  if (initialData.current_ap) {
                        formatAp(initialData.current_ap, 'current_ap');
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

      const handleClose = (event) => {
            //if pressed esc key
            if (event.key === 'Escape') {
                  onClose();
            }
      };
      
      const handleNumberChange = (e) => {
            const { value } = e.target;
            setOperation(prev => ({ ...prev, number: value.replace(/\./g, ''), action_code: value.replace(/\./g, '').slice(2, -5) }));
            formatNumber(value.replace(/\./g, ''));
      }

      const handleApChange = (e) => {
            const { name, value } = e.target;
            formatAp(value.replace(/\ /g, ''), name);
      };
      
      return (
      <div className="modal-overlay" style={noOverlay? {backgroundColor: 'transparent'}: {top: 0}}>
            <div className="modal-container" style={{width: 1000 + 'px'}}>
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
            
            {/* {errors && (
                  <div className="error-alert">
                  {Object.keys(errors).map(key => (
                  <p key={key}>{errors[key][0]}</p>
                  ))}
                  </div>
            )} */}
            
            {!loading && (
                  <form onSubmit={handleSubmit} className="halfed">
                  <div className="half">

                  <div className="form-group">
                  <label htmlFor="number">Operation Number</label>
                  <input
                        id="number"
                        name="number"
                        type="text"
                        value={formattedCode}
                        onChange={handleNumberChange}
                        placeholder="Enter operation number"
                  />
                  {errors?.number && (
                        <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                              {errors.number}
                        </p>
                  )}
                  
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
                  {errors?.title && (
                        <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                              {errors.title}
                        </p>
                  )}
                  </div>

                  <div className="form-group">
                        <label htmlFor="initial_ap">Initial AP</label>
                        <input
                              id="initial_ap"
                              name="initial_ap"
                              type="text"
                              value={formattedIAp}
                              onChange={handleApChange}
                              placeholder="Enter operation initial ap"
                        />
                        {errors?.initial_ap && (
                        <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                              {errors.initial_ap}
                        </p>
                  )}
                  </div>

                  <div className="form-group">
                        <label htmlFor="current_ap">Current AP</label>
                        <input
                              id="current_ap"
                              name="current_ap"
                              type="text"
                              value={formattedCAp}
                              onChange={handleApChange}
                              placeholder="Enter operation current ap"
                        />
                        {errors?.current_ap && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.current_ap}
                              </p>
                        )}
                  </div>
                  </div>
                  
                  <div className="half">

                  <div className="form-group">
                  <label htmlFor="date_of_notification">Date de notification</label>
                  <input
                        id="date_of_notification"
                        name="date_of_notification"
                        type="text"
                        value={operation.date_of_notification?.replace(/\-/g, '/')}
                        onChange={handleChange}
                        placeholder="yyyy/mm/dd"
                        />
                        {errors?.date_of_notification && (
                        <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                              {errors.date_of_notification}
                        </p>
                  )}
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
                              value={operation.situation}
                              onChange={handleChange}
                              placeholder="Enter operation situation"
                        >
                              <option value="1" selected>in the works</option>
                              <option value="2">on halt</option>
                              <option value="3">completed</option>
                        </select>
                        {errors?.situation && (
                        <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                              {errors.situation}
                        </p>
                        )}
                  </div>

                  <div className="form-group">
                        <label htmlFor="observation">Observation</label>
                        <textarea 
                              id="observation"
                              name="observation"
                              type="textArea"
                              value={operation.observation}
                              onChange={handleChange}
                              placeholder="Enter operation observation"
                        />
                        {errors?.observation && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.observation}
                              </p>
                        )}
                  </div>

                  <div className="form-group">
                  <label htmlFor="individualized">Individualized</label>
                  <div className="radio-group">
                        <input 
                        type="radio" 
                        name="individualized" 
                        id="individualized0" 
                        value={0}
                        onChange={handleChange}
                        // checked = {!operation.individualized}
                        />

                        <label htmlFor="individualized0">No</label>

                        <input 
                        type="radio" 
                        name="individualized" 
                        id="individualized1" 
                        value={1}
                        onChange={handleChange}
                        // checked = {operation.individualized}
                        /> 
                        <label htmlFor="individualized1">Yes</label>
                  </div>
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
                  </div>
                  </form>
            )}
            </div>
            </div>
      </div>
      );
}