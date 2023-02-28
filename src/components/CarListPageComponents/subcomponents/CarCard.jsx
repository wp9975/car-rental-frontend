import React from "react";
import {
  BiCalendar,
  BiGasPump,
  BiBattery,
  BiCheckDouble,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const CarCard = (props) => {
  const {
    brand,
    model,
    imgUrl,
    category,
    type,
    fuel,
    fuelConsumption,
    quantity,
    carLink
  } = props.item;

  return (
    <Link        
    to={`/car-rental-frontend/reservation/${carLink}`}
  >
    <div style={{backgroundImage: `url(${imgUrl})`}} className={` bg-cover  md:m-2 w-full shadow-lg flex justify-center items-center rounded-lg`}>

      <div className=" z-20 w-full h-80 md:h-60 inset-0 bg-gradient-to-b from-black hover:from-black-400 to-transparent duration-300 hover:-translate-y-12 rounded-lg">
        <div className="m-3 text-white">
          <h1 className="text-md">{category}</h1>

          <h1 className="text-xl font-medium">
            {brand} {model}
          </h1>

          <div className="flex items-center gap-4 text-sm">
            <div className="inline-flex items-center shrink-0">
              <BiCalendar size={24} />
              <div className="mt-1 ml-1">
                <p className="text-lg text-white">{type}</p>
              </div>
            </div>
            <div className="inline-flex items-center shrink-0">
              <BiBattery size={24} />
              <div className="mt-1 ml-1">
                <p className="text-lg text-white">{fuel}</p>
              </div>
            </div>
            <div className="inline-flex items-center shrink-0">
              <BiGasPump size={24} />
              <div className="mt-1 ml-1">
                <p className="text-lg text-white">{fuelConsumption}</p>
              </div>
            </div>
            <div className="inline-flex items-center shrink-0">
              <BiCheckDouble size={24} />
              <div className="mt-1 ml-1">
                <p className="text-lg text-white">{quantity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CarCard;
