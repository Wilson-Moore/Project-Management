import './../assets/styles/allProjectHeader.css'

function AllProjectHeader(props) {

      return (
            <div className="actions-header">
                  <div className="breadcrumbs">
                        <a href="/projects">Projects</a>
                        <span className="separator"> &gt; </span>
                        <span className="current">Tous les portefeuille</span>
                  </div>

                  <div className="actions-title">
                        <h1>Tous les portefeuille</h1>
                        <div className="actions-status-summary">
                              <span className="action-status status-in-progress">En cours: 6</span>
                              <span className="action-status status-completed">Fini: 4</span>
                              <span className="action-status status-pending">En Attente: 2</span>
                        </div>
                  </div>

                  <div className="actions-meta">
                        <div className="meta-item">
                              <span className="meta-label">TOTAL PORTEFIEULLES :</span>
                              <span className="meta-value">{props.total}</span>
                        </div>
                        <div className="meta-item">
                              <span className="meta-label">LAST UPDATED :</span>
                              <span className="meta-value">29 Apr 2025</span>
                        </div>
                        <div className="meta-item">
                              <span className="meta-label">FISCAL YEAR :</span>
                              <span className="meta-value">2024-2025</span>
                        </div>
                  </div>
            </div>
      );
}

export default AllProjectHeader;