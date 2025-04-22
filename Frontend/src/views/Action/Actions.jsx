import {useEffect, useState} from "react";
import axiosClient from "../../axios-client.js";
import {Link} from "react-router-dom";
import {NotificationStateContext} from "../../contexts/NotificationContextProvider.jsx";

export default function actions() {
  const [actions,setactions]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentpage,setcurrentpage]=useState(1);
  const [totalpages,settotalpages]=useState(1);
  const {setNotification}=NotificationStateContext()

  useEffect(()=>{getactions();},[currentpage])

  const onDeleteClick=action=>{
    if (!window.confirm("Are you sure you want to delete this action?")) {
      return
    }
    axiosClient.delete(`/actions/${action.code}`)
      .then(()=>{
        setNotification('action was successfully deleted')
        getactions()
      })
  }

  const getactions=()=>{
    setLoading(true)
    axiosClient.get(`/actions?page=${currentpage}`)
      .then(({ data }) => {
        setLoading(false)
        setactions(data.data)
        settotalpages(data.meta.last_page)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
        <h1>actions</h1>
        <Link className="btn-add" to="/actions/new">Add new</Link>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
          <tr>
            <th>Code</th>
            <th>Type</th>
            <th>Subprogram</th>
            <th>Actions</th>
          </tr>
          </thead>
          {loading &&
            <tbody>
            <tr>
              <td colSpan="5" class="text-center">
                Loading...
              </td>
            </tr>
            </tbody>
          }
          {!loading &&
            <tbody>
            {actions.map(u => (
              <tr key={u.code}>
                <td>{u.code}</td>
                <td>{u.type}</td>
                <td>{u.subprogrm}</td>
                <td>
                  <Link className="btn-edit" to={'/actions/'+u.code}>Show</Link>
                  &nbsp;
                  <button className="btn-delete" onClick={ev=>onDeleteClick(u)}>Delete</button>
                </td>
              </tr>
            ))}
            </tbody>
          }
        </table>
      </div>
      <div className="pagination-controls">
        {currentpage > 1 && (
          <button onClick={()=>setcurrentpage(currentpage-1)}>Previous</button>
        )}
        <span>Page {currentpage} of {totalpages}</span>
        {currentpage < totalpages && (
          <button onClick={()=>setcurrentpage(currentpage+1)}>Next</button>
        )}
      </div>
    </div>
  )
}