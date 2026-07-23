
import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className=" min-h-screen flex flex-row">
      <div>
        <Sidebar />
      </div>

      <main >
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};


