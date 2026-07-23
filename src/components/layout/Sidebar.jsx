
import {
  Activity,
  CreditCardIcon,
  FileText,
  LayoutDashboard,
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

export const Sidebar = () => {
  return (
    <aside className="w-60">
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
    </aside>
  );
};
