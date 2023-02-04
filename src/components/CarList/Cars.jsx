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
      <div className="flex flex-wrap">
        {dataCars.map((item, index) => (
          <Link key={index} to={`/reservation/${item.carLink}`} className='mx-auto'>
            <CarCard item={item}  />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Cars;
