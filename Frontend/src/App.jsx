import ProjectLayout from './layouts/ProjectLayout.jsx'
import './assets/styles/Button.css'
import {UserStateContext} from './contexts/UserContextProvider.jsx'
import {Link, Navigate, Outlet} from "react-router-dom";

function App() {
      const {user,token,setUser,setToken,notification}=UserStateContext();
      if (!token) {
            return <Navigate to="/login"/>
      }
      
      return (
            <ProjectLayout />
      );
}

export default App