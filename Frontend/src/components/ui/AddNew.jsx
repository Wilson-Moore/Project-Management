import { useState } from "react";
import { useEffect } from "react";
import { useFetcher, useNavigate } from 'react-router-dom';
import axiosClient from '../../axios-client.js';
import { NotificationStateContext } from '../../contexts/NotificationContextProvider.jsx';
import WalletModel from '../../pages/Project/wallet/NewWallet.jsx';
import NewProgram from '../../pages/Project/program/NewProgram.jsx';
import NewSubProgram from '../../pages/Project/subProgram/NewSubProgram.jsx';
import NewAction from '../../pages/Project/action/NewAction.jsx';
import NewOperation from '../../pages/Project/operation/NewOperation.jsx';
import NewProject from '../../pages/Project/proj/NewProject.jsx';
import NewConsultation from '../../pages/Project/consultation/NewConsultation.jsx';
import NewPartner from '../../pages/Partner/NewPartner.jsx';
import NewNotice from '../../pages/Project/notice/NewNotice.jsx';

function AddNew (props) {


      const modalTypes = {
            'portefeuille': 1,
            'programme': 2,
            'sousprogramme': 3,
            'action': 4,
            'operation': 5,
            'projet': 6,
            'consultation': 7,
            'partner': 8,
            "avis d'appel d'offres": 9,
      };
      
      const [entity, setEntity] = useState();

      useEffect(() => {
            props.wallet ? setEntity(props.wallet):
            props.program ? setEntity(props.program):
            props.subprogram ? setEntity(props.subprogram):
            props.action ? setEntity(props.action):
            props.operation ? setEntity(props.operation):
            props.project ? setEntity(props.project):
            props.consultation ? setEntity(props.project) : 
            props.notice ? setEntity(props.notice) : '';
      }, [])
      let defaultData = {}
      if(props.wallet) {
            defaultData = {  'programme': { code: '', title: '', wallet_code: props.wallet.code }};
      }else if(props.program) {
            defaultData = { 'sousprogramme': { id: '', code: '', title: '', program_code: props.program.code }};
      }else if(props.subprogram) {
            defaultData = { 'action': { code: props._wallet.code + props._program.code + props.subprogram.code, title: '' }};
      }else if(props.action) {
            defaultData = { 'operation': { number: 'N1' + props.action.code, title: '', date_of_notification: '', initial_ap: '', current_ap: '', situation: '1', individualized: '0', observation: '', action_code: '' }};
      }else if(props.operation) {
            defaultData = { 'projet': { objectif: '', start_date: '', assessment_date: '', cost: '', duration: '', operation_number: props.operation.number },
            'consultation': { id: '', signature_date: '', duration: '', observation: '', operation_number: props.operation.number },
            "avis d'appel d'offres" : { id: '', french_publication_date: '', arab_publication_date:'', BOMOP_date:'', operation_number: props.operation.number}
      };
      }else if(props.project) {
            const { project } = props;
            defaultData = { 'projet': { objectif: project.objectif, cost: project.cost, duration: project.duration, co_contractor: project.co_contractor, operation_number: project.operation_number }};
      }
      

      const [isModalOpen, setIsModalOpen] = useState(-1);
      const [editingItem, setEditingItem] = useState();
      const { setNotification } = NotificationStateContext();
      // const [modalId, setModalId] = useState(0);
      
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
            if (entityType === 'project' || entityType === 'subprogram' || entityType === 'consultation' || entityType === "notice") idField = 'id';
      
            let id = '';
            // Exclude unchanged fields (id, number, code) from the PATCH request
            const payload = { ...entityData };
            if (isUpdate) {
                  if (editingItem?.id === entityData.id) {
                        id = editingItem.id;
                        delete payload.id; // Remove 'id' if unchanged
                  }
                  if (editingItem?.number === entityData.number) {
                        id = editingItem.number;
                        delete payload.number; // Remove 'number' if unchanged
                  }
                  if (editingItem?.code === entityData.code) {
                        delete payload.code; // Remove 'code' if unchanged
                  }
                  
                  if(editingItem.code) {
                        id = editingItem.code;
                  }
                  if(editingItem.id) {
                        id = editingItem.id;
                  }
                  if(editingItem.number) {
                        id = editingItem.number;
                  }
            }
      
            const request = isUpdate
                  ? axiosClient.patch(`/${endpoint}/${id}`, payload) // Use modified payload
                  : axiosClient.post(`/${endpoint}`, entityData);
      
            return request.then(() => {
                  setNotification(
                        isUpdate
                              ? `${entityType} was successfully updated`
                              : `${entityType} was successfully created`
                  );
      
                  // Refresh the page after saving
                  setTimeout(() => {
                        window.location.reload();
                  }, 10);

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
                  disabled = {props.disabled}
                  />
            )}

            {isModalOpen === 2 && (
                  <NewProgram
                  onClose={closeModal}
                  onSave={(data) => handleSave(data, 'program')}
                  initialData={editingItem || defaultData['programme']}
                  isUpdate={!!editingItem}
                  disabled = {props.disabled}
                  />
            )}

            {isModalOpen === 3 && (
                  <NewSubProgram
                  onClose={closeModal}
                  onSave={(data) => handleSave(data, 'subprogram')}
                  initialData={editingItem || defaultData['sousprogramme']}
                  isUpdate={!!editingItem}
                  disabled = {props.disabled}
                  />
            )}

            {isModalOpen === 4 && (
                  <NewAction
                  onClose={closeModal}
                  onSave={(data) => handleSave(data, 'action')}
                  initialData={editingItem || defaultData['action']}
                  isUpdate={!!editingItem}
                  disabled = {props.disabled}
                  />
            )}

            {isModalOpen === 5 && (
                  <NewOperation
                  onClose={closeModal}
                  onSave={(data) => handleSave(data, 'operation')}
                  initialData={editingItem || defaultData['operation']}
                  isUpdate={!!editingItem}
                  disabled = {props.disabled}
                  />
            )}

            {isModalOpen === 6 && (
                  <NewProject
                  onClose={closeModal}
                  onSave={(data) => handleSave(data, 'project')}
                  initialData={editingItem || defaultData['projet']}
                  isUpdate={!!editingItem}
                  disabled = {props.disabled}
                  />
            )}

            {
                  isModalOpen === 7 && (
                  <NewConsultation
                  onClose={closeModal}
                  onSave={(data) => handleSave(data, 'consultation')}
                  initialData={editingItem || defaultData['consultation']}
                  isUpdate={!!editingItem}
                  disabled = {props.disabled}
                  />
            )
            }

            {
                  isModalOpen === 8 && (
                        <NewPartner
                  onClose={closeModal}
                  onSave={(data) => handleSave(data, 'partner')}
                  initialData={editingItem || defaultData['partner']}
                  isUpdate={!!editingItem}
                  disabled = {props.disabled}
                  />
            )
            }
            {isModalOpen === 9 && (
                  <NewNotice
                  onClose={closeModal}
                  onSave={(data) => handleSave(data, 'notice')}
                  initialData={editingItem || defaultData["avis d'appel d'offres"]}
                  isUpdate={!!editingItem}
                  disabled = {props.disabled}
                  />
            )}

            {props.edit && (
            <div className="actions-buttons" style={{justifySelf: "end"}} >
                  <button className="btn-edit" onClick={() => openEditModal(entity, props.txt)}>
                        <img src="/src/assets/images/edit.png" alt="edit" />
                  </button>
            </div>
                  )}

            {props.edit ? '' : <div className="actions-buttons">
                  <button className="btn-primary" onClick={() => openCreateModal(props.txt)}>
                        ajouter un nouveau {props.txt}
                  </button>
            </div>}
            </>
      );
}

export default AddNew;