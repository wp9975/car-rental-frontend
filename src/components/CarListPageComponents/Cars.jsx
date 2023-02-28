import React, { useState, useEffect, useRef, useMemo } from "react";

import CarCard from "./subcomponents/CarCard";
import PageBar from "./subcomponents/PageBar";

const Cars = (props) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(20);

  const pagesCount = Math.ceil(props.data.length / elementsPerPage);
  const indexOfLastData = currentPage * elementsPerPage;
  const indexOfFirstData = indexOfLastData - elementsPerPage;
  const currentData = props.data.slice(indexOfFirstData, indexOfLastData);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageElementsChange = (e) => {
    setElementsPerPage(parseInt(e.target.value));
  };



  

  return (
    <section className="">
      <div className="flex items-center justify-between w-full px-10">
        <div className="relative">
          <select onChange={props.handleSortData} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="default">Default</option>
            <option value="fuelAsc">Zużycie paliwa (rosnąco)</option>
            <option value="fuelDesc">Zużycie paliwa (malejąco)</option>
          </select>
        </div>
        <select
          className="block appearance-none w-32 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          onChange={handlePageElementsChange}
        >
          <optgroup label="Elementy na stronie">
            <option value={20}>20</option>
            <option value={6}>6</option>
            <option value={10}>10</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </optgroup>
        </select>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-[2000px] gap-4 mx-auto mt-8">
        {currentData.map((item, index) => (
          <CarCard item={item} key={index} />
        ))}
      </div>
      <PageBar
        setCurrentPage={setCurrentPage}
        handlePageChange={handlePageChange}
        itemsPerPage={elementsPerPage}
        pagesCount={pagesCount}
        currentPage={currentPage}
      />
    </section>
  );
};

export default Cars;
