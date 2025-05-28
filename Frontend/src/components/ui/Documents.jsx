import { useState, useEffect } from 'react';
import axiosClient from '../../axios-client.js';
import ProjectListItem from './ProjectListItem.jsx';

function Documents(props) {
      const { operation } = props;
      const [documents, setDocuments] = useState([]);
      const [document, setDocument] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      useEffect(() => {
            if (operation && operation.documents) {
                  setDocuments(operation.documents);
            }

            // Add event listener for keydown
            window.addEventListener('keydown', onClose);

            // Cleanup function to remove the event listener
            return () => {
                  window.removeEventListener('keydown', onClose);
            };
      }, [operation.documents]);

      const openUploadModal = () => {
            setIsModalOpen(true);
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);

            try {
                  const formData = new FormData();
                  formData.append('document', document);

                  const response = await axiosClient.post(`/documents/operations/${operation.number}`, formData, {
                  headers: {
                        'Content-Type': 'multipart/form-data',
                  },
                  });

                  setDocuments((prev) => [...prev, response.data]);
                  setIsModalOpen(false);
                  setLoading(false);
            } catch (err) {
                  setError(err.response?.data?.message || 'An error occurred while uploading the document.');
                  setLoading(false);
            }
      };

      const handleChange = (e) => {
            const file = e.target.files[0];
            setDocument(file);
      };

      const onClose = () => {
            setIsModalOpen(false);
            setError(null);
      };

      if (loading) {
            return (
                  <div className="project-documents">
                  <h3>Les documents</h3>
                  <div className="loading">Chargement des documents...</div>
                  </div>
            );
      }

      if (error) {
            return (
                  <div className="project-documents">
                  <h3>Les documents</h3>
                  <div className="error">{error}</div>
                  </div>
            );
      }

      return (
            <>
                  <div className="actions-buttons" style={{ justifySelf: 'end' }}>
                  <button className="btn-primary" onClick={openUploadModal}>
                        Ajouter un nouveau document
                  </button>
                  </div>

                  <div className="project-documents">
                  <h3>Les documents</h3>
                  {documents && documents.length > 0 ? (
                        documents.map((document) => (
                              <ProjectListItem key={document.id} document={document} />
                        ))
                  ) : (
                        <p>Aucun document trouvé</p>
                  )}
                  </div>

                  {isModalOpen && (
                  <div className="modal-overlay">
                        <div className="modal-container" style={{ width: '1000px' }}>
                              <div className="modal-header">
                              <h2>New Document</h2>
                              <button onClick={onClose} className="close-button">
                                    &times;
                              </button>
                              </div>

                              <div className="modal-body">
                              <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                          <label htmlFor="document">Document</label>
                                          <input
                                          type="file"
                                          name="document"
                                          id="document"
                                          onChange={handleChange}
                                          />
                                    </div>

                                    <div className="form-actions">
                                          <button type="button" onClick={onClose} className="btn btn-cancel">
                                          Cancel
                                          </button>
                                          <button type="submit" className="btn btn-primary">
                                          Create
                                          </button>
                                    </div>
                              </form>
                              </div>
                        </div>
                  </div>
                  )}
            </>
      );
}

export default Documents;