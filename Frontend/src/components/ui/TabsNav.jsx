import TabButton from './../common/TabButton'

function TabsNav(props) {
      return (
            <nav className="tabs-nav">
                  <TabButton text="Overview" active/>
                  <TabButton text="Documents"/>
                  <TabButton text="Consultation"/>
                  <TabButton text="Avis d'appel d'offres"/>
                  <TabButton text="Projets" clicked={props.clicked} />
                  <TabButton text="Rapports"/>
            </nav>

      );
}

export default TabsNav