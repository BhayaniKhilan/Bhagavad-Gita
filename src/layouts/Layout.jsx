import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      {/* Outlet bas ek placeholder hai jo page ko rander karta hai */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
