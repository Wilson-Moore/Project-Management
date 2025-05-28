import React from 'react';
import axiosClient from '../../axios-client.js';

function ProjectListItem(props) {
    // Check if props.wallets is defined and has elements
    if (props.wallet) {
        return (
            <div className="action-item" data-id={props.wallet.code} data-status="in-progress" data-year="2024" data-process="administrative">
                <div className="action-info">
                    <div className="action-icon">
                        <i className="icon-action"></i>
                    </div>
                    <div className="action-details">
                        <span className="action-name">{props.wallet.title}</span>
                        <div className="action-meta">
                            <span>Code-{props.wallet.code}</span>
                        </div>
                    </div>
                </div>
                <div className="action-actions">
                    <a href={`/wallet/${props.wallet.code}`} className="btn-secondary">View Details</a>
                    
                </div>
            </div>
        );
    }else if (props.program) {
        return (
            <div className="action-item" data-id={props.program.code} data-status="in-progress" data-year="2024" data-process="administrative">
                <div className="action-info">
                    <div className="action-icon">
                        <i className="icon-action"></i>
                    </div>
                    <div className="action-details">
                        <span className="action-name">{props.program.title}</span>
                        <div className="action-meta">
                            <span>Code-{props.program.code}</span>
                        </div>
                    </div>
                </div>
                <div className="action-actions">
                    <a href={`/program/${props.program.code}`} className="btn-secondary">View Details</a>
                    
                </div>
            </div>
        );
    }else if (props.subprogram) {
        return (
            <div className="action-item" data-id={props.subprogram.id} data-status="in-progress" data-year="2024" data-process="administrative">
                <div className="action-info">
                    <div className="action-icon">
                        <i className="icon-action"></i>
                    </div>
                    <div className="action-details">
                        <span className="action-name">{props.subprogram.title}</span>
                        <div className="action-meta">
                            <span>Code-{props.subprogram.code}</span>
                            <span>Program-Code-{props.subprogram.program.code}</span>
                        </div>
                    </div>
                </div>
                <div className="action-actions">
                    <a href={`/subprogram/${props.subprogram.id}`} className="btn-secondary">View Details</a>
                    
                </div>
            </div>
        );
    }else if (props.action) {
        let formattedCode = '';
        for (let i = 0; i < props.action.code.length; i++) {
            if (i === 3 || i === 6 || i === 8 || i === 12 || i === 15) {
                formattedCode += '.';
            }
            if (i < props.action.code.length) {
                formattedCode += props.action.code[i];
            }
        }
        
        return (
            <div className="action-item" data-id={props.action.code} data-status="in-progress" data-year="2024" data-process="administrative">
                <div className="action-info">
                    <div className="action-icon">
                        <i className="icon-action"></i>
                    </div>
                    <div className="action-details">
                        <span className="action-name">{props.action.title}</span>
                        <div className="action-meta">
                            <span>Code-{formattedCode}</span>
                            <span>{props.action.type}</span>
                        </div>
                    </div>
                </div>
                <div className="action-actions">
                    <a href={`/action/${props.action.code}`} className="btn-secondary">View Details</a>
                    
                </div>
            </div>
        );
    }else if(props.operation) {
        let formattedCode = '';
        for (let i = 0; i < props.operation.number.length; i++) {
            if (i === 1 || i === 2 || i === 5 || i === 8 || i === 10 || i === 14 || i === 17 || i === 20 || i === 22) {
                formattedCode += '.';
            }
            if (i < props.operation.number.length) {
                formattedCode += props.operation.number[i];
            }
        }
        const situationClassName = 'action-status' + (props.operation.situation === 'in the works' ? ' status-in-progress' : props.operation.situation === 'on halt' ? ' status-pending' : props.operation.situation === 'completed' ? ' status-completed' : '');
        const situation = props.operation.situation === 'in the works' ? 'En cours' : props.operation.situation === 'on halt' ? 'En attente' : props.operation.situation === 'completed' ? 'Fini' : '';
        return (
            <div className="action-item" data-id={props.operation.number} data-status="in-progress" data-year="2024" data-process="administrative">
                <div className="action-info">
                    <div className="action-icon">
                        <i className="icon-action"></i>
                    </div>
                    <div className="action-details">
                        <span className="action-name">{props.operation.title}</span>
                        <div className="action-meta">
                            <span>Code-{formattedCode}</span>
                            {props.operation.current_ap ? <span>AP-Actuelle: {props.operation.current_ap}.00da</span> : props.operation.initial_ap ? <span>AP-Initial: {props.operation.initial_ap}.00da</span> : ''}
                        </div>
                    </div>
                </div>
                <div className="action-actions">
                    <span className={situationClassName}>{situation}</span>
                    <a href={`/operation/${props.operation.number}`} className="btn-secondary">View Details</a>
                    
                </div>
            </div>
        );
    }else if (props.project) {
        let formattedCode = '';
        for (let i = 0; i < props.project.operation.number.length; i++) {
            if (i === 1 || i === 2 || i === 5 || i === 8 || i === 10 || i === 14 || i === 17 || i === 20 || i === 22) {
                formattedCode += '.';
            }
            if (i < props.project.operation.number.length) {
                formattedCode += props.project.operation.number[i];
            }
        }
        return (
            <div className="action-item" data-id={props.project.id} data-status="in-progress" data-year="2024" data-process="administrative">
                <div className="action-info">
                    <div className="action-icon">
                        <i className="icon-action"></i>
                    </div>
                    <div className="action-details">
                        <span className="action-name">{props.project.objectif}</span>
                        <div className="action-meta">
                            <span>{formattedCode}</span>
                            <span>D-début: {props.project.start_date.slice(0,10)}</span>
                            <span>D-évaluation: {props.project.assessment_date.slice(0,10)}</span>
                        </div>
                    </div>
                </div>
                <div className="action-actions">
                    <a href={`/project/${props.project.id}`} className="btn-secondary">View Details</a>
                    
                </div>
            </div>
        );
    }else if (props.consultation) {
        let formattedCode = '';
        for (let i = 0; i < props.consultation.operation.number.length; i++) {
            if (i === 1 || i === 2 || i === 5 || i === 8 || i === 10 || i === 14 || i === 17 || i === 20 || i === 22) {
                formattedCode += '.';
            }
            if (i < props.consultation.operation.number.length) {
                formattedCode += props.consultation.operation.number[i];
            }
        }
        return (
            <div className="action-item" data-id={props.consultation.id} data-status="in-progress" data-year="2024" data-process="administrative">
                <div className="action-info">
                    <div className="action-icon">
                        <i className="icon-action"></i>
                    </div>
                    <div className="action-details">
                        <span className="action-name">{props.consultation.observation}</span>
                        <div className="action-meta">
                            <span>{formattedCode}</span>
                            <span>Date de signature: {props.consultation.signature_date}</span>
                            <span>Durée: {props.consultation.duration}</span>
                        </div>
                    </div>
                </div>
                <div className="action-actions">
                    <a href={`/consultation/${props.consultation.id}`} className="btn-secondary">View Details</a>
                    
                </div>
            </div>
        );
    }else if(props.partner) {
        return (
            <div className="action-item" data-id={props.partner.id} data-status="in-progress" data-year="2024" data-process="administrative">
                <div className="action-info">
                    <div className="action-icon">
                        <i className="icon-action"></i>
                    </div>
                    <div className="action-details">
                        <span className="action-name">{props.partner.company_name}</span>
                        <div className="action-meta">
                            <span>NIF: {props.partner.nif}</span>
                            <span>Phone: {props.partner.phone}</span>
                            <span>Domain: {props.partner.domain}</span>
                        </div>
                    </div>
                </div>
                <div className="action-actions">
                    <a href={`/partner/${props.partner.nif}`} className="btn-secondary">View Details</a>
                    
                </div>
            </div>
        );
    }else if(props.notice) {
        let formattedCode = '';
        for (let i = 0; i < props.notice.operation.number.length; i++) {
            if (i === 1 || i === 2 || i === 5 || i === 8 || i === 10 || i === 14 || i === 17 || i === 20 || i === 22) {
                formattedCode += '.';
            }
            if (i < props.notice.operation.number.length) {
                formattedCode += props.notice.operation.number[i];
            }
        }

        let bomop = '-';
        let frPDate = '-';

        if(props.notice.french_publication_date) {
            frPDate = props.notice.french_publication_date.slice(0,10);
        }
        if(props.notice.bomop_date) {
            bomop = props.notice.BOMOP_date.slice(0,10);
        }
        return (
            <div className="action-item" data-id={props.notice.id} data-status="in-progress" data-year="2024" data-process="administrative">
                <div className="action-info">
                    <div className="action-icon">
                        <i className="icon-action"></i>
                    </div>
                    <div className="action-details">
                        <span className="action-name">{props.notice.observation}</span>
                        <div className="action-meta">
                            <span>{formattedCode}</span>
                            <span>Date de publication: {frPDate}</span>
                            <span>Date BOMOP: {bomop}</span>
                        </div>
                    </div>
                </div>
                <div className="action-actions">
                    <a href={`/notice/${props.notice.id}`} className="btn-secondary">View Details</a>
                    
                </div>
            </div>
        );
    }else if(props.document) {
        // convert size to kb or mb
        let size = props.document.size;
        if (size >= 1024 * 1024) {
            size = (size / (1024 * 1024)).toFixed(2) + ' MB';
        }
        else if (size >= 1024) {
            size = (size / 1024).toFixed(2) + ' KB';
        } else {
            size = size + ' Bytes';
        }

        let mimeType = '';
        let mimeType2 = '';
        // convert mime_type to a more readable format
        if( props.document.mime_type) {
            mimeType = props.document.mime_type.split('/')[1].toUpperCase();
            mimeType2 = props.document.mime_type.split('/')[0].toUpperCase();
            if (mimeType === 'PDF') mimeType = 'PDF Document';
            else if (mimeType2 === 'TEXT') mimeType = 'Text Document';
            else if (mimeType === 'VND.OPENXMLFORMATS-OFFICEDOCUMENT.WORDPROCESSINGML.DOCUMENT' || mimeType === 'docx') mimeType = 'Word Document';
            else if (mimeType === 'CSV') mimeType = 'CSV File';
        }



        const preview = () => {
            // Check if the document is a text file
            if (props.document.mime_type.split('/')[1].toLowerCase() === 'plain') {
                // Fetch the text content and display it in a modal
                axiosClient.get(`/documents/${props.document.id}/preview`, { responseType: 'text' })
                    .then(response => {
                        const textContent = response.data; // Get the text content
        
                        // Create a modal dynamically
                        const modal = document.createElement('div');
                        modal.style.position = 'fixed';
                        modal.style.top = '50%';
                        modal.style.left = '50%';
                        modal.style.transform = 'translate(-50%, -50%)';
                        modal.style.backgroundColor = '#fff';
                        modal.style.padding = '20px';
                        modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                        modal.style.zIndex = '1000';
                        modal.style.maxWidth = '80%';
                        modal.style.maxHeight = '80%';
                        modal.style.overflowY = 'auto';
        
                        // Add a close button
                        const closeButton = document.createElement('button');
                        closeButton.textContent = 'x';
                        closeButton.fontSize = '20px';
                        closeButton.style.marginBottom = '10px';
                        closeButton.style.backgroundColor = 'transparent';
                        closeButton.onclick = () => document.body.removeChild(modal);
        
                        // Add the text content
                        const textArea = document.createElement('pre');
                        textArea.textContent = textContent;
                        textArea.style.whiteSpace = 'pre-wrap';
                        textArea.style.wordWrap = 'break-word';
        
                        modal.appendChild(closeButton);
                        modal.appendChild(textArea);
                        document.body.appendChild(modal);
                    })
                    .catch(error => {
                        console.error('Error fetching text file preview:', error);
                    });
            } else {
                // Handle other file types (e.g., PDF)
                axiosClient.get(`/documents/${props.document.id}/preview`, { responseType: 'blob' })
                    .then(response => {
                        const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/' + props.document.mime_type.split('/')[1].toLowerCase() }));
                        const newTab = window.open(url, '_blank');
                        if (newTab) {
                            newTab.focus();
                        } else {
                            alert('Please allow popups for this website to view the document.');
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching document preview:', error);
                    });
            }
        };
        const download = () => {
            //fetch the document and download it
            axiosClient.get(`/documents/${props.document.id}/download`, { responseType: 'blob' })
                .then(response => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', props.document.name);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                })
                .catch(error => {
                    console.error('Error downloading document:', error);
                });
        }
        return (
            <div className="action-item" data-id={props.document.id} data-status="in-progress" data-year="2024" data-process="administrative">
                <div className="action-info">
                    <div className="action-icon">
                        <i className="icon-action"></i>
                    </div>
                    <div className="action-details">
                        <span className="action-name">{props.document.name}</span>
                        <div className="action-meta">
                            <span>{}</span>
                            <span>Size: {size}</span>
                            <span>Type: {mimeType}</span>
                        </div>
                    </div>
                </div>
                <div className="action-actions"  style={{gap: 1 + "rem"}}>
                    {/* <a href={`/document/${props.document.id}`} className="btn-secondary">View Details</a> */}
                    {props.document.is_previewable && <button className="btn-secondary" onClick={preview}>Preview</button>}
                    <button className="btn-secondary" onClick={download}>Download</button>
                </div>
            </div>
        );
    }

}

export default ProjectListItem;