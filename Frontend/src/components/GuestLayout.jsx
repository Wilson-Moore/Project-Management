import {Navigate, Outlet} from "react-router-dom";
import { UserStateContext } from "../contexts/UserContextProvider";

export default function GuestLayout() {
  const {token}=UserStateContext();

  if (token) {
    return <Navigate to="/"/>;
  }

  return (
    <div id="guestLayout">
      <Outlet />
    </div>
  );
}