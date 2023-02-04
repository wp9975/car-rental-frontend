import React from "react";
import { AiOutlineSearch, AiTwotoneEdit, AiFillCar } from "react-icons/ai";
const HowToRent = () => {
  return (
    <section id="howtorent" className="bg-snow">
      <div className="container  mx-auto ">
        <h2 className="text-3xl font-bold py-10 text-center sm:text-4xl">Jak to działa?</h2>
        <div className="flex flex-wrap p-2">
        <div className="lg:w-2/5 md:w-1/2 flex flex-col pr-3">
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-silver pointer-events-none"></div>
            </div>
            <div className="flex pb-10">
              <div className="flex-shrink-0 w-10 h-9 rounded-lg bg-blackCoffee text-white z-10 relative ">
                <AiOutlineSearch size={32} className="m-auto" />
              </div>
            </div>
            <div className="flex-grow pl-5">
              <h3 className="text-lg font-bold">Krok 1</h3>
              <p className="leading-relaxed text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-silver pointer-events-none"></div>
            </div>
            <div className="flex pb-10">
              <div className="flex-shrink-0 w-10 h-9 rounded-lg bg-blackCoffee text-white z-10 relative ">
                <AiTwotoneEdit size={32} className="m-auto" />
              </div>
            </div>
            <div className="flex-grow pl-5">
              <h3 className="text-lg font-bold">Krok 2</h3>
              <p className="leading-relaxed text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="flex pb-10">
              <div className="flex-shrink-0 w-10 h-9 rounded-lg bg-blackCoffee text-white z-10 relative ">
                <AiFillCar size={32} className="m-auto" />
              </div>
            </div>
            <div className="flex-grow pl-5">
              <h3 className="text-lg font-bold">Krok 3</h3>
              <p className="leading-relaxed text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-3/5 md:w-1/2 bg-[url(https://images.unsplash.com/photo-1588601515608-6a6814976b50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)]  bg-cover bg-center rounded-md"><div/>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HowToRent;
