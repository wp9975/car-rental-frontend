import React from "react";
import { Typography, Divider, Box } from "@mui/material";

const OrderSummary = ({ carData, selectedServices , toPay }) => {
  const nettoPrice = toPay / 1.23;
  const vatAmount = toPay - nettoPrice;

  return (
    <div className="h-full ml-2 pl-5 border-l-2">
      <Typography variant="h6">Podsumowanie zamówienia:</Typography>
      <Divider />
      <Box mt={2} className="flex bg-white m-2">
      <img src={carData.imgUrl} alt={carData.model} className="h-20" />
      <Box ml={2} className=" min-w-[300px] flex flex-col justify-center">
      <Typography fontSize={20}>
        {carData.brand} {carData.model}
      </Typography>
      <Typography variant="body1">
        Cena netto: {nettoPrice.toFixed(2)} zł
      </Typography>
      </Box>
      </Box>
      <Typography variant="h6">Usługi dodatkowe:</Typography>
      {console.log(selectedServices.name)}
      {selectedServices.map((service, index) => (
        <Typography key={index} variant="body1">
          {service.name}: {service.price} zł
        </Typography>
      ))}
      <Typography sx={{mt:5}} variant="body2" color="text.secondary">
        Łącznie (netto): {nettoPrice.toFixed(2)} zł
      </Typography>
      <Typography variant="body2" color="text.secondary">
        VAT (23%): {vatAmount.toFixed(2)} zł
      </Typography>
      <Divider />
      <Typography variant="h6">Do zapłaty: {toPay.toFixed(2)} zł</Typography>
    </div>
  );
};

export default OrderSummary;
