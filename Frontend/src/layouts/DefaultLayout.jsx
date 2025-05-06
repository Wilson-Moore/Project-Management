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
      </aside>
      <div className="content">
        <header>
          {/* <div>
            {user.name}&nbsp;&nbsp;
            <a onClick={onLogout} className="btn-logout" href="#">Logout</a>
          </div> */}
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