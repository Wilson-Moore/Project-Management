import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../axios-client.js";
import {NotificationStateContext} from "../../contexts/NotificationContextProvider.jsx";

export default function UserForm() {
  const navigate=useNavigate();
  let {id}=useParams();
  const [subprogram,setsubprogram]=useState({code: '',title: '',program: ''})
  const [errors,setErrors]=useState(null)
  const [loading,setLoading]=useState(false)
  const {setNotification}=NotificationStateContext()

  useEffect(() => {
    if (id) {
      setLoading(true);
      axiosClient.get(`/subprograms/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setsubprogram(data.data);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);

  const onSubmit = ev => {
    ev.preventDefault();
    const request = id
      ? axiosClient.put(`/subprograms/${subprogram.code}`,subprogram)
      : axiosClient.post('/subprograms',subprogram);

    request
      .then(() => {
        setNotification(id ? 'program was successfully updated' : 'program was successfully created');
        navigate('/programs');
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
      {id&&<h1>Update SubProgram: {subprogram.title}</h1>}
      {!id&&<h1>New SubProgram</h1>}
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
            <input value={subprogram.code} onChange={ev => setsubprogram({...subprogram, code: ev.target.value})} placeholder="Code"/>
            <input value={subprogram.title} onChange={ev => setsubprogram({...subprogram, title: ev.target.value})} placeholder="Title"/>
            <input value={subprogram.program} onChange={ev => setsubprogram({...subprogram, program: ev.target.value})} placeholder="Program Code"/>
            <button className="btn">Save</button>
          </form>
        )}
      </div>
    </>
  )
}