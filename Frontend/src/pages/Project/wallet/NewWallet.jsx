// WalletModel.jsx
import { useState } from 'react';
import './../../../assets/styles/model.css';
import { useEffect } from 'react';

export default function WalletModel({ onClose, onSave, initialData = { code: '', title: '' }, isUpdate = false }) {
  const [wallet, setWallet] = useState(initialData);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWallet(prev => ({ ...prev, [name]: value }));
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
    onSave(wallet)
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
          <h2>{isUpdate ? `Update Wallet: ${initialData.title}` : 'New Wallet'}</h2>
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
                <label htmlFor="code">Code</label>
                <input
                  id="code"
                  name="code"
                  type="text"
                  value={wallet.code}
                  onChange={handleChange}
                  placeholder="Enter wallet code"
                />
                {errors?.code && (
                  <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                        {errors.code}
                  </p>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={wallet.title}
                  onChange={handleChange}
                  placeholder="Enter wallet title"
                />
                {errors?.title && (
                  <p className="error" style={{color: 'red', marginTop: -12 + "px"}}>
                        {errors.title}
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