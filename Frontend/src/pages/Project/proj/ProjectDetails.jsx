import ProjectLayout from "../../../layouts/ProjectLayout.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

function ProjectDetails() {
      const { 
            projectId,
      } = useParams();
      const [operation, setOperation] = useState({number: '', title: '', date_of_notification: '', initial_ap: '', current_ap: '', situation: '', action_code: '', projects: []});
      const [project, setProject] = useState({id: '', objectif: '', start_date: '', cost: '', duration: '', assessment_date: '', operation_number: ''});
      const [loading, setLoading] = useState(false);
      const {setNotification} = NotificationStateContext()
      const [errors, setErrors] = useState(null)
      const navigate = useNavigate()

      useEffect(() => {
            const fetchData = async () => {
                  try {
                  
                        const projectResponse = await axiosClient.get(`/projects/${projectId}?include=operation`);
                        const projectData = projectResponse.data.data;
                        setProject(projectData);
                        setLoading(false);
                  }catch (error) {
                        setLoading(false);
                        setErrors(error);
                  }
            };
            
            fetchData();
      }, [projectId]);

      if (loading) {
      return (
            <div className="loading-screen">
            <div className="loading-threedots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            </div>
            </div>
      );
      }
      
      if(errors) {
      return (
            <div className="alert">
            {errors.message}
            </div>
      );
      }

      return (
      <ProjectLayout project={project} />
      );
}

export default ProjectDetails;