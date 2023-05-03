import React from "react";
import { NavLink } from "react-router-dom";
import carBackground from "../../assets/img/backgrounds/pexels-bogdan-emelyanov-58724.jpg"; // Zaimportuj obraz tła

const ChooseCar = () => {
  return (
    
    <div
      className="bg-cover  bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${carBackground})` }}
    >
      <div className="bg-gray-900 bg-opacity-70 h-full">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-3xl md:text-5xl text-center py-5 font-bold">
            Wybierz samochód z listy:
          </h1>
          <p className="text-xl md:text-2xl text-center px-5 md:px-20 mb-10">
            Przejrzyj naszą bogatą ofertę samochodów i znajdź idealny pojazd dla siebie. Mamy
            różne modele i marki, które spełnią Twoje oczekiwania!
          </p>
          <NavLink
            to="/car-rental-frontend/fleet"
            className="bg-blue-500 hover:bg-blue-600 px-8 py-4 text-xl md:text-2xl font-semibold rounded-lg transition duration-200 ease-in-out"
          >
            Lista samochodów
          </NavLink>
        </div>
      </div>
    </div>
 
  );
};

export default ChooseCar;
