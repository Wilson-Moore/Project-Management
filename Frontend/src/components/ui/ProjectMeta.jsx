
function ProjectMeta(props) {

      if(props.operation) {
            const { operation } = props;

            let formattedCode = '';
            for (let i = 0; i < operation.number.length; i++) {
                  if (i === 1 || i === 2 || i === 5 || i === 8 || i === 10 || i === 14 || i === 17 || i === 20 || i === 22) {
                  formattedCode += '.';
                  }
                  if (i < operation.number.length) {
                  formattedCode += operation.number[i];
                  }
            }
            return (
                  <div className="project-meta">
                        <div className="meta-item">
                              <span className="meta-label">Code :</span>
                              <span className="meta-value">{formattedCode}</span></div>
                        <div className="meta-item">
                              <span className="meta-label">Intitulé de l'opération :</span>
                              <span className="meta-value">{operation.title}</span></div>
                        <div className="meta-item">
                              <span className="meta-label">Année de notification :</span>
                              <span className="meta-value">{operation.date_of_notification.slice(0,4)}</span></div>
                        <div className="meta-item">
                              <span className="meta-label">AP Actuelle :</span>
                              <span className="meta-value">{operation.current_ap + ".00da"}</span></div>
                  </div>
            );
      }

      return (
            <div className="project-meta">
                  <div className="meta-item">
                        <span className="meta-label">IDENTIFIANT :</span>
                        <span className="meta-value">ID-2024-045</span></div>
                  <div className="meta-item">
                        <span className="meta-label">Le processus :</span>
                        <span className="meta-value">Administrative Building</span></div>
                  <div className="meta-item">
                        <span className="meta-label">Date de signature :</span>
                        <span className="meta-value">15 Mar 2024</span></div>
                  <div className="meta-item">
                        <span className="meta-label">Temps de préparation :</span>
                        <span className="meta-value">1 mois</span></div>
            </div>
      );
}

export default ProjectMeta;