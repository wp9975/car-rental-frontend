import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProgressBar from "./ReservationSteps/ProgressBar";
import Step1 from "./ReservationSteps/Step1";
import Step2 from "./ReservationSteps/Step2";
import Step3 from "./ReservationSteps/Step3";
import Step4 from "./ReservationSteps/Step4";
import imgBg2 from "../../assets/img/backgrounds/pexels-bogdan-emelyanov-58724.jpg";
import imgBg1 from "../../assets/img/backgrounds/pexels-adonyi-gábor-8315432.jpg";
import imgBg3 from "../../assets/img/backgrounds/pexels-raduz-91152.jpg";
import imgBg4 from "../../assets/img/backgrounds/pexels-wavy-revolution-14992307.jpg";
import CarDetails from "./CarDetails";
const ReservationForm = ({ carItem }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [personalData, setPersonalData] = useState({});
  const [selectedServices, setSelectedServices] = useState([]);
  const [toPay, setToPay] = useState(200);
  let [backgroundImage, setBackgroundImage] = useState(imgBg1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 0) {
      setBackgroundImage(imgBg2);
    } else if (activeStep === 1) {
      setBackgroundImage(imgBg3);
    } else if (activeStep === 2) {
      setBackgroundImage(imgBg4);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (activeStep === 3) {
      setBackgroundImage(imgBg3);
    } else if (activeStep === 2) {
      setBackgroundImage(imgBg2);
    } else if (activeStep === 1) {
      setBackgroundImage(imgBg1);
    }
  };

  const displayForm = (step) => {
    if (step === 0) {
      backgroundImage = imgBg2;
      return (
        <Step1
          carItem={carItem}
          setToPay={setToPay}
          setActiveStep={setActiveStep}
        />
      );
    } else if (step === 1) {
      return (
        <Step2
          toPay={toPay}
          setToPay={setToPay}
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          setActiveStep={setActiveStep}
        />
      );
    } else if (step === 2) {
      return (
        <Step3
          setActiveStep={setActiveStep}
          setPersonalData={setPersonalData}
        />
      );
    } else if (step === 3) {
      return (
        <Step4
          carData={carItem}
          selectedServices={selectedServices}
          personalData={personalData}
          toPay={toPay}
          setStep={setActiveStep}
        />
      );
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col md:pt-20 bg-cover transition-all duration-500"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="h-full flex flex-col items-center justify-evenly ">
        <div className=" px-3 py-4 bg-snow rounded-lg w-full md:my-10">
          <ProgressBar activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
        <div className=" flex items-center justify-center px-3 py-4 bg-snow rounded-lg">
          <div className="">{displayForm(activeStep)}</div>
        </div>
      </div>
      <div className="py-5 mt-10">
        <Box sx={{ mb: 2 }}>
          <div className="flex justify-around">
            <Button
              variant="contained"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              {activeStep === 3 ? "Finish" : "Continue"}
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ReservationForm;
