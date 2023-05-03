import React from "react";
import Confetti from "react-confetti";
import { Box, Typography } from "@mui/material";

const Step5 = () => {
  return (
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
  );
};

export default Step5;
