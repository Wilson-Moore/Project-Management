import AllProjectLayout from "../../../layouts/AllProjectLayout.jsx";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {Link} from "react-router-dom";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

function AllPrograms() {
      const [programs,setPrograms]=useState([]);

      const [loading,setLoading]=useState(false);
      const [currentpage,setcurrentpage]=useState(1);
      const [totalpages,settotalpages]=useState(1);
      const {setNotification}=NotificationStateContext()

      useEffect(()=>{getPrograms();},[currentpage])

      const getPrograms=()=>{
            setLoading(true)
            axiosClient.get(`/programs?page=${currentpage}`)
            .then(({ data }) => {
            setLoading(false)
            setPrograms(data.data)
            settotalpages(data.meta.last_page)
            })
            .catch(() => {
            setLoading(false)
            })
      }
      
      return (
            <>
            <AllProjectLayout programs={programs} loading={loading}/>
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

export default AllPrograms;