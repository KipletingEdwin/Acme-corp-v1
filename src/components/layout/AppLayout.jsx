

import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div>
      <div className="hidden  md:block">
        <Sidebar />
      </div>

      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

// <div>
//   <div className="hidden md:block  bg-slate-900 w-3xs ">
//     <Sidebar />
//   </div>

//   <main className="md:pl-60 pt-14 md:pt-0">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
//       <Outlet />
//     </div>
//   </main>
// </div>;
