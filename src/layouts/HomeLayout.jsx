import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/common/Footer/Footer";
import Navbar from "../components/common/Navigation/Navbar";

const HomeLayout = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-gradient-to-b from-gray-500 bg-cover to-snow bg-fixed bg-no-repeat">
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
