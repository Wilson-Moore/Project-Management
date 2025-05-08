import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../axios-client.js';
import { NotificationStateContext } from '../../contexts/NotificationContextProvider.jsx';
import WalletModel from '../../pages/Project/wallet/NewWallet.jsx';
import NewProgram from '../../pages/Project/program/NewProgram.jsx';
import NewSubProgram from '../../pages/Project/subProgram/NewSubProgram.jsx';
import NewAction from '../../pages/Project/action/NewAction.jsx';
import NewOperation from '../../pages/Project/operation/NewOperation.jsx';
import NewProject from '../../pages/Project/proj/NewProject.jsx';

function AddNew (props) {


      const modalTypes = {
            'portefeuille': 1,
            'programme': 2,
            'sousprogramme': 3,
            'action': 4,
            'operation': 5,
            'projet': 6
      };
      
      // Map entity types to their default data structure
      // const defaultData = {
      //       'portefeuille': { code: '', title: '' },
      //       'programme': { code: '', title: '', wallet_code: '' },
      //       'sousprogramme': { id: '', code: '', title: '', program_code: '' },
      //       'action': { code: '', title: '' },
      //       'operation': { number: '', title: '', date_of_notification: '', initial_ap: '', current_ap: '', situation: '1', action_code: '' },
      //       'projet': { objectif: '', start_date: '', assessment_date: '', cost: '', duration: '', operation_number: '' }
      // };
      
      let defaultData = {}
      if(props.wallet) {
            defaultData = {  'programme': { code: '', title: '', wallet_code: props.wallet.code }};
      }else if(props.program) {
            defaultData = { 'sousprogramme': { id: '', code: '', title: '', program_code: props.program.code }};
      }else if(props.subprogram) {
            defaultData = { 'action': { code: '', title: '' }};
      }else if(props.action) {
            defaultData = { 'operation': { number: 'N1' + props.action.code, title: '', date_of_notification: '', initial_ap: '', current_ap: '', situation: '1', action_code: '' }};
      }else if(props.operation) {
            defaultData = { 'projet': { objectif: '', start_date: '', assessment_date: '', cost: '', duration: '', operation_number: props.operation.number }};
      }

      const [isModalOpen, setIsModalOpen] = useState(-1);
      const [editingItem, setEditingItem] = useState(null);
      const { setNotification } = NotificationStateContext();
      
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
      if (entityType === 'projet' || entityType === 'sousprogramme') idField = 'id';
      
      const request = isUpdate
            ? axiosClient.patch(`/${endpoint}/${entityData[idField]}`, entityData)
            : axiosClient.post(`/${endpoint}`, entityData);
            
      return request.then(() => {
            setNotification(isUpdate 
            ? `${entityType} was successfully updated` 
            : `${entityType} was successfully created`
            );
            
            // You might want to add refresh logic here or handle it in the parent component
      });
      };

      return (
            <>
            {isModalOpen === 1 && (
                  <WalletModel
                  onClose={closeModal}
                  onSave={(data) => handleSave(data, 'wallet')}
                  initialData={editingItem || defaultData['portefeuille']}
                  isUpdate={!!editingItem}
                  />
            )}

            {isModalOpen === 2 && (
                  <NewProgram
                  onClose={closeModal}
                  onSave={(data) => handleSave(data, 'program')}
                  initialData={editingItem || defaultData['programme']}
                  isUpdate={!!editingItem}
                  />
            )}

            {isModalOpen === 3 && (
                  <NewSubProgram
                  onClose={closeModal}
                  onSave={(data) => handleSave(data, 'subprogram')}
                  initialData={editingItem || defaultData['sousprogramme']}
                  isUpdate={!!editingItem}
                  />
            )}

            {isModalOpen === 4 && (
                  <NewAction
                  onClose={closeModal}
                  onSave={(data) => handleSave(data, 'action')}
                  initialData={editingItem || defaultData['action']}
                  isUpdate={!!editingItem}
                  />
            )}

            {isModalOpen === 5 && (
                  <NewOperation
                  onClose={closeModal}
                  onSave={(data) => handleSave(data, 'operation')}
                  initialData={editingItem || defaultData['operation']}
                  isUpdate={!!editingItem}
                  />
            )}

            {isModalOpen === 6 && (
                  <NewProject
                  onClose={closeModal}
                  onSave={(data) => handleSave(data, 'projet')}
                  initialData={editingItem || defaultData['projet']}
                  isUpdate={!!editingItem}
                  />
            )}

            {/* Add New Button */}

            <div className="actions-buttons">
                  <button className="btn-primary" onClick={() => openCreateModal(props.txt)}>
                        ajouter un nouveau {props.txt}
                  </button>
            </div>
            </>
      );
}

export default AddNew;