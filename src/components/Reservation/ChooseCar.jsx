import React from "react";
import { NavLink } from "react-router-dom";

const ChooseCar = () => {
  return (
    <div className="bg-snow h-96">
      <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl md:text-5xl text-center py-5">Wybierz samochód z listy:</h1>
            <NavLink
              to="/car-rental-frontend/fleet"
              className="bg-blue px-16 py-6 text-2xl rounded-lg"
            >
              Lista samochodów
            </NavLink>
      </div>
    </div>
  );
};

export default ChooseCar;
