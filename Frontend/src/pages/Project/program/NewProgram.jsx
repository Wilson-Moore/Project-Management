import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

export default function NewProgram() {
      const navigate=useNavigate();
      let {programid}=useParams();
      const [program,setprogram]=useState({code: '',title: '',wallet_code: ''})
      const [errors,setErrors]=useState(null)
      const [loading,setLoading]=useState(false)
      const {setNotification}=NotificationStateContext()

      useEffect(() => {
      if (programid) {
            setLoading(true);
            axiosClient.get(`/programs/${programid}`)
            .then(({ data }) => {
            setLoading(false);
            setprogram(data.data);
            })
            .catch(() => {
            setLoading(false);
            });
      }
      }, [programid]);

      const onSubmit = ev => {
      ev.preventDefault();
      const request = programid
            ? axiosClient.put(`/programs/${program.code}`,program)
            : axiosClient.post('/programs',program);

      request
            .then(() => {
            setNotification(programid ? 'program was successfully updated' : 'program was successfully created');
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
            {programid&&<h1>Update Program: {program.title}</h1>}
            {!programid&&<h1>New Program</h1>}
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
                  <input value={program.code} onChange={ev => setprogram({...program, code: ev.target.value})} placeholder="Code"/>
                  <input value={program.title} onChange={ev => setprogram({...program, title: ev.target.value})} placeholder="Title"/>
                  <input value={program.wallet_code} onChange={ev => setprogram({...program, wallet_code: ev.target.value})} placeholder="Wallet Code"/>
                  <button className="btn">Save</button>
            </form>
            )}
            </div>
      </>
      )
}