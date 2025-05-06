import './../assets/styles/allProjectHeader.css'

function AllProjectHeader(props) {

      return (
            <div className="actions-header">
                  <div className="breadcrumbs">
                        <a href="/">Home</a>
                        <span className="separator"> &gt; </span>
                        <span className="current">Tous les {props.txt}</span>
                  </div>

                  <div className="actions-title">
                        <h1>Tous les {props.txt}</h1>
                        <div className="actions-status-summary">
                        {props.encours ? <span className="action-status status-in-progress">En cours: {props.encours}</span> : ''}
                        {props.fini ? <span className="action-status status-completed">Fini: {props.fini}</span> : ''}
                        {props.enattente ? <span className="action-status status-pending">En Attente: {props.enattente}</span> : ''}
                        </div>
                  </div>

                  <div className="actions-meta">
                        <div className="meta-item">
                              <span className="meta-label">TOTAL {props.txt} :</span>
                              <span className="meta-value">{!props.loading ? props.total : "-"}</span>
                        </div>
                  </div>
            </div>
      );
}

export default AllProjectHeader;