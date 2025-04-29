import WalletDetails from "../pages/Project/wallet/WalletDetails";

export const BREADCRUMB_TEMPLATES = {
      actionDetails: [
      { path: "/projects", label: "Projects", key: "projects" },
      { path: "/projects/active", label: "Active Projects", key: "activeProjects" },
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
            path: "/projects/active/wallet/:walletId/program/:programId/subProgram/:subProgramId", 
            // label: "Sub-Programme", 
            key: "subProgramName" 
      },
      { 
            path: "/projects/active/wallet/:walletId/program/:programId/subProgram/:subProgramId/action/:actionId",
            // label: "Action", 
            key: "actionId" 
      } // No path = current page
      ],

      // Add more breadcrumb templates as needed
      walletDetails: [
            {path: "/projects", label: "Projects", key: "projects"},
            {path: "/projects/active", label: "Active Projects", key: "activeProjects"},
            {
                  path: "/projects/active/wallet/:walletId",
                  // label: "Wallet", // Default/fallback
                  key: "walletName"
            }
      ],

      programDetails: [
            {path: "/projects", label: "Projects", key: "projects"},
            {path: "/projects/active", label: "Active Projects", key: "activeProjects"},
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
            {path: "/projects", label: "Projects", key: "projects"},
            {path: "/projects/active", label: "Active Projects", key: "activeProjects"},
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
}