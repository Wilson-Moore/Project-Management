import {useEffect, useState} from "react";
import axiosClient from "../../axios-client.js";
import {Link} from "react-router-dom";
import {NotificationStateContext} from "../../contexts/NotificationContextProvider.jsx";

export default function wallets() {
  const [wallets,setwallets]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentpage,setcurrentpage]=useState(1);
  const [totalpages,settotalpages]=useState(1);
  const {setNotification}=NotificationStateContext()

  useEffect(()=>{getwallets();},[currentpage])

  const onDeleteClick=wallet=>{
    if (!window.confirm("Are you sure you want to delete this wallet?")) {
      return
    }
    axiosClient.delete(`/wallets/${wallet.code}`)
      .then(()=>{
        setNotification('Wallet was successfully deleted')
        getwallets()
      })
  }

  const getwallets=()=>{
    setLoading(true)
    axiosClient.get(`/wallets?page=${currentpage}`)
      .then(({ data }) => {
        setLoading(false)
        setwallets(data.data)
        settotalpages(data.meta.last_page)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
        <h1>wallets</h1>
        <Link className="btn-add" to="/wallets/new">Add new</Link>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
          <tr>
            <th>Code</th>
            <th>Tilte</th>
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
            {wallets.map(u => (
              <tr key={u.code}>
                <td>{u.code}</td>
                <td>{u.title}</td>
                <td>
                  <Link className="btn-edit" to={'/wallets/'+u.code}>Edit</Link>
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