import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex max-h-full h-full">
      {/* Sidebar visible only on large screens */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col">
        <Navbar />
        <main className="flex-1 p-4 max-h-full ">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
