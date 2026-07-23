
import {
  Activity,
  Building2,
  CreditCardIcon,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  Webhook,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Overview", path: "/", icon: LayoutDashboard },
  { label: "Subscriptions", path: "/subscriptions", icon: CreditCardIcon },
  { label: "API Usage", path: "/api-usage", icon: Activity },
  { label: "Webhooks", path: "/webhooks", icon: Webhook },
  { label: "Settings", path: "/settings", icon: Settings },
  { label: "Invoices", path: "/invoices", icon: FileText },
];

const organizations = [
  {label: "Acme Corp", icon: Building2},
  {label: "TechFlow Inc", icon: Building2},
  {label: "StartupLab", icon: Building2},
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 bottom-0 z-30 p-3 w-60 bg-sidebar border-r border-sidebar-border min-h-screen flex flex-col justify-between">
      <div>
        <div>
          

        </div>
        <nav className="flex flex-col py-3 space-y-0.5 overflow-y-auto   ">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-500 font-bold bg-slate-800"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`
              }
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="p-3 border-t border-sidebar-border ">
        <button className="flex items-center gap-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors w-full">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};



// <div className="p-4 border-b border-sidebar-border">
//   {/* <DropdownMenu>
//     <DropdownMenuTrigger className="w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-sidebar-accent transition-colors">
//       <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
//         <Building2 className="w-4 h-4 text-primary-foreground" />
//       </div>
//       <div className="flex-1 text-left min-w-0">
//         <p className="text-sm font-semibold text-sidebar-foreground truncate">
//           {currentOrg?.name || "Select Org"}
//         </p>
//         <p className="text-xs text-muted-foreground capitalize">
//           {currentOrg?.plan || "free"} plan
//         </p>
//       </div>
//       <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
//     </DropdownMenuTrigger>
//     <DropdownMenuContent align="start" className="w-56">
//       {organizations.map((org) => (
//         <DropdownMenuItem
//           key={org.id}
//           onClick={() => onSwitchOrg(org)}
//           className={org.id === currentOrg?.id ? "bg-accent" : ""}
//         >
//           <Building2 className="w-4 h-4 mr-2" />
//           <span className="truncate">{org.name}</span>
//         </DropdownMenuItem>
//       ))}
//     </DropdownMenuContent>
//   </DropdownMenu> */}
// </div>
