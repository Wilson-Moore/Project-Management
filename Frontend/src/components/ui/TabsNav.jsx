import TabButton from './../common/TabButton'

function TabsNav() {
      return (
            <nav className="tabs-nav">
                  <TabButton text="Overview" active/>
                  <TabButton text="Documents"/>
                  <TabButton text="Consultation"/>
                  <TabButton text="Avis d'appel d'offres"/>
                  <TabButton text="Marchés"/>
                  <TabButton text="Rapports"/>
            </nav>

      );
}

export default TabsNav