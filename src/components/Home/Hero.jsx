import React from "react";
import { Link } from "react-router-dom";
import CarSearchForm from "./subcomponents/CarSearchForm";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center  bg-cover bg-center bg-no-repeat bg-[url(https://images.unsplash.com/photo-1608564697071-ddf911d81370?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)]">
      <div className="absolute inset-0 bg-gray/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray/80 sm:to-silver/15"></div>

      <div className="relative px-4 mx-auto max-w-screen-2xl sm:px-6 lg:flex justify-between lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl w-full md:w-1/2 md:m-10 text-center sm:text-left flex-grow">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <strong className="block font-extrabold text-white">
              Znajdź dla siebie idealny samochód
            </strong>
          </h1>

          <div className=" mt-8 text-center">
            <a
              href="#howtorent"
              className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-blackCoffee hover:font-bold focus:outline-none focus:ring sm:w-auto"
            >
              Dowiedz się więcej
            </a>
          </div>
        </div>
        <div className=" mt-10 md:m-10 rounded flex flex-col w-full md:w-1/2">
          <CarSearchForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
