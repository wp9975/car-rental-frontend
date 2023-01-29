import React from "react";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import EmployeesData from "../../assets/data/EmployeesData";

const Team = () => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <section className="py-4 mx-auto my-4 rounded-md shadow-md max-w-screen-2xl">
      <div className="py-6 mx-auto">
        <h1 className="text-3xl font-bold text-center sm:text-4xl">
          Nasz zespół
        </h1>
        <p className="max-w-2xl px-3 mx-auto my-5 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>
        <div className="flex items-center">
          <MdChevronLeft
            className="left-0 bg-gray h-56 text-white animate-pulse hidden opacity-50 cursor-pointer md:block hover:opacity-100"
            onClick={slideLeft}
            size={50}
          />
          <div
            id="slider"
            className="flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {EmployeesData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 border-2 rounded-xl bg-primary hover:bg-bone"
              >
                <img
                  src={item.photo}
                  alt=""
                  className="object-cover w-32 h-32 border-2 rounded-3xl"
                />
                <h1 className="mt-3 text-2xl font-semibold ">{item.name}</h1>
                <p className="capitalize">{item.position}</p>
                <div className="flex items-center">
                  <AiOutlineMail />
                  {item.email}
                </div>
                <div className="flex items-center">
                  <AiTwotonePhone />
                  {item.phone}
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            className="hidden bg-gray h-56 text-white animate-pulse opacity-50 cursor-pointer hover:opacity-100 md:block"
            onClick={slideRight}
            size={50}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
