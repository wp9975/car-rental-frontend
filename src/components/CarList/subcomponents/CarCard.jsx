import React from "react";
import {
  BiCalendar,
  BiGasPump,
  BiBattery,
  BiCheckDouble,
} from "react-icons/bi";

const CarCard = (props) => {
  const {brand, model, imgUrl, category, type, fuel, fuelConsumption, quantity} = props.item;

  return (
    <div className=" hover:shadow-2xl  md:w-auto bg-white hover:shadow-blue rounded-lg p-4 shadow-sm shadow-silver border-2 m-2">
      <img
        className="h-56 w-full rounded-md object-cover"
        src={imgUrl}
        alt=""
      />
      <div className="mt-2">
      <dl>
      <div>
        <dt className="sr-only">Price</dt>

        <dd className="text-sm text-gray-500">{category}</dd>
      </div>

      <div>
        <dt className="sr-only">Address</dt>

        <dd className="font-medium">{brand} {model}</dd>
      </div>
    </dl>
        <div className="mt-3 flex items-center gap-4 text-sm">
          <div className="inline-flex shrink-0 items-center">
            <BiCalendar size={24}/>
            <div className="ml-1 mt-1">
              <p className="text-gray">{type}</p>
            </div>
          </div>
          <div className="inline-flex shrink-0 items-center">
            <BiBattery size={24}/>
            <div className="ml-1 mt-1">
              <p className="text-gray">{fuel}</p>
            </div>
          </div>
          <div className="inline-flex shrink-0 items-center">
            <BiGasPump size={24}/>
            <div className="ml-1 mt-1">
              <p className="text-gray">{fuelConsumption}</p>
            </div>
          </div>
          <div className="inline-flex shrink-0 items-center">
            <BiCheckDouble size={24}/>
            <div className="ml-1 mt-1">
              <p className="text-gray">{quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
