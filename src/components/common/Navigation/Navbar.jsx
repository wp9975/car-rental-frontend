import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import LinkNav from "./LinkNav";
import { navigationLinks } from "./navigationLinks";


const Navbar = () => {
  const [expandNavbarToggle, setExpandNavbarToggle] = useState(false);
  const [navBackground, setNavBackground] = useState("transparent");

  const stylesLink =
    " transition-all duration-500 ease-in px-16 py-4 text-2xl  md:pt-4 md:border-t-2 border-slate hover:border-white md:text-lg md:px-6 md:py-2 text-white bg-darkgray md:bg-opacity-0  rounded-xl md:rounded-none";
  const stylesLinkActive =
    " transition-all duration-500 ease-in px-16 py-4 text-2xl  md:border-t-2 border-white md:text-lg md:px-6 md:py-2 md:text-white bg-white md:bg-opacity-0  text-blackCoffee underline underline-offset-2 rounded-xl md:rounded-none";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 0) {
        setNavBackground("#433e3f");
      } else {
        setNavBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <header
      className={`navbar fixed w-screen  z-50 top-0 left-0 transition-all duration-500 ease-in`}
      style={{ backgroundColor: navBackground }}
    >
      <div className=" mx-auto max-w-screen-xl">
        <div className="flex items-center justify-between py-4 md:px-10  ">
          <div className="text-white border-2 rounded-md border-white cursor-pointer font-bold mx-4">
            <h1 className="text-xl px-2 py-1">CarRentalio</h1>
          </div>

          <nav
            className={`absolute bg-gray md:bg-opacity-0 py-12 text-white px-5 md:py-0 flex flex-col md:flex-row md:static md:z-auto z-[-1] w-full md:w-auto items-center gap-7 text-lg ${
              expandNavbarToggle ? "top-20" : "top-[-500px]"
            } transition-all duration-500 ease-in `}
          >
            {navigationLinks.map((item, index) => (
              <div key={index} className="pt-3 whitespace-nowrap">
                <LinkNav
                  label={item.name}
                  clicked={() => setExpandNavbarToggle(false)}
                  classes={({ isActive }) =>
                    isActive ? stylesLinkActive : stylesLink
                  }
                  toPath={item.path}
                />
              </div>
            ))}
          </nav>

          <div className="block md:hidden">
            <button
              className="bg-white mx-4 rounded-xl p-4 transition hover:scale-125"
              onClick={() => setExpandNavbarToggle(!expandNavbarToggle)}
            >
              {expandNavbarToggle ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
