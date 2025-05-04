import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

export default function UserForm() {
      const navigate=useNavigate();
      let {actionId}=useParams();
      const [action,setaction]=useState({code: '',title: ''})
      const [errors,setErrors]=useState(null)
      const [loading,setLoading]=useState(false)
      const {setNotification}=NotificationStateContext()
      
      useEffect(() => {
      if (actionId) {
      setLoading(true);
      axiosClient.get(`/actions/${actionId}`)
            .then(({ data }) => {
            setLoading(false);
            setaction(data.data);
            })
            .catch(() => {
            setLoading(false);
            });
      }
      }, [actionId]);

      const onSubmit = ev => {
            ev.preventDefault();
            const request = actionId
            ? axiosClient.put(`/actions/${action.code}`,action)
            : axiosClient.post('/actions',action);

            request
            .then(() => {
                  setNotification(actionId ? 'action was successfully updated' : 'action was successfully created');
                  navigate('/actions');
            })
            .catch(err => {
                  const response = err.response;
                  if (response && response.status === 422) {
                  setErrors(response.data.errors);
                  }
            });
      }

      return (
      <>
      {actionId&&<h1>Update action: {action.code}</h1>}
      {!actionId&&<h1>New action</h1>}
      <div className="card animated fadeInDown">
            {loading && (
            <div className="text-center">
            Loading...
            </div>
            )}
            {errors &&
            <div className="alert">
            {Object.keys(errors).map(key => (
                  <p key={key}>{errors[key][0]}</p>
            ))}
            </div>
            }
            {!loading && (
            <form onSubmit={onSubmit}>
            <input value={action.code} onChange={ev => setaction({...action, code: ev.target.value})} placeholder="Code"/>
            <input value={action.title} onChange={ev => setaction({...action, title: ev.target.value})} placeholder="Title"/>
            {/* <input value={action.subprogram_id} onChange={ev => setaction({...action, subprogram_id: ev.target.value})} placeholder="subprogram_id"/> */}
            {/* <select value={action.type} onChange={ev => setaction({...action, type: ev.target.value})} placeholder="Type">
                  <option value="1">internal</option>
                  <option value="2">external</option>
                  <option value="3">unique</option>
            </select> */}
            {/* <input value={action.subprogram_id} onChange={ev => setaction({...action, subprogram_id: ev.target.value})} placeholder="SubProgram id"/> */}
            <button className="btn">Save</button>
            </form>
            )}
      </div>
      </>
      )
}