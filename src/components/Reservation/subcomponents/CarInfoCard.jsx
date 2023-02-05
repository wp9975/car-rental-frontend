import React from "react";
import {
  BiError,
  BiGasPump,
  BiBattery,
  BiCheckDouble,
  BiCar,
} from "react-icons/bi";

const CarInfoCard = (props) => {
  const {
    imgUrl,
    model,
    brand,
    category,
    type,
    fuel,
    fuelConsumption,
    quantity,
  } = props.carItem;
  return (
    <div className="flex flex-wrap mx-auto xl:w-4/5 rounded-lg border-2 p-2 max-w-screen-xl">
      <img
        src={imgUrl}
        className="object-cover object-center w-full rounded-md lg:w-1/2 lg:h-auto h-50"
        alt="car"
      />
      <div className="w-full py-3 mt-5 lg:w-1/2">
        <div className=" px-5">
          <div className="flex flex-col flex-1 gap-3">
            <div className="w-full bg-gray-200  pl-4 pb-2 rounded-2xl">
              <h1 className="my-2 text-3xl ">
                {brand} {model}
              </h1>
              <h2 className="text-md text-gray">{category}</h2>
            </div>
            <div className="w-full bg-gray-200 py-1 my-3 rounded-2xl">
             <p className="p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
          </div>

          <div className="flex gap-3 mb-0 items-center">
            <div className="w-32 h-12 bg-gray-200 rounded-full mx-auto flex justify-center items-center">
              <BiCar />
              {type}
            </div>

            <div className="w-32 h-12 bg-gray-200 rounded-full mx-auto flex justify-center items-center">
              <BiBattery />
              {fuel}
            </div>

            <div className="w-32 h-12 bg-gray-200 rounded-full mx-auto flex justify-center items-center">
              <BiGasPump />
              {fuelConsumption}
            </div>

            <div className="w-32 h-12 bg-gray-200 rounded-full mx-auto flex justify-center items-center">
              <BiCheckDouble />
              {quantity}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInfoCard;
