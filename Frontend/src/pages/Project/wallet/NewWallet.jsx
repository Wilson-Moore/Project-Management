import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../../axios-client.js";
import {NotificationStateContext} from "../../../contexts/NotificationContextProvider.jsx";

export default function NewWallet() {
  const navigate=useNavigate();
  let {walletId}=useParams();
  const [wallet,setwallet]=useState({code: '',title: ''})
  const [errors,setErrors]=useState(null)
  const [loading,setLoading]=useState(false)
  const {setNotification}=NotificationStateContext()

  useEffect(() => {
    if (walletId) {
      setLoading(true);
      axiosClient.get(`/wallets/${walletId}`)
        .then(({ data }) => {
          setLoading(false);
          setwallet(data.data);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [walletId]);

  const onSubmit = ev => {
    ev.preventDefault();
    const request = walletId
      ? axiosClient.put(`/wallets/${wallet.code}`,wallet)
      : axiosClient.post('/wallets',wallet);

    request
      .then(() => {
        setNotification(walletId ? 'Wallet was successfully updated' : 'Wallet was successfully created');
        navigate('/wallets');
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
      {walletId&&<h1>Update Wallet: {wallet.title}</h1>}
      {!walletId&&<h1>New Wallet</h1>}
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
            <input value={wallet.code} onChange={ev => setwallet({...wallet, code: ev.target.value})} placeholder="Code"/>
            <input value={wallet.title} onChange={ev => setwallet({...wallet, title: ev.target.value})} placeholder="Title"/>
            <button className="btn">Save</button>
          </form>
        )}
      </div>
    </>
  )
}