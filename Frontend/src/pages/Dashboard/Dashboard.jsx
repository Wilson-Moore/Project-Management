import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../../assets/styles/dashboard.css';
import {useNavigate, useParams} from "react-router-dom";
import axiosClient from "../../axios-client.js";
import {NotificationStateContext} from "../../contexts/NotificationContextProvider.jsx";
import {UserStateContext} from "../../contexts/UserContextProvider.jsx";
import ProjectListItem from './../../components/ui/ProjectListItem.jsx'
import SearchFilters from './../../components/ui/SearchFilters.jsx';

const Dashboard = () => {
      const {user,token,setUser,setToken,notification}=UserStateContext();
      // Mock data - in a real application, this would come from an API
      const [loading, setLoading] = useState(false);

      const [recentProjects, setRecentProjects] = useState([]);
      const [upcomingDeadlines, setUpcomingDeadlines] = useState([]);

      useEffect(() => {getProjects();},[]);

      const onLogout=ev=>{
            ev.preventDefault()
      
            axiosClient.post('/logout')
            .then(()=>{
            setUser({})
            setToken(null)
            })
      }

      const getProjects=()=>{
            setLoading(true)
            axiosClient.get(`/projects?page=1`)
            .then(({ data }) => {
                  setLoading(false)
                  setRecentProjects(data.data)
            })
            .catch(() => {
                  setLoading(false)
            })
      }

      if (loading) {
      return (
            <div className="loading-screen">
            <div className="loading-threedots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            </div>
            </div>
      );
      }
      

      return (
      <div className="dashboard-container fade-in">
            <div className="dashboard-header">
            <h1>Dashboard</h1>
            <button className="btn-logout" onClick={onLogout}>Logout</button>
            <div className="dashboard-actions">
            <div className="search-container">
                  <i className="search-icon fas fa-search"></i>
                  <input type="text" placeholder="Search..." />
            </div>
            <div className="actions-buttons">
                  <SearchFilters txt="operation" noOverlay/>
            </div>
            </div>
            </div>

            <div className="dashboard-grid">
            {/* Recent Projects */}
            <div className="dashboard-card recent-projects">
            <div className="card-header">
                  <h2>Recent Projects</h2>
                  <Link to="/projects" className="view-all">View All</Link>
            </div>
            <div className="card-content">
                  {recentProjects.slice(0,5).map((project) => (
                        <ProjectListItem key={project.id} project={project} />
                  ))}
            </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="dashboard-card upcoming-deadlines">
            <div className="card-header">
                  <h2>View All</h2>
            </div>
            <div className="card-content">
                  <div className="deadline-item">
                        <Link to="/wallets" className="category-card">
                              <div className="category-info">
                                    <h3>Wallets</h3>
                              </div>
                        </Link>
                  </div>
                  <div className="deadline-item">
                        <Link to="/programs" className="category-card">
                              <div className="category-info">
                                    <h3>Programs</h3>
                              </div>
                        </Link>
                  </div>
                  <div className="deadline-item">
                        <Link to="/subprograms" className="category-card">
                              <div className="category-info">
                                    <h3>Sub-Programs</h3>
                              </div>
                        </Link>
                  </div>
                  <div className="deadline-item">
                        <Link to="/actions" className="category-card">
                              <div className="category-info">
                                    <h3>Actions</h3>
                              </div>
                        </Link>
                  </div>
                  <div className="deadline-item">
                        <Link to="/operations" className="category-card">
                              <div className="category-info">
                                    <h3>Operations</h3>
                              </div>
                        </Link>
                  </div>
                  <div className="deadline-item">
                        <Link to="/projects" className="category-card">
                              <div className="category-info">
                                    <h3>Projects</h3>
                              </div>
                        </Link>
                  </div>
                  <div className="deadline-item">
                        <Link to="/partners" className="category-card">
                              <div className="category-info">
                                    <h3>Partners</h3>
                              </div>
                        </Link>
                  </div>
            </div>
            </div>
            </div>

      </div>
      );
};

export default Dashboard;