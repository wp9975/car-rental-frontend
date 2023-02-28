import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const PrevArrow = ({ className, style, onClick }) => (
    <div
      className={`${className} text-white bg-darkgray opacity-50 w-10 h-24 rounded-md flex items-center justify-center absolute -left-9 top-1/2 cursor-pointer transition duration-300 hover:bg-black hover:opacity-75`}
      
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
  
  export const NextArrow = ({ className, style, onClick }) => (
    <div
      className={`${className} text-white bg-darkgray opacity-50 w-10 h-24 rounded-md flex items-center justify-center absolute -right-9 top-1/2 cursor-pointer transition duration-300 hover:bg-black hover:opacity-75`}
      
      onClick={onClick}
    >
      <FaArrowRight/>
    </div>
  );