import {useEffect, useState} from "react";
import axiosClient from "../../axios-client.js";
import {Link} from "react-router-dom";
import {NotificationStateContext} from "../../contexts/NotificationContextProvider.jsx";

export default function programs() {
  const [programs,setprograms]=useState([]);
  const [loading,setLoading]=useState(false);
  const {setNotification}=NotificationStateContext()

  useEffect(()=>{getprograms();},[])

  const onDeleteClick=program=>{
    if (!window.confirm("Are you sure you want to delete this program?")) {
      return
    }
    axiosClient.delete(`/programs/${program.code}`)
      .then(()=>{
        setNotification('program was successfully deleted')
        getprograms()
      })
  }

  const getprograms=()=>{
    setLoading(true)
    axiosClient.get('/programs')
      .then(({ data }) => {
        setLoading(false)
        setprograms(data.data)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
        <h1>programs</h1>
        <Link className="btn-add" to="/programs/new">Add new</Link>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
          <tr>
            <th>Code</th>
            <th>Tilte</th>
            <th>Wallet</th>
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
            {programs.map(u => (
              <tr key={u.code}>
                <td>{u.code}</td>
                <td>{u.title}</td>
                <td>{u.wallet}</td>
                <td>
                  <Link className="btn-edit" to={'/programs/'+u.code}>Edit</Link>
                  &nbsp;
                  <button className="btn-delete" onClick={ev=>onDeleteClick(u)}>Delete</button>
                </td>
              </tr>
            ))}
            </tbody>
          }
        </table>
      </div>
    </div>
  )
}