import React from "react";
import Slider, { SlickArrow } from "react-slick";
import EmployeesData from "../../assets/data/EmployeesData";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { PrevArrow, NextArrow } from './subcomponents/SlickArows';
import ClickToCopy from "../common/UI/ClickToCopy";

const TeamSection = () => {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow:3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },


    ],
  };
  return (
    <div className="">
      <h2 className="">TeamSection</h2>
      <div className="mb-10">
        <Slider {...settings} className="mx-auto my-4 w-4/5 max-w-screen-3xl">
          {EmployeesData.map((item, index) => (
            <div key={index} className="py-5 px-2 ">
            <div className="bg-white block rounded-lg shadow-lg">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img
                  src={item.photo}
                  className="w-full rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-1">{item.name}</h5>
                <p className="text-gray-500 mb-4">{item.position}</p>
                <ul className="list-inside flex flex-col justify-center items-center space-y-3">
                  <li className="px-2">
                    <ClickToCopy text={item.email}/>
                  </li>
                  <li className="px-2">
                    <ClickToCopy text={item.phone}/>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamSection;
