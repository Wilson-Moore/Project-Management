import { useState, useEffect } from 'react';
import SearchFilters from "./SearchFilters.jsx";
import OperationItem from './OperationItem.jsx';
import axiosClient from '../../axios-client.js';
import AddNew from '../ui/AddNew.jsx';

function Avis(props) {

      const [isModalOpen, setIsModalOpen] = useState(false);
      const openModal = () => {
            setIsModalOpen(true);
      };
      
      const closeModal = () => {
            setIsModalOpen(false);
      };

      useEffect(() => {
            // Add event listener for keydown
            window.addEventListener('keydown', handleClose);

            // Cleanup function to remove the event listener
            return () => {
                  window.removeEventListener('keydown', handleClose);
            };
      });

      const handleClose = (event) => {
            if (event.key === 'Escape') {
                  closeModal();
            }
      }

      return(
            <>
            <button className="btn-primary" onClick={openModal}>Ajouter un nouveau Avis</button>

            {isModalOpen &&
            <div className="modal-overlay">
                  <div className="modal-container">
                        <div className="modal-header">
                              <h2>Ajouter un nouveau avis</h2>
                              <button onClick={closeModal} className="close-button">&times;</button>
                        </div>
                        <div className="modal-content">
                              <AddNew operation={props.operation} txt="consultation" disabled/>
                              <AddNew operation={props.operation} txt="avis d'appel d'offres" disabled/>
                        </div>
                  </div>
            </div>
            }
            </>
      );
}

export default Avis;