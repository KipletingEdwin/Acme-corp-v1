

import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div>
      <div className="hidden  md:block">
        <Sidebar />
      </div>

      <main >
        <div className="text-white" >
          <Outlet />
        </div>
      </main>
    </div>
  );
};


