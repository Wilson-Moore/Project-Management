import {createBrowserRouter, Navigate} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import GuestLayout from "./layouts/GuestLayout";
import Signup from "./pages/Auth/Signup.jsx";
import Login from "./pages/Auth/Login.jsx";
import ActionDetails from "./pages/Project/action/ActionDetails.jsx";
import WalletDetails from "./pages/Project/wallet/WalletDetails.jsx";
import ProgramDetails from "./pages/Project/program/ProgramDetails.jsx";
import SubProgramDetails from "./pages/Project/subProgram/SubProgramDetails.jsx";
import OperationDetails from "./pages/Project/operation/OperationDetails.jsx";
import ProjectDetails from "./pages/Project/proj/ProjectDetails.jsx";
import AllWallets from "./pages/Project/wallet/Wallets.jsx";
import AllPrograms from "./pages/Project/program/Programs.jsx";
import AllSubPrograms from "./pages/Project/subProgram/SubPrograms.jsx";
import AllOperations from "./pages/Project/operation/Operations.jsx";
import AllActions from "./pages/Project/action/Actions.jsx";
import AllProjects from "./pages/Project/proj/Projects.jsx";
import NewWallet from "./pages/Project/wallet/NewWallet.jsx";
import NewProgram from "./pages/Project/program/NewProgram.jsx";
import NewSubProgram from "./pages/Project/subProgram/NewSubProgram.jsx";
import NewAction from "./pages/Project/action/NewAction.jsx";
import NewOperation from "./pages/Project/operation/NewOperation.jsx";
import NewProject from "./pages/Project/proj/NewProject.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
{
      path: '/',
      element: <DefaultLayout/>,
      children: [
      {
            path: '/',
            element: <Dashboard /> // Changed to render the Dashboard component
      },
      {
            path: '/action/:actionId',
            element: <ActionDetails/>,
      },
      {
            path: '/wallet/',
            element: <Navigate to="/wallets" replace />,
      },
      {
            path: '/wallets',
            element: <AllWallets/>,
      },
      {
            path: '/wallet/:walletId',
            element: <WalletDetails />,
      },
      {
            path: '/program',
            element: <Navigate to="/programs" replace />,
      },
      {
            path: '/programs',
            element: <AllPrograms/>,
      },
      {
            path: '/program/:programId',
            element: <ProgramDetails/>,
      },
      {
            path: '/subprogram',
            element: <Navigate to="/subprograms" replace />,
      },
      {
            path: '/subprograms',
            element: <AllSubPrograms/>,
      },
      {
            path: '/actions',
            element: <AllActions/>,
      },
      {
            path: '/subprogram/:subprogramId',
            element: <SubProgramDetails/>,
      },
      {
            path: '/operation/:operationId',
            element: <OperationDetails/>,
      },
      {
            path: '/operation',
            element: <Navigate to="/operations" replace />,
      },
      {
            path: '/operations',
            element: <AllOperations/>,
      },
      {
            path: '/project/:projectId',
            element: <ProjectDetails/>,
      },
      {
            path: '/project',
            element: <Navigate to="/projects"/>,
      },
      {
            path: '/projects',
            element: <AllProjects/>,
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
      element: <h1>Not Found</h1>,
},
{
      path: "/error",
      element: <h1>Not Found</h1>,
},
])

export default router;