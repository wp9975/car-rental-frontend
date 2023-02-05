import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarsData from "../../assets/data/CarsData";
import Filters from "./Filters";
import CarCard from "./subcomponents/CarCard";
import CarTypeButton from "./subcomponents/CarTypeButton";

const Cars = () => {
    const [dataCars, setDataCars] = useState(CarsData);

    const setData = (newDataSet) => {
      setDataCars(newDataSet);
    }

  return (
    <section className="bg-snow">
        <Filters setData={setData}/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-[2400px] gap-2 mx-auto">
        {dataCars.map((item, index) => (
          <Link key={index} to={`/car-rental-frontend/reservation/${item.carLink}`} className=''>
            <CarCard item={item}  />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Cars;
