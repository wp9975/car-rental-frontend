import React from "react";
import Confetti from "react-confetti";
import { Box, Typography } from "@mui/material";

const ReservationSuccess = () => {
  return (
    <div className="h-[1000px] ml-2 pl-5 border-l-2">
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      padding="2rem"
    >
      <Confetti />
      <Typography variant="h4" align="center" gutterBottom>
        Rezerwacja przebiegła pomyślnie!
      </Typography>
      <Typography variant="h5" align="center">
        Do zobaczenia w salonie!
      </Typography>
    </Box>
    </div>
  );
};

export default ReservationSuccess;