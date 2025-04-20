import {createBrowserRouter, Navigate} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import NotFound from "./views/NotFound";
import Signup from "./views/Auth/Signup";
import Login from "./views/Auth/Login";
import Wallets from "./views/Wallet/Wallets";
import WalletForm from "./views/Wallet/WalletForm";
import Programs from "./views/Program/Programs";
import ProgramForm from "./views/Program/ProgramForm";
import SubPrograms from "./views/SubProgram/SubPrograms";
import SubProgramForm from "./views/SubProgram/SubProgramForm";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/wallets"/>
      },
      {
        path: '/wallets',
        element: <Wallets/>
      },
      {
        path: '/wallets/new',
        element: <WalletForm/>
      },
      {
        path: '/wallets/:id',
        element: <WalletForm/>
      },
      {
        path: '/programs',
        element: <Programs/>
      },
      {
        path: '/programs/new',
        element: <ProgramForm/>
      },
      {
        path: '/programs/:id',
        element: <ProgramForm/>
      },
      {
        path: '/subprograms',
        element: <SubPrograms/>
      },
      {
        path: '/subprograms/new',
        element: <SubProgramForm/>
      },
      {
        path: '/subprograms/:id',
        element: <SubProgramForm/>
      },
    ]
  },
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
])

export default router;