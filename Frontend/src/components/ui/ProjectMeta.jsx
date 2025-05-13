
function ProjectMeta(props) {
      if(props.wallet) {
            const { wallet } = props;

            return (
                  <div className="project-meta">
                        <div className="meta-item">
                              <span className="meta-label">Code :</span>
                              <span className="meta-value">{wallet.code}</span></div>
                        <div className="meta-item">
                              <span className="meta-label">Intitulé du portefeuille :</span>
                              <span className="meta-value">{wallet.title}</span></div>
                  </div>  
            );
      } else if(props.program) {
            const { program } = props;

            return (
                  <div className="project-meta">
                        <div className="meta-item">
                              <span className="meta-label">Code :</span>
                              <span className="meta-value">{program.code}</span></div>
                        <div className="meta-item">
                              <span className="meta-label">Intitulé du programme :</span>
                              <span className="meta-value">{program.title}</span></div>
                        <div className="meta-item">
                              <span className="meta-label">Portefeuille :</span>
                              <span className="meta-value">{props._wallet.title}</span></div>
                  </div>  
            );
      }else if(props.subprogram) {
            const { subprogram } = props;

            return (
                  <div className="project-meta">
                        <div className="meta-item">
                              <span className="meta-label">Code :</span>
                              <span className="meta-value">{subprogram.code}</span></div>
                        <div className="meta-item">
                              <span className="meta-label">Intitulé du sous-programme :</span>
                              <span className="meta-value">{subprogram.title}</span></div>
                        <div className="meta-item">
                              <span className="meta-label">Programme :</span>
                              <span className="meta-value">{props._program.title}</span></div>
                  </div>
            );
      }else if(props.action) {
            const {action} = props;

            let formattedCode = '';
            for (let i = 0; i < action.code.length; i++) {
                  if (i === 3 || i === 6 || i === 8 || i === 12 || i === 15) {
                  formattedCode += '.';
                  }
                  if (i < action.code.length) {
                  formattedCode += action.code[i];
                  }
            }

            return (
                  <div className="project-meta">
                        <div className="meta-item">
                              <span className="meta-label">Code :</span>
                              <span className="meta-value">{formattedCode}</span></div>
                        <div className="meta-item">
                              <span className="meta-label">Intitulé de l'action :</span>
                              <span className="meta-value">{action.title}</span></div>
                  </div>
            );

      }else if(props.operation) {
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
                              <span className="meta-value">{operation.current_ap ? operation.current_ap + ".00da" : operation.initial_ap ? operation.initial_ap + ".00da" : ''}</span></div>
                  </div>
            );
      }

      return (
            <div className="project-meta">
                  <div className="meta-item">
                        <span className="meta-label">Objectif du projet :</span>
                        <span className="meta-value">{props.project.objectif}</span></div>
                  <div className="meta-item">
                        <span className="meta-label">Démarrage :</span>
                        <span className="meta-value">{props.project.start_date.slice(0,10)}</span></div>
                  <div className="meta-item">
                        <span className="meta-label">Évaluation :</span>
                        <span className="meta-value">{props.project.assessment_date.slice(0,10)}</span></div>
                  <div className="meta-item">
                        <span className="meta-label">Coût :</span>
                        <span className="meta-value">{props.project.cost ? props.project.cost + ".00da" : ''}</span></div>
            </div>
      );
}

export default ProjectMeta;