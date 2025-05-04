import AllProjectLayout from "../../../layouts/AllProjectLayout.jsx";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

function AllOperations() {
      const [projects,setProjects]=useState([]);

      const [loading,setLoading]=useState(false);
      const [currentpage,setcurrentpage]=useState(1);
      const [totalpages,settotalpages]=useState(1);
      const {setNotification}=NotificationStateContext()

      useEffect(()=>{getOperations();},[currentpage])

      const getOperations=()=>{
            setLoading(true)
            axiosClient.get(`/projects?page=${currentpage}`)
            .then(({ data }) => {
            setLoading(false)
            setProjects(data.data)
            settotalpages(data.meta.last_page)
            })
            .catch(() => {
            setLoading(false)
            })
      }
      
      return (
            <>
            <AllProjectLayout projects={projects} loading={loading}/>
            {!loading && totalpages > 0? 
            <div className="pagination-controls">
            {currentpage > 1 && (
                  <button onClick={()=>setcurrentpage(currentpage-1)}>Previous</button>
            )}
            <span>Page {currentpage} of {totalpages}</span>
            {currentpage < totalpages && (
                  <button onClick={()=>setcurrentpage(currentpage+1)}>Next</button>
            )}
            </div> :""}
            </>
      );
}

export default AllOperations;