import { Link } from "react-router-dom";

function OperationItem(props) {
      let statusClass = props.status === "En cours" ? " category-in-progress" :
            props.status === "Fini" ? " category-finished" :
            props.status === "Pending" ? " category-pending" :
            props.status === "In Progress" ? " category-in-progress" : "";

      statusClass = "document-category" + statusClass;

      return (
            <div className="operation-item" >
                  <div className="document-info">
                        <div className="document-icon">
                              <i className="icon-settings"></i>
                        </div>
                        <div className="document-details">
                              <span className="document-name">{props.operationName}</span>
                              <div className="document-meta">
                                    <span>{props.year}</span>
                                    <span>{props.creator ? "By:" + props.creator : ""}</span>
                              </div>
                        </div>
                        <div className={statusClass}>{props.status}</div>
                        <div className="document-actions">
                              {/* <Link to="/operation-details" className="btn-icon"><i className="icon-share"></i></Link> */}
                              {props.entity.wallet ? <a href={"/projects/active/wallet/"+props.entity.wallet+"/program/"+  props.entity.code} className="btn-icon"><i className="icon-share"></i></a>:
                                    ""}
                        </div>
                  </div>
            </div>
      );
}

OperationItem.defaultProps = {
      operationName: 'Opération',
      year: '----',
      isObserved: 'Unkonwn',
      creator: 'Unkonwn',
      status: 'Unkonwn'
};
export default OperationItem;