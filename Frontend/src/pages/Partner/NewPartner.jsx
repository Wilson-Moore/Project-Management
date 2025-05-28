// PartnerModel.jsx
import { useState } from 'react';
import './../../assets/styles/model.css';
import { useEffect } from 'react';

export default function PartnerModel({ onClose, onSave, initialData = { nif:'', company_name:'', address:'', mobile1:'', mobile2:'', phone:'', email:'', status:'1', city:'', fax:'', domain:'1', trade_register:'' }, isUpdate = false }) {
      const [partner, setPartner] = useState(initialData);
      const [errors, setErrors] = useState(null);
      const [loading, setLoading] = useState(false);

      const handleChange = (e) => {
      const { name, value } = e.target;
      setPartner(prev => ({ ...prev, [name]: value }));
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
      onSave(partner)
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
            <div className="modal-container" style={{width: 1000 + 'px'}}>
            <div className="modal-header">
            <h2>{isUpdate ? `Update Partner: ${initialData.company_name}` : 'New Partner'}</h2>
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
                  <label htmlFor="nif">NIF</label>
                  <input
                        id="nif"
                        name="nif"
                        type="text"
                        value={partner.nif}
                        onChange={handleChange}
                        placeholder="Enter partner nif"
                  />
                  {errors?.nif && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.nif}
                              </p>
                        )}
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="company_name">Nom de l'entreprise</label>
                  <input
                        id="company_name"
                        name="company_name"
                        type="text"
                        value={partner.company_name}
                        onChange={handleChange}
                        placeholder="Enter partner company name"
                  />
                  {errors?.company_name && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.company_name}
                              </p>
                        )}
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                        id="address"
                        name="address"
                        type="text"
                        value={partner.address}
                        onChange={handleChange}
                        placeholder="Enter partner address"
                  />
                  {errors?.address && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.address}
                              </p>
                        )}
                  </div>

                  <div className="form-group">
                  <label htmlFor="mobile1">Mobile 1</label>
                  <input
                        id="mobile1"
                        name="mobile1"
                        type="text"
                        value={partner.mobile1}
                        onChange={handleChange}
                        placeholder="Enter partner mobile 1"
                  />
                  {errors?.mobile1 && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.mobile1}
                              </p>
                        )}
                  </div>

                  <div className="form-group">
                  <label htmlFor="mobile2">Mobile 2</label>
                  <input
                        id="mobile2"
                        name="mobile2"
                        type="text"
                        value={partner.mobile2}
                        onChange={handleChange}
                        placeholder="Enter partner mobile 2"
                  />
                  {errors?.mobile2 && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.mobile2}
                              </p>
                        )}
                  </div>

                  <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                        id="phone"
                        name="phone"
                        type="text"
                        value={partner.phone}
                        onChange={handleChange}
                        placeholder="Enter partner phone"
                  />
                  {errors?.phone && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.phone}
                              </p>
                        )}
                  </div>
                  </div>

                  <div className="half">

                  <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                        id="email"
                        name="email"
                        type="text"
                        value={partner.email}
                        onChange={handleChange}
                        placeholder="Enter partner email"
                  />
                  {errors?.email && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.email}
                              </p>
                        )}
                  </div>

                  <div className="form-group ">
                        <label htmlFor="status">Statut</label>
                        <select 
                              id="status"
                              name="status"
                              type="text"
                              value={partner.status}
                              onChange={handleChange}
                              placeholder="Enter partner status"
                        >
                              <option value="1" selected>physical</option>
                              <option value="2">morale</option>
                              <option value="3">mixed</option>
                        </select>
                        {errors?.status && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.status}
                              </p>
                        )}
                  </div>

                  <div className="form-group">
                  <label htmlFor="city">Ville</label>
                  <input
                        id="city"
                        name="city"
                        type="text"
                        value={partner.city}
                        onChange={handleChange}
                        placeholder="Enter partner city"
                  />
                  {errors?.city && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.city}
                              </p>
                        )}
                  </div>

                  <div className="form-group">
                  <label htmlFor="fax">Fax</label>
                  <input
                        id="fax"
                        name="fax"
                        type="text"
                        value={partner.fax}
                        onChange={handleChange}
                        placeholder="Enter partner fax"
                  />
                  {errors?.fax && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.fax}
                              </p>
                        )}
                  </div>

                  <div className="form-group ">
                        <label htmlFor="domain">Domaine</label>
                        <select 
                              id="domain"
                              name="domain"
                              type="text"
                              value={partner.domain}
                              onChange={handleChange}
                              placeholder="Enter partner domain"
                        >
                              <option value="1" selected>building</option>
                              <option value="2">hydraulic</option>
                              <option value="3">public work</option>
                              <option value="4">architect</option>
                              <option value="5">engineer</option>
                              <option value="6">other</option>
                        </select>
                        {errors?.domain && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.domain}
                              </p>
                        )}
                  </div>

                  {/* category */}
                  {/* micro */}

                  <div className="form-group">
                  <label htmlFor="trade_register">Registre du commerce</label>
                  <input
                        id="trade_register"
                        name="trade_register"
                        type="text"
                        value={partner.trade_register}
                        onChange={handleChange}
                        placeholder="Enter partner trade register"
                  />
                  {errors?.trade_register && (
                              <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                                    {errors.trade_register}
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
                        </div>
                  </form>
            )}
            </div>
            </div>
      </div>
      );
}