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
import NewConsultation from '../../pages/Project/consultation/NewConsultation.jsx';

function AddNew (props) {


      const modalTypes = {
            'portefeuille': 1,
            'programme': 2,
            'sousprogramme': 3,
            'action': 4,
            'operation': 5,
            'projet': 6,
            'consultation': 7
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
            defaultData = { 'projet': { objectif: '', start_date: '', assessment_date: '', cost: '', duration: '', operation_number: props.operation.number },
                              'consultation': { id: '', signature_date: '', duration: '', observation: '', operation_number: props.operation.number }};
      }else if(props.project) {
            const { project } = props;
            defaultData = { 'projet': { objectif: project.objectif, start_date: project.start_date, assessment_date: project.assessment_date, cost: project.cost, duration: project.duration, operation_number: project.operation_number }};
      }
      

      const [isModalOpen, setIsModalOpen] = useState(-1);
      const [editingItem, setEditingItem] = useState();
      const { setNotification } = NotificationStateContext();
      
      const openEditModal = (item, txt) => {
            setEditingItem(item); // Set the item to be edited
            const modalId = modalTypes[txt.toLowerCase()];
            if (modalId) {
                  setIsModalOpen(modalId); // Open the corresponding modal
            }
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
            setEditingItem(null);
      };
      
      // Generic save handler for all entity types
      const handleSave = (entityData, entityType) => {
      const isUpdate = !!editingItem;
      const endpoint = entityType.toLowerCase() + 's'; // pluralize the endpoint
      
      // Determine the ID field to use in the URL for update requests
      let idField = 'code';
      if (entityType === 'operation') idField = 'number';
      if (entityType === 'projet' || entityType === 'sousprogramme' || entityType === 'consultation') idField = 'id';
      
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
                  onSave={(data) => handleSave(data, 'project')}
                  initialData={editingItem || defaultData['projet']}
                  isUpdate={!!editingItem}
                  />
            )}

            {
                  isModalOpen === 7 && (
                  <NewConsultation
                  onClose={closeModal}
                  onSave={(data) => handleSave(data, 'consultation')}
                  initialData={editingItem || defaultData['consultation']}
                  isUpdate={!!editingItem}
                  />
                  )
            }
            {/* {props.project && (
            <div className="actions-buttons">
                  <button
                        className="btn-primary"
                        onClick={() => openEditModal(props.project, props.txt)}
                  >
                        Edit {props.txt}
                  </button>
            </div>
                  )} */}

            <div className="actions-buttons">
                  <button className="btn-primary" onClick={() => openCreateModal(props.txt)}>
                        ajouter un nouveau {props.txt}
                  </button>
            </div>
            </>
      );
}

export default AddNew;