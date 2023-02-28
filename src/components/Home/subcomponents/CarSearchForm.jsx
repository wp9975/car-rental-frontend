import React, { useState } from "react";

const CarSearchForm = () => {
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedPriceRange, setSelectedPriceRange] = useState([70, 250]);
    const brands = ["Brand A", "Brand B", "Brand C", "Brand D", "Brand E"];
  
    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
      };
    
      const handleMinPriceRangeChange = (event) => {
        setSelectedPriceRange([event.target.value]);
      };
      const handleMaxPriceRangeChange = (event) => {
        setSelectedPriceRange([event.target.value]);
      };

      const handleSearch = () => {
        console.log(selectedBrand, selectedPriceRange);
      }

  return (
    <form className="bg-white bg-opacity-60 p-4 flex flex-col  justify-center items-center  overflow-hidden rounded-lg">
    <div className="flex-grow w-full  p-2">
      <label htmlFor="carBrand" className="block text-gray-700 font-bold">
        Marka samochodu
      </label>
      <div className="relative">
        <select
          id="carBrand"
          name="carBrand"
          value={selectedBrand}
          onChange={handleBrandChange}
          className="block appearance-none w-full  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Wybierz markę</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M2.5 10a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm13.636 2.5a9 9 0 11-11.27 0 5.5 5.5 0 019.076 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
    <div className="flex-grow w-full p-2">
      <label htmlFor="priceRange" className="block text-gray-700 font-bold">
        Minimalna cena za dzień wynajmu
      </label>
      <div className="relative">
        <input
          type="range"
          min="70"
          max="250"
          step="1"
          id="priceRange"
          name="priceRange"
          value={selectedPriceRange[0]}
          onChange={handleMinPriceRangeChange}
          className="block cursor-pointer h-10   appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-20 rounded shadow leading-tight focus:outline-none focus:shadow-outline hover:border-2 focus:border-blue"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <span>{selectedPriceRange[0]} PLN</span>
          </div>
      </div>
      <label htmlFor="priceRange" className="block text-gray-700 font-bold">
        Maksymalna cena za dzień wynajmu
      </label>
      <div className="relative">
        <input
          type="range"
          min="70"
          max="250"
          step="1"
          id="priceRange"
          name="priceRange"
          value={selectedPriceRange[1]}
          onChange={handleMaxPriceRangeChange}
          className="block cursor-pointer h-10   appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-20 rounded shadow leading-tight focus:outline-none focus:shadow-outline hover:border-2 focus:border-blue"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <span>{selectedPriceRange[1]} PLN</span>
          </div>
      </div>
      <div className="p-2">
        <button
          className="px-8 py-2 my-2 font-bold text-white border-2  border-white bg-blackCoffee hover:bg-gray-900 rounded shadow-md hover:shadow-lg transition duration-300"
          onClick={handleSearch}
        >
          Wyszukaj
        </button>
      </div>
      </div>
    </form>
  )
}

export default CarSearchForm