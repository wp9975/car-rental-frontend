import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer/Footer";
import Navbar from "../components/common/Navigation/Navbar";

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
