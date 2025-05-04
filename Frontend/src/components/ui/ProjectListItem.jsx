
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
                    <button className="btn-icon"><i className="icon-share"></i></button>
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
                    <a href={`/projects/active/wallet/${props.program.wallet}/program/${props.program.code}`} className="btn-secondary">View Details</a>
                    <button className="btn-icon"><i className="icon-share"></i></button>
                </div>
            </div>
        );
    }

}

export default ProjectListItem;