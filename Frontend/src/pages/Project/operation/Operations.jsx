import AllProjectLayout from "../../../layouts/AllProjectLayout.jsx";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

function AllOperations() {
      const [operations,setOperations]=useState([]);

      const [loading,setLoading]=useState(false);
      const [currentpage,setcurrentpage]=useState(1);
      const [totalpages,settotalpages]=useState(1);
      const {setNotification}=NotificationStateContext()

      useEffect(()=>{getOperations();},[currentpage])

      const getOperations=()=>{
            setLoading(true)
            axiosClient.get(`/operations?page=${currentpage}`)
            .then(({ data }) => {
            setLoading(false)
            setOperations(data.data)
            settotalpages(data.meta.last_page)
            })
            .catch(() => {
            setLoading(false)
            })
      }
      
      return (
            <>
            <AllProjectLayout operations={operations} loading={loading}/>
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