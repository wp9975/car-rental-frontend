import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const scrollTop = () => {
  window.scrollTo({
    top: 0,
  });
};

const ScrollToTop = () => {
  return (
    <div
      className="p-1 text-white border-white rounded-md bg-blackCoffee hover:border-2"
      onClick={scrollTop}
    >
      <AiOutlineArrowUp size={32} />
    </div>
  );
};

export default ScrollToTop;
