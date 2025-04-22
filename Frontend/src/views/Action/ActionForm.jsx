import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../axios-client.js";
import {NotificationStateContext} from "../../contexts/NotificationContextProvider.jsx";

export default function UserForm() {
  const navigate=useNavigate();
  let {id}=useParams();
  const [action,setaction]=useState({code: '',title: '',type: ''})
  const [errors,setErrors]=useState(null)
  const [loading,setLoading]=useState(false)
  const {setNotification}=NotificationStateContext()

  useEffect(() => {
    if (id) {
      setLoading(true);
      axiosClient.get(`/actions/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setaction(data.data);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);

  const onSubmit = ev => {
    ev.preventDefault();
    const request = id
      ? axiosClient.put(`/actions/${action.code}`,action)
      : axiosClient.post('/actions',action);

    request
      .then(() => {
        setNotification(id ? 'action was successfully updated' : 'action was successfully created');
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
      {id&&<h1>Update action: {action.code}</h1>}
      {!id&&<h1>New action</h1>}
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
            <input value={action.type} onChange={ev => setaction({...action, wallet: ev.target.value})} placeholder="Type"/>
            <button className="btn">Save</button>
          </form>
        )}
      </div>
    </>
  )
}