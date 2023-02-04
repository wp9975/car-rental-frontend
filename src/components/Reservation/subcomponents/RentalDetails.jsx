import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarsData from "../../../assets/data/CarsData";
import calculateRental from "../../../functions/calculateRental";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RentalDetails = () => {
  const { carSlug } = useParams();
  const carItem = CarsData.find((item) => item.carLink === carSlug)
  const [dateStart, setDateStart] = useState(new Date("2023-02-04"));
  const [dateEnd, setDateEnd] = useState(new Date("2023-02-05"));
  const [distance, setDistance] = useState(20);
  const [driverLicenseYear, setDriverLicenseYear] = useState();
  const [calculations, setCalculations] = useState();
  const rentalDays =
    (new Date(dateEnd).getTime() - new Date(dateStart).getTime()) / 86400000;

 
  const handleCalculateButton = (e) => {
    e.preventDefault()
    
    setCalculations(
      calculateRental(
        carItem.category,
        carItem.fuel,
        carItem.fuelConsumption,
        carItem.quantity,
        rentalDays,
        driverLicenseYear,
        distance
      )
    );
  };

  const onChangeHandler = (value) => {
    setDateStart(value[0]);
    setDateEnd(value[1]);
  };

  const handlerDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const handlerDriverLicenseYearChange = (event) => {
    setDriverLicenseYear(event.target.value);
  };

  return (
    <div className="container mx-auto ">
      <div className="border-2 p-2 rounded-lg bg-snow m-2">
        <h2 className="text-4xl text-bold text-center pb-4">
          Wybrany samochód:
        </h2>
        <div className="flex flex-wrap mx-auto xl:w-4/5">
          <img
            src={carItem.imgUrl}
            className="object-cover object-center w-full rounded-md lg:w-1/2 lg:h-auto h-50"
            alt="car"
          />
          <div className="w-full py-3 mt-5 lg:w-1/2">
            <h1 className="my-2 text-3xl ">
              {carItem.brand} {carItem.model}
            </h1>
            <h2 className="text-md text-gray">{carItem.category}</h2>
            <div className="flex my-2">
              <h4 className="mx-3 text-lg">{carItem.fuelConsumption}</h4>-
              <h4 className="mx-3 text-lg">{carItem.fuel}</h4>-
              <h4 className="mx-3 text-lg">{carItem.type}</h4>
            </div>
            <p className="leading-relaxed">{carItem.quantity}</p>
          </div>
        </div>
      </div>
      <div className="border-2 p-2 rounded-lg bg-snow m-2">
        <div className="flex flex-col items-center justify-center">
          <label>Termin wypożyczenia samochodu:</label>
          <div className="relative ">
            <DatePicker
              id="dateStartEnd"
              selectsRange={true}
              startDate={dateStart}
              endDate={dateEnd}
              onChange={onChangeHandler}
              className="m-2 rounded-lg border-transparent  appearance-none border border-gray  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
              showDisabledMonthNavigation
            />
          </div>
          <label>Rok otrzymania prawa jazdy:</label>
          <div className="inline-block relative">
            <select
              onChange={handlerDriverLicenseYearChange}
              value={driverLicenseYear}
              className="rounded-lg border-transparent appearance-none border border-gray m-2 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
            >
              <option value={2023}>2023</option>
              <option value={2022}>2022</option>
              <option value={2021}>2021</option>
              <option value={2020}>2020</option>
              <option value={2019}>2019</option>
              <option value={2018}>2018</option>
              <option value={2017}>2017</option>
            </select>
          </div>
          <label>Szacunkowy dystans do pokonania</label>
          <div className=" relative ">
            <input
              type="number"
              min={20}
              id="search-form-price"
              className=" rounded-lg border-transparent  appearance-none border border-gray m-2 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
              placeholder="Your price"
              onChange={handlerDistanceChange}
              value={distance}
            />
          </div>
        </div>
        {calculations ? (<div className="border-t-2 p-2">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-lg border-2">
              <h4 className="text-lg text-center">Cena za dzień: </h4>
              <p className="text-2xl text-center p-1">{calculations.dailyRentalPrice.toFixed(2)} zł</p>
            </div>
            <div className="bg-white rounded-lg border-2">
              <h4 className="text-lg text-center">Liczba dni: </h4>
              <p className="text-2xl text-center p-1">{calculations.rentalDays}</p>
            </div>
            <div className="bg-white rounded-lg border-2">
              <h4 className="text-lg text-center">Szacunkowy dystans: </h4>
              <p className="text-2xl text-center p-1">{calculations.distance}</p>
            </div>
            <div className="bg-white rounded-lg border-2">
              <h4 className="text-lg text-center">
                Zniżka dla doświadczonych kierowców:
              </h4>
              <p className="text-2xl text-center p-1">{calculations.driverDiscount ? 'Tak' : 'Nie'}</p>
            </div>
            <div className="bg-white rounded-lg border-2">
              <h4 className="text-lg text-center">Szacunkowa cena paliwa: </h4>
              <p className="text-2xl text-center p-1">{calculations.fuelPrice.toFixed(2)} zł</p>
            </div>
            <div className="bg-white rounded-lg border-2">
              <h4 className="text-lg text-center">Kwota netto: </h4>
              <p className="text-2xl text-center p-1">{calculations.nettoPrice.toFixed(2)} zł</p>
            </div>
            <div className="bg-white rounded-lg border-2 col-span-3 text-center">
              <h4 className="text-xl text-center">Kwota brutto: </h4>
              <p className="text-2xl text-center p-1">{calculations.bruttoPrice.toFixed(2)} zł</p>
            </div>
            
          </div>
        </div>) : null}
        <div className="col-span-3 flex items-center justify-around">
              <button
                onClick={handleCalculateButton}
                className={`bg-blue hover:border-2 text-white font-bold py-2 px-4 border-gray rounded`}
              >
                Oblicz
              </button>
              <button
                className={`bg-blue hover:border-2 text-white font-bold py-2 px-4 border-gray rounded`}
              >
                Next
              </button>
            </div>
      </div>
    </div>
  );
};

export default RentalDetails;
