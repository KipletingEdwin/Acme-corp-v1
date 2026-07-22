
import { CreditCard, FileText } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: "Subscriptions", path: "/subscriptions", icon: CreditCard },
  { label: "Invoices", path: "/invoices", icon: FileText },

]

export const Sidebar = () => {

  const[isActive, setIsActive] = useState(false);
  
  return (
    <aside className='fixed left-0 top-0 bottom-0 w-60 flex flex-col z-3'>
      <nav className='flex-1  py-3 space-y-0.5 overflow-y-auto'>
        {
          navItems.map((item) => {
            return (
              <Link
              key={item.path}
              to={item.path}
              >
                <item.icon className='w-4 h-4 shrink-0' />
              {item.label}
              </Link>
            )
          })
        }

      </nav>
    </aside>

  )
}


//  <aside className="fixed left-0 top-0 bottom-0 w-60 bg-sidebar border-r border-sidebar-border flex flex-col z-30">
//         <nav className="flex-1 py-3 px-3 space-y-0.5 overflow-y-auto">
//         {navItems.map((item) => {
//           const isActive = location.pathname === item.path;
//           return (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                 isActive
//                   ? "bg-sidebar-accent text-primary"
//                   : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
//               }`}
//             >
//               <item.icon className="w-4 h-4 shrink-0" />
//               {item.label}
//             </Link>
//           );
//         })}
//       </nav>

// const navItems = [
//   { label: "Overview", path: "/", icon: LayoutDashboard },
//   { label: "Subscriptions", path: "/subscriptions", icon: CreditCard },
//   { label: "Invoices", path: "/invoices", icon: FileText },
//   { label: "API Usage", path: "/api-usage", icon: Activity },
//   { label: "Webhooks", path: "/webhooks", icon: Webhook },
//   { label: "Settings", path: "/settings", icon: Settings },
// ];