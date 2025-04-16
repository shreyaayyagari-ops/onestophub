import React, { useState } from "react";
import Sidebar from "../components/sideBar";
import Dashboard from "./dashboard"; // or use <Outlet /> if using React Router layout

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="layout d-flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="flex-grow-1 p-3">
        <Dashboard />
      </main>
    </div>
  );
};

export default Layout;
