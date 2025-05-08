import TabButton from './../common/TabButton'

function TabsNav(props) {
      const text = ['Aperçu'];
      
      switch (props.type) {
            case 'wallet':
                  text.push('Programmes');
                  break;
            case 'program':
                  text.push('Sous-Programmes');
                  break;
            case 'subprogram':
                  text.push('Actions');
                  break;
            case 'action':
                  text.push('Opérations');
                  break;
            case 'operation':
                  text.push('Documents', 'Consultations', 'Avis d\'appel d\'offres', 'Projets');
                  break;
            case 'project':
                  text.push('Documents');
                  break;
            default:
                  break;
      }


      return (
            <nav className="tabs-nav">
                        {text.map((item, index) => (
                              <TabButton text={item} active={index == 0 ? true : false} clicked={props.clicked} />
                        ))}
            </nav>

      );
}

export default TabsNav