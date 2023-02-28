import React from "react";

const InNumbersSection = () => {
  return (
    <section className="bg-darkgray">
      <div className="container grid grid-cols-2 md:grid-cols-4 mx-auto py-6 gap-8 text-center">
        <div>
          <h4 className="text-5xl font-bold text-white">
            20<span className="text-6xl text-silver">+</span>
          </h4>
          <p className="text-md uppercase text-white">lat w branży</p>
        </div>
        <div>
          <h4 className="text-5xl font-bold text-white">
            4.5<span className="text-6xl text-silver">+</span>
          </h4>
          <p className="text-md uppercase text-white">Średnia ocena</p>
        </div>
        <div>
          <h4 className="text-5xl font-bold text-white">
            17<span className="text-6xl text-silver">+</span>
          </h4>
          <p className="text-md uppercase text-white">
            doświadczonych pracowników
          </p>
        </div>
        <div>
          <h4 className="text-5xl font-bold text-white">
            20<span className="text-6xl text-silver">+</span>
          </h4>
          <p className="text-md uppercase text-white">lat w branży</p>
        </div>
      </div>
    </section>
  );
};

export default InNumbersSection;
