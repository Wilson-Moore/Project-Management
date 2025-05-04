import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

export default function UserForm() {
      const navigate=useNavigate();
      let {operationId}=useParams();
      const [operation,setOperation]=useState({number: '',title: '',date_of_notification: '', initial_ap: '', current_ap: '', situation: '', action_code: ''})
      const [errors,setErrors]=useState(null)
      const [loading,setLoading]=useState(false)
      const {setNotification}=NotificationStateContext()
      
      useEffect(() => {
      if (operationId) {
      setLoading(true);
      axiosClient.get(`/operations/${operationId}`)
            .then(({ data }) => {
            setLoading(false);
            setOperation(data.data);
            })
            .catch(() => {
            setLoading(false);
            });
      }
      }, [operationId]);

      const onSubmit = ev => {
            ev.preventDefault();
            const request = operationId
            ? axiosClient.put(`/operations/${operation.number}`,operation)
            : axiosClient.post('/operations',operation);

            request
            .then(() => {
                  setNotification(operationId ? 'operation was successfully updated' : 'operation was successfully created');
                  navigate('/operations');
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
      {operationId&&<h1>Update operation: {operation.number}</h1>}
      {!operationId&&<h1>New operation</h1>}
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
            <input value={operation.number} onChange={ev => setOperation({...operation, number: ev.target.value, action_code: ev.target.value.slice(2,-5)})} placeholder="Number"/>
            <input value={operation.title} onChange={ev => setOperation({...operation, title: ev.target.value})} placeholder="Title"/>
            <input value={operation.date_of_notification} onChange={ev => setOperation({...operation, date_of_notification: ev.target.value})} placeholder="Date of Notification"/>
            <input value={operation.initial_ap} onChange={ev => setOperation({...operation, initial_ap: ev.target.value})} placeholder="Initial AP"/>
            <input value={operation.current_ap} onChange={ev => setOperation({...operation, current_ap: ev.target.value})} placeholder="Current AP"/>
            <select value={operation.situation} onChange={ev => setOperation({...operation, situation: ev.target.value})} placeholder="Situation">
                  <option value="1" selected>in the works</option>
                  <option value="2">on halt</option>
            </select>
            {/* <input value={operation.situation} onChange={ev => setOperation({...operation, situation: ev.target.value})} placeholder="Situation"/> */}
            <input value={operation.action_code} onChange={ev => setOperation({...operation, action_code: ev.target.value})} placeholder="Action Code"/>
            <button className="btn">Save</button>
            </form>
            )}
      </div>
      </>
      )
}