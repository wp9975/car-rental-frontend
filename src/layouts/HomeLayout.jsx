import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navigation/Navbar";

const HomeLayout = () => {
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  // const handleThemeToggleButton = () => {
  //   setTheme(theme === 'dark' ? 'light' : 'dark')
  // }

  return <div>
    <Navbar/>
  <div>
    <Outlet/>
  </div>
    <Footer/>
  </div>
};

export default HomeLayout;
