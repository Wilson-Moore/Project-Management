import OperationDetails from "../pages/Project/operation/OperationDetails";
import WalletDetails from "../pages/Project/wallet/WalletDetails";

export const BREADCRUMB_TEMPLATES = {
      actionDetails: [
      {path: "/", label: "Home", key: "home"},
      { 
            path: "/wallet/:walletId",
            // label: "Wallet", // Default/fallback 
            key: "walletName" 
      },
      { 
            path: "/program/:programId", 
            // label: "Programme", 
            key: "programName" 
      },
      { 
            path: "/subprogram/:subProgramId", 
            // label: "Sub-Programme", 
            key: "subProgramName" 
      },
      { 
            path: "/action/:actionId",
            // label: "Action", 
            key: "actionName" 
      } // No path = current page
],

      // Add more breadcrumb templates as needed
      walletDetails: [
            {path: "/", label: "Home", key: "home"},
            {
                  path: "/wallet/:walletId",
                  // label: "Wallet", // Default/fallback
                  key: "walletName"
            }
      ],

      programDetails: [
            {path: "/", label: "Home", key: "home"},
            { 
                  path: "/wallet/:walletId",
                  // label: "Wallet", // Default/fallback 
                  key: "walletName" 
            },
            { 
                  path: "/program/:programId", 
                  // label: "Programme", 
                  key: "programName" 
            },
      ],

      subprogramDetails: [
            {path: "/", label: "Home", key: "home"},
            { 
                  path: "/wallet/:walletId",
                  // label: "Wallet", // Default/fallback 
                  key: "walletName" 
            },
            { 
                  path: "/program/:programId", 
                  // label: "Programme", 
                  key: "programName" 
            },
            { 
                  path: "/subprogram/:subProgramId", 
                  // label: "Sub-Programme", 
                  key: "subProgramName" 
            },
      ],

      operationDetails: [
            {path: "/", label: "Home", key: "home"},
            { 
                  path: "/wallet/:walletId",
                  // label: "Wallet", // Default/fallback 
                  key: "walletName" 
            },
            { 
                  path: "/program/:programId", 
                  // label: "Programme", 
                  key: "programName" 
            },
            { 
                  path: "/subprogram/:subProgramId", 
                  // label: "Sub-Programme", 
                  key: "subProgramName" 
            },
            { 
                  path: "/action/:actionId",
                  // label: "Action", 
                  key: "actionName" 
            },
            { 
                  path: "/operation/:operationId",
                  // label: "Operation",
                  key: "operationName" 
            },

      ],

      projectDetails: [
            {path: "/", label: "Home", key: "home"},
            { 
                  path: "/wallet/:walletId",
                  // label: "Wallet", // Default/fallback 
                  key: "walletName" 
            },
            { 
                  path: "/program/:programId", 
                  // label: "Programme", 
                  key: "programName" 
            },
            { 
                  path: "/subprogram/:subProgramId", 
                  // label: "Sub-Programme", 
                  key: "subProgramName" 
            },
            { 
                  path: "/action/:actionId",
                  // label: "Action", 
                  key: "actionName" 
            },
            { 
                  path: "/operation/:operationId",
                  // label: "Operation",
                  key: "operationName" 
            },
            {
                  path: "/project/:projectId",
                  // label: "Project",
                  key: "projectName" 
            }
      ],

      consultationDetails : [
            {path: "/", label: "Home", key: "home"},
            { 
                  path: "/wallet/:walletId",
                  // label: "Wallet", // Default/fallback 
                  key: "walletName" 
            },
            { 
                  path: "/program/:programId", 
                  // label: "Programme", 
                  key: "programName" 
            },
            { 
                  path: "/subprogram/:subProgramId", 
                  // label: "Sub-Programme", 
                  key: "subProgramName" 
            },
            { 
                  path: "/action/:actionId",
                  // label: "Action", 
                  key: "actionName" 
            },
            { 
                  path: "/operation/:operationId",
                  // label: "Operation",
                  key: "operationName" 
            },
            {
                  path: "/consultation/:consultationId",
                  // label: "Project",
                  key: "consultationName" 
            }
      ],

      noticeDetails : [
            {path: "/", label: "Home", key: "home"},
            { 
                  path: "/wallet/:walletId",
                  // label: "Wallet", // Default/fallback 
                  key: "walletName" 
            },
            { 
                  path: "/program/:programId", 
                  // label: "Programme", 
                  key: "programName" 
            },
            { 
                  path: "/subprogram/:subProgramId", 
                  // label: "Sub-Programme", 
                  key: "subProgramName" 
            },
            { 
                  path: "/action/:actionId",
                  // label: "Action", 
                  key: "actionName" 
            },
            { 
                  path: "/operation/:operationId",
                  // label: "Operation",
                  key: "operationName" 
            },
            {
                  path: "/notice/:noticeId",
                  // label: "Project",
                  key: "noticeName" 
            }
      ]
}