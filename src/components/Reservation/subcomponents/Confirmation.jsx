import React from "react";
import CarInfoCard from "./CarInfoCard";

const Confirmation = (props) => {
  const { dataRentalForm, dataPersonal, updateStep, carItem } = props;
  const { firstName, lastName, email, address, country, city, postalCode } =
    dataPersonal;
  const {dailyRentalPrice, rentalDays, distance, driverDiscount, fuelPrice, nettoPrice, bruttoPrice} = dataRentalForm;
  return (
    <div>
      <h1 className="text-center font-bold text-4xl pb-12">
        Sprawdź poprawność danych
      </h1>
      <div className="grid grid-cols-2 gap-4 border-2 p-3 rounded-lg mx-auto bg-white max-w-screen-xl">
        <div className="col-span-2 text-center font-bold text-2xl">
          Dane personalne
        </div>
        <div className="text-center bg-grayLavender rounded-md p-2 text-lg font-bold">
          Imię i nazwisko:
        </div>
        <div className="text-left bg-grayLavender rounded-md p-2 text-lg">
          {firstName} {lastName}
        </div>
        <div className="text-center bg-grayLavender rounded-md p-2 text-lg font-bold">
          Adres e-mail:
        </div>
        <div className="text-left bg-grayLavender rounded-md p-2 text-lg">
          {email}
        </div>
        <div className="text-center bg-grayLavender rounded-md p-2 text-lg font-bold">
          Adres zamieszkania:
        </div>
        <div className="text-left bg-grayLavender rounded-md p-2 text-lg">
          {address}, {postalCode} {city}, {country}
        </div>
      </div>
      <CarInfoCard carItem={carItem}/>
      <div className="grid grid-cols-2 gap-4 border-2 p-3 rounded-lg mx-auto bg-white max-w-screen-xl">
        <div className="col-span-2 text-center font-bold text-2xl">
          Koszty:
        </div>
        <div className="text-center bg-grayLavender rounded-md p-2 text-lg font-bold">
          Cena paliwa:
        </div>
        <div className="text-left bg-grayLavender rounded-md p-2 text-lg">
          {fuelPrice.toFixed(2)} zł
        </div>
        <div className="text-center bg-grayLavender rounded-md p-2 text-lg font-bold">
          Cena netto:
        </div>
        <div className="text-left bg-grayLavender rounded-md p-2 text-lg">
          {nettoPrice.toFixed(2)} zł
        </div>
        <div className="text-center bg-grayLavender rounded-md p-2 text-lg font-bold">
          Cena brutto:
        </div>
        <div className="text-left bg-grayLavender rounded-md p-2 text-lg">
          {bruttoPrice.toFixed(2)} zł
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
