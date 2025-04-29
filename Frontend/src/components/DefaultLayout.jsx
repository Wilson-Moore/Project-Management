import {Link, Navigate, Outlet} from "react-router-dom";
import {UserStateContext} from "../contexts/UserContextProvider.jsx";
import axiosClient from "../axios-client.js";
import {useEffect} from "react";

export default function DefaultLayout() {
  const {user,token,setUser,setToken,notification}=UserStateContext();

  if (!token) {
    return <Navigate to="/login"/>
  }

  const onLogout=ev=>{
    ev.preventDefault()

    axiosClient.post('/logout')
      .then(()=>{
        setUser({})
        setToken(null)
      })
  }

  useEffect(()=>{
    axiosClient.get('/user')
      .then(({data})=>{
        setUser(data)
      })
  },[])

  return (
    <div id="defaultLayout">
      <aside>
        <h1>Dashboard</h1>
        <Link to="/wallets">Wallets</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/subprograms">SubPrograms</Link>
        <Link to="/actions">Actions</Link>
      </aside>
      <div className="content">
        <header>
          <div>
            Header
          </div>
          <div>
            {user.name}&nbsp;&nbsp;
            <a onClick={onLogout} className="btn-logout" href="#">Logout</a>
          </div>
        </header>
        <main>
          <Outlet/>
        </main>
        {notification &&
          <div className="notification">
            {notification}
          </div>
        }
      </div>
    </div>
  )
}