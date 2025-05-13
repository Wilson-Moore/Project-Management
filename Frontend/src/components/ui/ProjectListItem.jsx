
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
                    <a href={`/projects/active/wallet/${props.wallet.code}`} className="btn-secondary">View Details</a>
                    
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
                    <a href={`/projects/active/wallet/${props.program.wallet.code}/program/${props.program.code}`} className="btn-secondary">View Details</a>
                    
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
                    <a href={`/projects/active/wallet/082/program/${props.subprogram.program.code}/subprogram/${props.subprogram.id}`} className="btn-secondary">View Details</a>
                    
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
        const situationClassName = 'action-status' + (props.operation.situation === 'in the works' ? ' status-in-progress' : props.operation.situation === 'on halt' ? ' status-pending' : '');
        const situation = props.operation.situation === 'in the works' ? 'En cours' : props.operation.situation === 'on halt' ? 'En attente' : '';
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
    }

}

export default ProjectListItem;