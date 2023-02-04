import React, { useEffect, useState } from "react";

import CarsData from "../../assets/data/CarsData";

const Filters = (props) => {
  const [selectedCarType, setSelectedCarType] = useState("Wszystkie");
  const [selectedCarBrand, setSelectedCarBrand] = useState();
  const [selectedCarPriceCategory, setSelectedCarPriceCategory] =
    useState("Wszystkie");
  const carTypes = Array.from(
    new Set(CarsData.map((item, index) => item.type))
  );
  const PriceCategories = ["basic", "standard", "medium", "premium"];
  const carBrands = Array.from(
    new Set(CarsData.map((item, index) => item.brand))
  );

  useEffect(() => {
    filterCarsType(selectedCarType);
  }, [selectedCarType]);
  useEffect(() => {
    filterCarsBrands(selectedCarBrand);
  }, [selectedCarBrand]);
  useEffect(() => {
    filterCarsPriceCategory(selectedCarPriceCategory);
  }, [selectedCarPriceCategory]);

  const filterCarsType = (carType) => {
    let result;
    if (carType === "Wszystkie") {
      result = CarsData;
    } else {
      result = CarsData.filter((current) => {
        return current.type === carType;
      });
    }
    props.setData(result);
  };
  const filterCarsPriceCategory = (carPriceCategory) => {
    let result;
    if (carPriceCategory === "Wszystkie") {
      result = CarsData;
    } else {
      result = CarsData.filter((current) => {
        return current.category === carPriceCategory;
      });
    }
    props.setData(result);
  };
  const filterCarsBrands = (carBrand) => {
    let result;
    if (carBrand === "Wszystkie") {
      result = CarsData;
    } else {
      result = CarsData.filter((current) => {
        return current.brand === carBrand;
      });
    }
    props.setData(result);
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

  return (
    <div>
      <div>
        <div></div>
      </div>
      
      <div className="mx-auto flex flex-wrap items-center justify-center gap-1 max-w-screen-2xl">
        <div className='p-2 '>
          <label className="text-lg">Typ nadwozia
          <select className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-blue focus:border-blue" onChange={handleCarTypeChange}>
            <option defaultValue={"Wszystkie"}>Wszystkie</option>
            {carTypes.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          </label>
        </div>
        <div className='p-2 '>
          <label className="text-lg">Marka
          <select className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-blue focus:border-blue" onChange={handleCarBrandChange}>
            <option defaultValue={"Wszystkie"}>Wszystkie</option>
            {carBrands.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          </label>
        </div>
        <div className='p-2 '>
          <label className="text-lg">Kategoria cenowa
          <select className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-blue focus:border-blue" onChange={handleCarPriceCategoryChange}>
            <option defaultValue={"Wszystkie"}>Wszystkie</option>
            {PriceCategories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
