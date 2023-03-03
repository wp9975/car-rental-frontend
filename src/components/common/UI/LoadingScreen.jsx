import React from "react";
import { Fade } from "react-reveal";

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 z-50">
      <Fade>
        <div className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-10 w-10 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm6-8a6 6 0 100 12h2.975A4 4 0 0114 12h-2a2 2 0 01-2-2V4zm4 0a2 2 0 012 2v4a2 2 0 01-2 2h-2a4 4 0 01-3.975-4H14z"
            ></path>
          </svg>
          <span className="text-primary font-semibold text-lg">
            Loading...
          </span>
        </div>
      </Fade>
    </div>
  );
};

export default LoadingScreen;