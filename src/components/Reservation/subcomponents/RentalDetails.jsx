import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarsData from "../../../assets/data/CarsData";
import calculateRental from "../../../functions/calculateRental";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  BiError,
  BiGasPump,
  BiBattery,
  BiCheckDouble,
  BiCar,
} from "react-icons/bi";
import CarInfoCard from "./CarInfoCard";

const RentalDetails = (props) => {
  const { calculations, setCalculations, carItem } = props;
  const { carSlug } = useParams();

  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();
  const [distance, setDistance] = useState(20);
  const [driverLicenseYear, setDriverLicenseYear] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const rentalDays =
    (new Date(dateEnd).getTime() - new Date(dateStart).getTime()) / 86400000;


  useEffect(() => {
    setErrorMessage();
  }, [dateEnd, dateStart, distance, driverLicenseYear]);

  const handlerCalculateButton = (e) => {
    e.preventDefault();
    if (
      dateStart == undefined ||
      dateEnd == undefined ||
      distance == undefined ||
      driverLicenseYear == undefined
    ) {
      setErrorMessage("Wypełnij formularz!");
    } else {
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
    }
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

  const handlerNextButton = () => {
    if (
      carItem.category == "premium" &&
      new Date().getFullYear() - driverLicenseYear < 3
    ) {
      setErrorMessage(
        "Wypożyczenie samochodu klasy premium wymaga conajmniej 3-letniego posiadania prawa jazdy."
      );
    } else if (calculations === undefined) {
      setErrorMessage("Wypełnij formularz i oblicz cenę wynajmu!");
    } else {
      props.setCarCategory(carItem.category);
      props.updateStep(2);
    }
  };

  return (
    <div className="container mx-auto ">
      <div className="border-2 p-2 rounded-lg bg-snow m-2">
        <h2 className="text-4xl text-bold text-center pb-4">
          Wybrany samochód:
        </h2>
        <CarInfoCard carItem={carItem}/>
      </div>
      <div className="border-2 p-2 rounded-lg bg-snow m-2">
        <div className="flex flex-col items-center justify-center">
          <label>Termin wypożyczenia samochodu:</label>
          <div className="relative ">
            <DatePicker
              id="dateStartEnd"
              minDate={new Date()}
              selectsRange={true}
              startDate={dateStart}
              endDate={dateEnd}
              onChange={onChangeHandler}
              className="m-2 w-80 rounded-lg text-center border-transparent  appearance-none border border-gray  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
              showDisabledMonthNavigation
            />
          </div>
          <label>Rok otrzymania prawa jazdy:</label>
          <div className="inline-block relative">
            <select
              required
              onChange={handlerDriverLicenseYearChange}
              value={driverLicenseYear}
              className="rounded-lg w-80 text-center border-transparent appearance-none border border-gray m-2 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
            >
              <option></option>
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
              className="w-80 rounded-lg text-center border-transparent  appearance-none border border-gray m-2 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
              placeholder="Your price"
              onChange={handlerDistanceChange}
              value={distance}
            />
          </div>
          <span
            className={`bg-medium ${
              errorMessage ? "block" : "hidden"
            } flex items-center w-full text-xl mb-2 justify-center text-white px-6 py-2`}
          >
            <BiError size={32} />
            {errorMessage}
          </span>
        </div>
        {calculations ? (
          <div className="border-t-2 p-2">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-lg border-2">
                <h4 className="text-lg text-center">Cena za dzień: </h4>
                <p className="text-2xl text-center p-1">
                  {calculations.dailyRentalPrice.toFixed(2)} zł
                </p>
              </div>
              <div className="bg-white rounded-lg border-2">
                <h4 className="text-lg text-center">Liczba dni: </h4>
                <p className="text-2xl text-center p-1">
                  {calculations.rentalDays}
                </p>
              </div>
              <div className="bg-white rounded-lg border-2">
                <h4 className="text-lg text-center">Szacunkowy dystans: </h4>
                <p className="text-2xl text-center p-1">
                  {calculations.distance}
                </p>
              </div>
              <div className="bg-white rounded-lg border-2">
                <h4 className="text-lg text-center">
                  Zniżka dla doświadczonych kierowców:
                </h4>
                <p className="text-2xl text-center p-1">
                  {calculations.driverDiscount ? "Tak" : "Nie"}
                </p>
              </div>
              <div className="bg-white rounded-lg border-2">
                <h4 className="text-lg text-center">
                  Szacunkowa cena paliwa:{" "}
                </h4>
                <p className="text-2xl text-center p-1">
                  {calculations.fuelPrice.toFixed(2)} zł
                </p>
              </div>
              <div className="bg-white rounded-lg border-2">
                <h4 className="text-lg text-center">Kwota netto: </h4>
                <p className="text-2xl text-center p-1">
                  {calculations.nettoPrice.toFixed(2)} zł
                </p>
              </div>
              <div className="bg-white rounded-lg border-2 col-span-3 text-center">
                <h4 className="text-xl text-center">Kwota brutto: </h4>
                <p className="text-2xl text-center p-1">
                  {calculations.bruttoPrice.toFixed(2)} zł
                </p>
              </div>
            </div>
          </div>
        ) : null}
        <div className="col-span-3 flex items-center justify-around">
          <button
            onClick={handlerCalculateButton}
            className={`bg-blue hover:border-2 text-white font-bold py-2 px-4 border-gray rounded`}
          >
            Oblicz
          </button>
          <button
            className={`bg-blue hover:border-2 text-white font-bold py-2 px-4 border-gray rounded`}
            onClick={handlerNextButton}
          >
            Następny
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentalDetails;
