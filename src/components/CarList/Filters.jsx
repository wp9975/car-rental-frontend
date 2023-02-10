import React, { useEffect, useRef, useState } from "react";

import CarsData from "../../assets/data/CarsData";
import Cars from "./Cars";

const Filters = () => {
  const [data, setData] = useState(CarsData);
  const [sort, setSort] = useState(false);


  const [selectedCarType, setSelectedCarType] = useState("Wszystkie");
  const [selectedCarBrand, setSelectedCarBrand] = useState("Wszystkie");
  const [selectedCarPriceCategory, setSelectedCarPriceCategory] =
    useState("Wszystkie");
  const carTypes = Array.from(
    new Set(CarsData.map((item, index) => item.type))
  );
  const PriceCategories = Array.from(
    new Set(CarsData.map((item, index) => item.category))
  );
  const carBrands = Array.from(
    new Set(CarsData.map((item, index) => item.brand))
  );

  useEffect(() => {
    applyFilters();
  }, [selectedCarBrand, selectedCarPriceCategory, selectedCarType, sort]);

  useEffect(() => {
    document
      .getElementById("clearFiltersButton")
      .addEventListener("click", () => {
        setSelectedCarType("Wszystkie");
        setSelectedCarBrand("Wszystkie");
        setSelectedCarPriceCategory("Wszystkie");
      });
  });

  const applyFilters = () => {
    let updatedCarsData = CarsData;
    if (selectedCarType !== "Wszystkie") {
      updatedCarsData = updatedCarsData.filter((current) => {
        return current.type === selectedCarType;
      });
    }
    if (selectedCarBrand !== "Wszystkie") {
      updatedCarsData = updatedCarsData.filter((current) => {
        return current.brand === selectedCarBrand;
      });
    }
    if (selectedCarPriceCategory !== "Wszystkie") {
      updatedCarsData = updatedCarsData.filter((current) => {
        return current.category === selectedCarPriceCategory;
      });
    }
    setData(updatedCarsData);
  };

  const handleCarTypeChange = (event) => {
    setSelectedCarType(event.target.value);
  };
  const handleCarBrandChange = (event) => {
    setSelectedCarBrand(event.target.value);
  };
  const handleCarPriceCategoryChange = (event) => {
    setSelectedCarPriceCategory(event.target.value);
  };

  const handleSortData = (e) => {
    let sortByFuel = [];
    if (e.target.value === "fuelAsc") {
     sortByFuel = CarsData.sort((a, b) => (a.fuelConsumption > b.fuelConsumption ? 1 : -1));
    }
    else if((e.target.value === "fuelDesc")){
     sortByFuel = CarsData.sort((a, b) => (a.fuelConsumption < b.fuelConsumption ? 1 : -1));
    }
    else if(e.target.value === " "){
      sortByFuel = CarsData;
    }
    setSort(!sort);
    setData(sortByFuel);
  };

  
  console.log(data)
  return (
    <div>
      <div className=" py-3 border-b-2 mb-2">
        <div className="mx-auto flex flex-wrap items-center justify-center gap-1 max-w-screen-2xl">
          <div className="p-2 ">
            <label className="text-lg">
              Typ nadwozia
              <select
                className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-blue focus:border-blue focus:ring-2"
                onChange={handleCarTypeChange}
                value={selectedCarType}
              >
                <option defaultValue={"Wszystkie"}>Wszystkie</option>
                {carTypes.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="p-2 ">
            <label className="text-lg">
              Marka
              <select
                className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-blue focus:border-blue focus:ring-2"
                onChange={handleCarBrandChange}
                value={selectedCarBrand}
              >
                <option defaultValue={"Wszystkie"}>Wszystkie</option>
                {carBrands.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="p-2 ">
            <label className="text-lg">
              Kategoria cenowa
              <select
                className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-blue focus:border-blue focus:ring-2"
                onChange={handleCarPriceCategoryChange}
                value={selectedCarPriceCategory}
              >
                <option defaultValue={"Wszystkie"}>Wszystkie</option>
                {PriceCategories.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="p-2 mt-auto">
            <button
              id="clearFiltersButton"
              className="px-6 py-3 bg-blue rounded-lg text-white"
            >
              Wyczyść filtry
            </button>
          </div>
        </div>
      </div>
      <Cars
        data={data}
        handleSortData={handleSortData}
      />
    </div>
  );
};

export default Filters;
