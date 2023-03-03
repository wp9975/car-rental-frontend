import React, { useEffect, useState } from "react";
import { FaGasPump, FaCog, FaCar, FaInfoCircle } from "react-icons/fa";
import { Fade, Slide } from "react-reveal";

const CarInfoCardNew = (props) => {
  const {
    imgUrl,
    model,
    brand,
    category,
    type,
    fuel,
    fuelConsumption,
    quantity,
  } = props.carItem;

  return (
    <section className="flex flex-col md:flex-row items-center my-8">
      <div className="lg:w-1/2">
        <Fade>
          <img
            src={imgUrl}
            alt=""
            className="max-w-full h-auto rounded-lg shadow-lg mx-auto object-cover scale-50 hover:scale-75 ease-in duration-500"
          />
        </Fade>
      </div>
      <div className="p-8 lg:w-1/2 bg-white rounded-lg shadow-lg">
        <Fade>
          <h2 className="text-2xl font-bold mb-4">{`${brand} ${model}`}</h2>
        </Fade>
        <Slide right cascade>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <span className="text-gray-400 uppercase">Kategoria:</span>
              <span className="ml-2">{category}</span>
            </div>
            <div>
              <span className="text-gray-400 uppercase">Typ:</span>
              <span className="ml-2">{type}</span>
            </div>
            <div>
              <span className="text-gray-400 uppercase">Paliwo:</span>
              <span className="ml-2">{fuel}</span>
            </div>
            <div>
              <span className="text-gray-400 uppercase">Średnie spalanie:</span>
              <span className="ml-2 font-bold">{fuelConsumption}</span>
            </div>
            <div>
              <span className="text-gray-400 uppercase">
                Liczba dostępnych sztuk:
              </span>
              <span className="ml-2 font-bold">{quantity}</span>
            </div>
          </div>
        </Slide>
        <Fade>
        <div>
          <span className="text-gray-400 uppercase">Opis:</span>
          <span className="ml-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>
        </div>
        </Fade>
      </div>
    </section>
  );
};

export default CarInfoCardNew;
