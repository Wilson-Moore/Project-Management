
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
                            <span>Id-{props.subprogram.id}</span>
                            <span>Code-{props.subprogram.code}</span>
                            <span>Program-Code-{props.subprogram.program.code}</span>
                        </div>
                    </div>
                </div>
                <div className="action-actions">
                    <a href={`/projects/active/wallet/100/program/${props.subprogram.program.code}/subprogram/${props.subprogram.id}`} className="btn-secondary">View Details</a>
                    
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
        const walletCode = props.operation.action.code.slice(0, 3);
        const programCode = props.operation.action.code.slice(3, 6);
        const subprogramCode = props.operation.action.code.slice(6, 8);
        const actionCode = props.operation.action.code.slice(8, 12);
        const operationCode = props.operation.number.slice(0,2) + props.operation.number.slice(-3, props.operation.number.length);

        const situationClassName = 'action-status' + (props.operation.situation === 'in the works' ? ' status-in-progress' : props.operation.situation === 'on halt' ? ' status-pending' : '');

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
                            <span>AP-Actuelle: {props.operation.current_ap}.00da</span>
                            <span className={situationClassName}>{props.operation.situation}</span>
                        </div>
                    </div>
                </div>
                <div className="action-actions">
                    <a href={`/projects/active/wallet/${walletCode}/program/${programCode}/subprogram/${subprogramCode}/action/${actionCode}/operation/${props.operation.number}`} className="btn-secondary">View Details</a>
                    
                </div>
            </div>
        );
    }else if (props.project) {
        return (
            <div className="action-item" data-id={props.project.id} data-status="in-progress" data-year="2024" data-process="administrative">
                <div className="action-info">
                    <div className="action-icon">
                        <i className="icon-action"></i>
                    </div>
                    <div className="action-details">
                        <span className="action-name">{props.project.objectif}</span>
                        <div className="action-meta">
                            <span>N°{props.project.id}</span>
                            <span>Date-début: {props.project.start_date.slice(0,10)}</span>
                            <span>Date-évaluation: {props.project.assessment_date.slice(0,10)}</span>
                        </div>
                    </div>
                </div>
                <div className="action-actions">
                    <a href={`/projects/active/wallet/100/program/subprogram/project/`} className="btn-secondary">View Details</a>
                    
                </div>
            </div>
        );
    }

}

export default ProjectListItem;