import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { Stepper, Step, StepLabel, Paper, MobileStepper } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useState } from "react";
import { isMobile } from "react-device-detect";

const steps = [
  {
    label: "Podanie informacji o wypożyczeniu",
    description: `Wybierz daty, w które chcesz wypożyczyć samochód oraz podaj kilka dodatkowych informacji, które pomogą nam lepiej przygotować Twoją rezerwację.`,
  },
  {
    label: "Wybór dodatkowych usług",
    description:
      " Tutaj możesz wybrać dodatkowe usługi, takie jak ubezpieczenie, dodatkowy kierowca, nawigacja GPS i wiele innych.",
  },
  {
    label: "Dane personalne",
    description: `Wprowadź swoje dane personalne, w tym imię, nazwisko, adres e-mail i numer telefonu, abyśmy mogli skontaktować się z Tobą w sprawie Twojej rezerwacji.`,
  },
  {
    label: "Podsumowanie",
    description: `Przejrzyj podsumowanie swojej rezerwacji, upewnij się, że wszystkie dane są poprawne, a następnie potwierdź rezerwację.`,
  },
];

const ProgressBar = (props) => {
  const { activeStep } = props;
  const theme = useTheme();
  const isMobileDevice = isMobile && window.innerWidth <= theme.breakpoints.values.sm;
  const [mobileStep, setMobileStep] = useState(0);

  const handleNext = () => {
    setMobileStep((prevMobileStep) => prevMobileStep + 1);
  };

  const handleBack = () => {
    setMobileStep((prevMobileStep) => prevMobileStep - 1);
  };

  const handleReset = () => {
    setMobileStep(0);
  };

  if (isMobileDevice) {
    return (
      <Box sx={{ width: '100%' }}>
        <MobileStepper
          variant="dots"
          steps={steps.length || 0}
          position="static"
          activeStep={mobileStep}
          sx={{ bgcolor: 'transparent' }}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={mobileStep === steps.length - 1}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={mobileStep === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', sm: '75%', md: '100%' }}>
      {console.log(isMobile)}
      <Stepper nonLinear activeStep={activeStep} sx={{ bgcolor: 'transparent' }}>
        {steps && steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              {!isMobile && step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
      
    );
    
};

export default ProgressBar;
