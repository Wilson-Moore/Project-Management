import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../axios-client.js';
import { NotificationStateContext } from '../../contexts/NotificationContextProvider.jsx';

// Import all the New components
import WalletModel from './../../pages/Project/wallet/NewWallet.jsx';
import NewProgram from "../../pages/Project/program/NewProgram.jsx";
import NewSubProgram from "../../pages/Project/subprogram/NewSubProgram.jsx";
import NewAction from "../../pages/Project/action/NewAction.jsx";
import NewOperation from "../../pages/Project/operation/NewOperation.jsx";
import NewProject from "../../pages/Project/proj/NewProject.jsx";
import NewPartner from "../../pages/Partner/NewPartner.jsx";

function SearchFilters(props) {
      const navigate = useNavigate();
      const [isModalOpen, setIsModalOpen] = useState(-1);
      const [editingItem, setEditingItem] = useState(null);
      const { setNotification } = NotificationStateContext();
      
      // Map entity types to modal IDs
      const modalTypes = {
      'portefeuille': 1,
      'programme': 2,
      'sousprogramme': 3,
      'action': 4,
      'operation': 5,
      'projet': 6,
      'consultation': 7,
      'partner': 8,
      };
      
      // Map entity types to their default data structure
      const defaultData = {
      'portefeuille': { code: '', title: '' },
      'programme': { code: '', title: '', wallet_code: '' },
      'sousprogramme': { id: '', code: '', title: '', program_code: '' },
      'action': { code: '', title: '' },
      'operation': { number: '', title: '', date_of_notification: '', initial_ap: '', current_ap: '', situation: '1', action_code: '' },
      'projet': { objectif: '', cost: '', duration: '', operation_number: '' },
      'partner': { nif:'', company_name:'', address:'', mobile1:'', mobile2:'', phone:'', email:'', status:'1', city:'', fax:'', domain:'1', trade_register:''}
      };
      
      const openCreateModal = (txt) => {
      setEditingItem(null);
      const modalId = modalTypes[txt.toLowerCase()];
      if (modalId) {
            setIsModalOpen(modalId);
      }
      };
      
      const closeModal = () => {
      setIsModalOpen(-1);
      };
      
      // Generic save handler for all entity types
      const handleSave = (entityData, entityType) => {
      const isUpdate = !!editingItem;
      const endpoint = entityType.toLowerCase() + 's'; // pluralize the endpoint
      
      // Determine the ID field to use in the URL for update requests
      let idField = 'code';
      if (entityType === 'operation') idField = 'number';
      if (entityType === 'projet') idField = 'id';

      const request = isUpdate
            ? axiosClient.patch(`/${endpoint}/${entityData[idField]}`, entityData)
            : axiosClient.post(`/${endpoint}`, entityData);
            
      return request.then(() => {
            setNotification(isUpdate 
            ? `${entityType} was successfully updated` 
            : `${entityType} was successfully created`
            );
            
            // refresh the page after saving
            setTimeout(() => {
                  window.location.reload();
            }, 1000);
      });
      };

      return (
      <>
            {/* Modal for Wallet */}
            {isModalOpen === 1 && (
            <WalletModel
            onClose={closeModal}
            onSave={(data) => handleSave(data, 'wallet')}
            initialData={editingItem || defaultData['portefeuille']}
            isUpdate={!!editingItem}
            />
            )}
            
            {/* Modal for Program */}
            {isModalOpen === 2 && (
            <NewProgram
            onClose={closeModal}
            onSave={(data) => handleSave(data, 'program')}
            initialData={editingItem || defaultData['programme']}
            isUpdate={!!editingItem}
            />
            )}
            
            {/* Modal for SubProgram */}
            {isModalOpen === 3 && (
            <NewSubProgram
            onClose={closeModal}
            onSave={(data) => handleSave(data, 'subprogram')}
            initialData={editingItem || defaultData['sousprogramme']}
            isUpdate={!!editingItem}
            />
            )}
            
            {/* Modal for Action */}
            {isModalOpen === 4 && (
            <NewAction
            onClose={closeModal}
            onSave={(data) => handleSave(data, 'action')}
            initialData={editingItem || defaultData['action']}
            isUpdate={!!editingItem}
            />
            )}
            
            {/* Modal for Operation */}
            {isModalOpen === 5 && (
            <NewOperation
            onClose={closeModal}
            onSave={(data) => handleSave(data, 'operation')}
            initialData={editingItem || defaultData['operation']}
            isUpdate={!!editingItem}
            noOverlay = {props.noOverlay}
            />
            )}
            
            {/* Modal for Project */}
            {isModalOpen === 6 && (
            <NewProject
            onClose={closeModal}
            onSave={(data) => handleSave(data, 'project')}
            initialData={editingItem || defaultData['projet']}
            isUpdate={!!editingItem}
            />
            )}

            {/* Modal for Consultation */}
            {/* {isModalOpen === 7 && (
            <NewProject
            onClose={closeModal}
            onSave={(data) => handleSave(data, 'project')}
            initialData={editingItem || defaultData['projet']}
            isUpdate={!!editingItem}
            />
            )} */}

            {/* Modal for Partner */}

            {isModalOpen === 8 && (
            <NewPartner
            onClose={closeModal}
            onSave={(data) => handleSave(data, 'partner')}
            initialData={editingItem || defaultData['partner']}
            isUpdate={!!editingItem}
            />
            )}
            
            <div className="actions-controls">
            

            <div className="actions-buttons">
            <button className="btn-primary" onClick={() => openCreateModal(props.txt)}>
                  ajouter un nouveau {props.txt}
            </button>
            </div>
            </div>

            {/* <div className="filter-active-container" id="filter-active-container">
            <div id="active-filters">
            {/* {Active filters will be displayed here} 
            </div>
            <button className="filter-reset" id="reset-filters">Reset all filters</button>
            </div>

            <div className="actions-filters">
            <span className="filter-label">Filter by:</span>
            <select className="filter-select" id="program-filter">
            <option value="all">All Programs</option>
            <option value="prog-082">Programme-082</option>
            <option value="prog-083">Programme-083</option>
            <option value="prog-084">Programme-084</option>
            </select>

            <select className="filter-select" id="status-filter">
            <option value="all">All Statuses</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            </select>

            <select className="filter-select" id="year-filter">
            <option value="all">All Years</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            </select>

            <select className="filter-select" id="process-filter">
            <option value="all">All Processes</option>
            <option value="administrative">Administrative Building</option>
            <option value="construction">Construction</option>
            <option value="renovation">Renovation</option>
            <option value="maintenance">Maintenance</option>
            </select>
            </div> */}
      </>
      );
}

export default SearchFilters;