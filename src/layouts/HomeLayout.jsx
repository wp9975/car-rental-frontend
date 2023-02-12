import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navigation/Navbar";

const HomeLayout = () => {
  return (
    <div className="bg-snow">
      <Navbar />     
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
