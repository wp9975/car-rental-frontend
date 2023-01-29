import React from "react";
import SocialMedia from "./SocialMedia";
import ScrollToTop from "./ScrollToTop";




const Footer = () => {
  return (
    <footer className="text-center bg-darkgray">
      <div className="flex flex-col md:flex-row md:px-20 items-center justify-between m-auto">
        <SocialMedia />
        <div className="p-3 text-white">
        Copyright © 2023. All rights reserved.{" "}
        <a
          href="/"
          className="text-lg font-medium underline cursor-pointer underline-offset-4 hover:font-semibold"
        >
          Privacy Policy
        </a>
      </div>
        <ScrollToTop/>
      </div>

    </footer>
  );
};

export default Footer;
