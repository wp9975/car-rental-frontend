import React from "react";

const Steps = (props) => {
  const {step} = props;
  return (
    <div className="relative max-w-screen-2xl p-3 mx-auto after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray">
      <ol className="relative z-10 flex justify-between text-sm font-medium text-gray">
        <li className="flex items-center bg-white p-2 border-2 rounded-md">
          <span
            className={`h-6 w-6 rounded-full bg-blue text-center text-[10px] text-white font-bold leading-6`}
          >
            1
          </span>

          <span className="hidden sm:ml-2 sm:block"> Szczegóły </span>
        </li>

        <li className="flex items-center bg-white p-2 border-2 rounded-md">
          <span
            className={`h-6 w-6 rounded-full ${
              step === 2 || step === 3 ? "bg-blue" : 'bg-gray '
            } text-center text-[10px] font-bold leading-6 text-white`}
          >
            2
          </span>

          <span className="hidden sm:ml-2 sm:block"> Address </span>
        </li>

        <li className="flex items-center bg-white p-2 border-2 rounded-md">
          <span
            className={`h-6 w-6 rounded-full ${
              step === 3 ? "bg-blue" : 'bg-gray '
            } text-center text-[10px] text-white font-bold leading-6`}
          >
            3
          </span>

          <span className="hidden sm:ml-2 sm:block"> Payment </span>
        </li>
      </ol>
    </div>
  );
};

export default Steps;
