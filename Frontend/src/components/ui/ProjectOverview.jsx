import OperationItem from "./OperationItem";
import './../../assets/styles/projectOverview.css'

function ProjectOverview(props) {
      if(props.wallet) {
            const { wallet } = props;
            return (
                  <div className="detail-grid">
                        <div className="detail-column">
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Code de Portefeuille:</h3>
                              <p className="detail-value">{wallet.code}</p>
                              </div>
                              </div>
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Intitulé de Portefeuille:</h3>
                              <p className="detail-value">{wallet.title}</p>
                              </div>
                              </div>
                        </div>
                  </div>
            );
      }else if(props.program) {
            const { program } = props;
            return (
                  <div className="detail-grid">
                        <div className="detail-column">
                              <div className="detail-row">
                              <div className="detail-cell">
                                    <h3 className="detail-label">Code de Programme:</h3>
                                    <p className="detail-value">{program.code}</p>
                              </div>
                              {/* <div className="detail-cell">
                                    <h3 className="detail-label">Code de Portefeuille:</h3>
                                    <p className="detail-value">{props._wallet.code}</p>
                              </div> */}
                              </div>
                              <div className="detail-row">
                              <div className="detail-cell">
                                    <h3 className="detail-label">Intitulé de Programme:</h3>
                                    <p className="detail-value">{program.title}</p>
                              </div>
                              {/* <div className="detail-cell">
                                    <h3 className="detail-label">Intitulé de Portefeuille:</h3>
                                    <p className="detail-value">{props._wallet.title}</p>
                              </div> */}
                              </div>
                        </div>
                  </div>
            );

      }else if(props.subprogram) {
            const { subprogram } = props;
            return (
                  <div className="detail-grid">
                        <div className="detail-column">
                              <div className="detail-row">
                              <div className="detail-cell">
                                    <h3 className="detail-label">Code de Sous-Programme:</h3>
                                    <p className="detail-value">{subprogram.code}</p>
                              </div>
                              </div>
                              <div className="detail-row">
                              <div className="detail-cell">
                                    <h3 className="detail-label">Intitulé de Sous-Programme:</h3>
                                    <p className="detail-value">{subprogram.title}</p>
                              </div>
                              </div>
                        </div>
                  </div>
            );
      }else if(props.action) {
            const { action } = props;

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
                  <div className="detail-grid">
                        <div className="detail-column">
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Code d'Action:</h3>
                              <p className="detail-value">{formattedCode}</p>
                              </div>
                              </div>
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Intitulé d'Action:</h3>
                              <p className="detail-value">{action.title}</p>
                              </div>
                              </div>
                        </div>
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

            if (operation.current_ap) {
                  let formattedCAp = '';
                  for (let i = 0; i < operation.current_ap.length; i++) {
                        if (i > 0 && (operation.current_ap.length - i) % 3 === 0) {
                                    formattedCAp += ' ';
                        }
                        formattedCAp += operation.current_ap[i];
                  }
            }
            let formattedCAp = '';
            let formattedIAp = '';

            ['current_ap', 'initial_ap'].forEach((key) => {
                  let formattedValue = '';
                  let value = operation[key] ? operation[key].toString() : '';
                  for (let i = 0; i < value.length; i++) {
                        // for every 3 numbers make a space
                        if (i > 0 && i % 3 === 0) {
                                    formattedValue += ' ';
                        }

                        if (i < value.length) {
                                    formattedValue += value[i];
                        }
                  }
                  if (key === 'current_ap') formattedCAp = formattedValue;
                  if (key === 'initial_ap') formattedIAp = formattedValue;
            });

            if(operation.date_of_notification) {
                  date_of_notification = operation.date_of_notification.slice(0,4);
            }
            return (
                  <div className="detail-grid">
                        <div className="detail-column">
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">N° de l'opération:</h3>
                              <p className="detail-value">{formattedCode}</p>
                              </div>
                              <div className="detail-cell">
                              <h3 className="detail-label">Intitulé de l'Opération:</h3>
                              <p className="detail-value">{operation.title}</p>
                              </div>
                              </div>
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Année de notification:</h3>
                              <p className="detail-value">{date_of_notification}</p>
                              </div>
                              <div className="detail-cell">
                              <h3 className="detail-label">AP Actuelle:</h3>
                              <p className="detail-value">{operation.current_ap ? formattedCAp + '.00 da': '-'}</p>
                              </div>
                              </div>
                        </div>
                        
                        <div className="detail-column">
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">AP Initial:</h3>
                              <p className="detail-value">{operation.initial_ap ? formattedIAp + '.00 da': '-'}</p>
                              </div>
                              <div className="detail-cell">
                              <h3 className="detail-label">Révaluation:</h3>
                              <p className="detail-value">{operation.revaluation || '-'}</p>
                              </div>
                              </div>
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Situation:</h3>
                              <p className="detail-value">{operation.situation || 'on halt'}</p>
                              </div>
                              <div className="detail-cell">
                              <h3 className="detail-label">Individualisée:</h3>
                              <p className="detail-value">{operation.individualized === 1 ? 'Oui' : operation.individualized === 0 ? 'Non' : '-'}</p>
                              </div>
                              </div>
                        </div>
                        
                        <div className="detail-wide">
                              <div className="detail-row">
                              <div className="detail-cell detail-quarter">
                              <h3 className="detail-label">Observation:</h3>
                              <p className="detail-value">{operation.observation || '-'}</p>
                              </div>
                              </div>
                        </div>
                  </div>
            );
      }else if(props.project) {
            const { project } = props;

            return (
                  <div className="detail-grid">
                  <div className="detail-column">
                        <div className="detail-row">
                        {/* <div className="detail-cell">
                        <h3 className="detail-label">N° du projet: </h3>
                        <p className="detail-value">{project.id || "-"}</p>
                        </div> */}
                        <div className="detail-cell">
                        <h3 className="detail-label">Objectif du projet: </h3>
                        <p className="detail-value">{project.objectif || "-"}</p>
                        </div>
                        </div>
                  </div>
                  
                  <div className="detail-column">
                        <div className="detail-row">
                        <div className="detail-cell">
                        <h3 className="detail-label">Duration: </h3>
                        <p className="detail-value">{project.duration || "-"}</p>
                        </div>
                        <div className="detail-cell">
                        <h3 className="detail-label">coût: </h3>
                        <p className="detail-value">{project.cost + ".00da" || "-"}</p>
                        </div>
                        </div>
                  </div>
            </div>
            );
      }else if (props.consultation) {
            // const { consultation } = props.consultation;
            return(
                  <>
                  <div className="detail-grid">
                        <div className="detail-column">
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Code d'Action:</h3>
                              <p className="detail-value">{props.consultation.signature_date || "-"}</p>
                              </div>
                              </div>
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Intitulé d'Action:</h3>
                              <p className="detail-value">{props.consultation.duration || "-"}</p>
                              </div>
                              </div>
                        </div>
                  </div>

                  <div>
                        <h3 className="detail-label">Observation:</h3>
                        <p className="detail-value">{props.consultation.observation || "-"}</p>
                  </div>
                  </>
            );
      }else if(props.notice) {
            let bomop = '-';
            let frPDate = '-';
            let arPDate = '-';

            if(props.notice.BOMOP_date) {
                  bomop = props.notice.BOMOP_date.slice(0,10);
            }
            if(props.notice.french_publication_date) {
                  frPDate = props.notice.french_publication_date.slice(0,10);
            }
            if(props.notice.arab_publication_date) {
                  arPDate = props.notice.arab_publication_date.slice(0,10);
            }
            
            return(
                  <>
                  <div className="detail-grid">
                        <div className="detail-column">
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Date de publication (ar):</h3>
                              <p className="detail-value">{arPDate}</p>
                              </div>
                              </div>
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Date de publication (fr):</h3>
                              <p className="detail-value">{frPDate}</p>
                              </div>
                              </div>
                        </div>
                        <div className="detail-column">
                              <div className="detail-row">
                              <div className="detail-cell">
                              <h3 className="detail-label">Date de BOMOP:</h3>
                              <p className="detail-value">{bomop}</p>
                              </div>
                              </div>
                        </div>
                  </div>

                  <div>
                        <h3 className="detail-label">Observation:</h3>
                        <p className="detail-value">{props.notice.observation || "-"}</p>
                  </div>
                  </>
            );

      }
}

export default ProjectOverview;