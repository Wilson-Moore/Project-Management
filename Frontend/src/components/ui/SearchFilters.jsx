import {Link} from "react-router-dom";

function SeachFilters(props) {
      return (

            <>
            <div className="actions-controls">
                  <div className="search-container">
                        <span className="search-icon"><i className="icon-search"></i></span>
                        <input type="text" id="action-search" placeholder="Search actions..." />
                  </div>

                  <div className="actions-buttons">
                        <Link className="btn-primary" to={"/"+props.txt.toLowerCase()+"s/new"}>Add New {props.txt}</Link>
                  </div>
            </div>

            <div className="filter-active-container" id="filter-active-container">
                  <div id="active-filters">
                    {/* {Active filters will be displayed here} */}
                  </div>
                  <button className="filter-reset" id="reset-filters">Reset all filters</button>
            </div>

            <div className="actions-filters">
                  <span className="filter-label">Filter by:</span>
                  <select className="filter-select" id="program-filter">
                        <option value="all">All Programs</option>
                        <option value="prog-082">Programme-082</option>
                        <option value="prog-083">Programme-083</option>
                        <option value="prog-084">Programme-084</option>
                  </select>

                  <select className="filter-select" id="status-filter">
                        <option value="all">All Statuses</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                  </select>

                  <select className="filter-select" id="year-filter">
                        <option value="all">All Years</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                  </select>

                  <select className="filter-select" id="process-filter">
                        <option value="all">All Processes</option>
                        <option value="administrative">Administrative Building</option>
                        <option value="construction">Construction</option>
                        <option value="renovation">Renovation</option>
                        <option value="maintenance">Maintenance</option>
                  </select>
            </div>
            </>
      );
}           

export default SeachFilters;