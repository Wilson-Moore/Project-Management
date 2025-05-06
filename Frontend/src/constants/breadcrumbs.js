import OperationDetails from "../pages/Project/operation/OperationDetails";
import WalletDetails from "../pages/Project/wallet/WalletDetails";

export const BREADCRUMB_TEMPLATES = {
      actionDetails: [
      {path: "/", label: "Home", key: "home"},
      // { 
      //       path: "/projects/active/wallet/:walletId",
      //       // label: "Wallet", // Default/fallback 
      //       key: "walletName" 
      // },
      // { 
      //       path: "/projects/active/wallet/:walletId/program/:programId", 
      //       // label: "Programme", 
      //       key: "programName" 
      // },
      // { 
      //       path: "/projects/active/wallet/:walletId/program/:programId/subprogram/:subProgramId", 
      //       // label: "Sub-Programme", 
      //       key: "subProgramName" 
      // },
      { 
            path: "/action/:actionId",
            // label: "Action", 
            key: "actionId" 
      } // No path = current page
],

      // Add more breadcrumb templates as needed
      walletDetails: [
            {path: "/", label: "Home", key: "home"},
            {
                  path: "/projects/active/wallet/:walletId",
                  // label: "Wallet", // Default/fallback
                  key: "walletName"
            }
      ],

      programDetails: [
            {path: "/", label: "Home", key: "home"},
            {
                  path: "/projects/active/wallet/:walletId",
                  // label: "Wallet", // Default/fallback
                  key: "walletName"
            },
            {
                  path: "/projects/active/wallet/:walletId/program/:programId", 
                  // label: "Programme", 
                  key: "programName" 
            }
      ],

      subprogramDetails: [
            {path: "/", label: "Home", key: "home"},
            {
                  path: "/projects/active/wallet/:walletId",
                  // label: "Wallet", // Default/fallback
                  key: "walletName"
            },
            {
                  path: "/projects/active/wallet/:walletId/program/:programId", 
                  // label: "Programme", 
                  key: "programName" 
            },
            {
                  path: "/projects/active/wallet/:walletId/program/:programId/subprogram/:subProgramId", 
                  // label: "Sub-Programme", 
                  key: "subProgramName" 
            }
      ],

      operationDetails: [
            {path: "/", label: "Home", key: "home"},
            // { path: "/projects/active", label: "Active Projects", key: "activeProjects" },
            // { 
            //       path: "/projects/active/wallet/:walletId",
            //       // label: "Wallet", // Default/fallback 
            //       key: "walletName" 
            // },
            // { 
            //       path: "/projects/active/wallet/:walletId/program/:programId", 
            //       // label: "Programme", 
            //       key: "programName" 
            // },
            // { 
            //       path: "/projects/active/wallet/:walletId/program/:programId/subprogram/:subProgramId", 
            //       // label: "Sub-Programme", 
            //       key: "subProgramName" 
            // },
            // { 
            //       path: "/projects/active/wallet/:walletId/program/:programId/subprogram/:subProgramId/action/:actionId",
            //       // label: "Action", 
            //       key: "actionName" 
            // },
            { 
                  path: "/operation/:operationId",
                  // label: "Operation",
                  key: "operationName" 
            },

      ],

      projectDetails: [
            {path: "/", label: "Home", key: "home"},
            { 
                  path: "/projects/active/wallet/:walletId",
                  // label: "Wallet", // Default/fallback 
                  key: "walletName" 
            },
            { 
                  path: "/projects/active/wallet/:walletId/program/:programId", 
                  // label: "Programme", 
                  key: "programName" 
            },
            { 
                  path: "/projects/active/wallet/:walletId/program/:programId/subprogram/:subProgramId", 
                  // label: "Sub-Programme", 
                  key: "subProgramName" 
            },
            { 
                  path: "/projects/active/wallet/:walletId/program/:programId/subprogram/:subProgramId/action/:actionId",
                  // label: "Action", 
                  key: "actionName" 
            },
            { 
                  path: "/projects/active/wallet/:walletId/program/:programId/subprogram/:subProgramId/action/:actionId/operation/:operationId",
                  // label: "Operation",
                  key: "operationName" 
            },
            {
                  path: "/projects/active/wallet/:walletId/program/:programId/subprogram/:subProgramId/action/:actionId/operation/:operationId/project/:projectId",
                  // label: "Project",
                  key: "projectName" 
            }
      ]
}