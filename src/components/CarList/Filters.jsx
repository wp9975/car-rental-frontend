import React from "react";

import CarsData from "../../assets/data/CarsData";
import FilterSelectList from "./subcomponents/FilterSelectList";

const Filters = (props) => {
  const filterCarsType = (carType) => {
    const result = CarsData.filter((current) => {
      return current.type === carType;
    });
    props.setData(result);
  };

  return (
    <div>
      <div>
        <div>

        </div>
      </div>
      <div className="mx-auto flex items-center gap-1 max-w-screen-2xl">
        <button
          type="button"
          className="w-full hover:shadow-blue shadow-md px-4 py-2 text-base font-medium text-black bg-white border-2 rounded-md hover:bg-gray-100"
          onClick={() => filterCarsType("SUV")}
        >
          SUV
        </button>
        <button
          type="button"
          className="w-full hover:shadow-blue shadow-md px-4 py-2 text-base font-medium text-black bg-white border-2 rounded-md hover:bg-gray-100"
          onClick={() => filterCarsType("Sedan")}
        >
          Sedan
        </button>
        <button
          type="button"
          className="w-full hover:shadow-blue shadow-md px-4 py-2 text-base font-medium text-black bg-white border-2  rounded-md hover:bg-gray-100"
        >
          Compact
        </button>
        <button
          type="button"
          className="w-full hover:shadow-blue shadow-md px-4 py-2 text-base font-medium text-black bg-white border-2  rounded-md hover:bg-gray-100"
        >
          Coupe
        </button>
        <button
          type="button"
          className="w-full hover:shadow-blue shadow-md px-4 py-2 text-base font-medium text-black bg-white border-2 rounded-md hover:bg-gray-100"
        >
          Inne
        </button>
      </div>
    </div>
  );
};

export default Filters;
