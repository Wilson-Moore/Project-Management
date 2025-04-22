import {useEffect, useState} from "react";
import axiosClient from "../../axios-client.js";
import {Link} from "react-router-dom";
import {NotificationStateContext} from "../../contexts/NotificationContextProvider.jsx";

export default function subprograms() {
  const [subprograms,setsubprograms]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentpage,setcurrentpage]=useState(1);
  const [totalpages,settotalpages]=useState(1);
  const {setNotification}=NotificationStateContext()

  useEffect(()=>{getsubprograms();},[currentpage])

  const onDeleteClick=subprogram=>{
    if (!window.confirm("Are you sure you want to delete this subprogram?")) {
      return
    }
    axiosClient.delete(`/subprograms/${subprogram.code}`)
      .then(()=>{
        setNotification('subprogram was successfully deleted')
        getsubprograms()
      })
  }

  const getsubprograms=()=>{
    setLoading(true)
    axiosClient.get(`/subprograms?page=${currentpage}`)
      .then(({ data }) => {
        setLoading(false)
        setsubprograms(data.data)
        settotalpages(data.meta.last_page)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
        <h1>subprograms</h1>
        <Link className="btn-add" to="/subprograms/new">Add new</Link>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
          <tr>
            <th>Code</th>
            <th>Tilte</th>
            <th>Program</th>
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
            {subprograms.map(u => (
              <tr key={u.code}>
                <td>{u.code}</td>
                <td>{u.title}</td>
                <td>{u.program}</td>
                <td>
                  <Link className="btn-edit" to={'/subprograms/'+u.code}>Edit</Link>
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