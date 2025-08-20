import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-white flex flex-col justify-center">
      <Navbar />
      <div className="pt-20 px-4"> {/* padding so navbar doesn’t overlap content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

