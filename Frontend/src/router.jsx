import {createBrowserRouter, Navigate} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import GuestLayout from "./layouts/GuestLayout";
import Signup from "./pages/Auth/Signup.jsx";
import Login from "./pages/Auth/Login.jsx";
import ActionDetails from "./pages/Project/action/ActionDetails.jsx";
import WalletDetails from "./pages/Project/wallet/WalletDetails.jsx";
import ProgramDetails from "./pages/Project/program/ProgramDetails.jsx";
import SubProgramDetails from "./pages/Project/subProgram/SubProgramDetails.jsx";
import AllWallets from "./pages/Project/wallet/Wallets.jsx";
import AllPrograms from "./pages/Project/program/Programs.jsx";

const router = createBrowserRouter([
{
      path: '/',
      element: <DefaultLayout/>,
      children: [
      {
            path: '/',
            element: <Navigate to="/wallets" replace /> // Or your default protected route
      },
      {
            path: '/action',
            element: <ActionDetails/>,
      },
      {
            path: '/projects/active/wallet/',
            element: <Navigate to="/wallets" replace />,
      },
      {
            path: '/wallets',
            element: <AllWallets/>,
      },
      {
            path: '/projects/active/wallet/:walletId',
            element: <WalletDetails />,
      },
      {
            path: '/projects/active/wallet/:walletId/program',
            element: <Navigate to="/programs" replace />,
      },
      {
            path: '/programs',
            element: <AllPrograms/>,
      },
      {
            path: '/projects/active/wallet/:walletId/program/:programId',
            element: <ProgramDetails/>,
      },
      // // {
      // //       path: '/projects/active/wallet/:walletId/program/:programId/subprogram',
      // //       element: <SubPrograms/>,
      // // },
      {
            path: '/projects/active/wallet/:walletId/program/:programId/subprogram/:subprogramId',
            element: <SubProgramDetails/>,
      },
      // // {
      // //       path: '/projects/active/wallet/:walletId/program/:programId/subprogram/:subprogramId/action',
      // //       element: <ActionDetails/>,
      // // },
      // // {
      // //       path: '/projects/active/wallet/:walletId/program/:programId/subprogram/:subprogramId/action/:actionId',
      // //       element: <ActionDetails/>,
      // // },
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
      element: <h1>Not Found</h1>,
},
{
      path: "/error",
      element: <h1>Not Found</h1>,
},
])

export default router;