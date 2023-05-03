import React, { useState } from "react";
import {
  Grid,
  Stack,
  Typography,
  Button,
  TextField,
  Divider,
  Box,
} from "@mui/material";
import PaymentMethodCard from "./subcomponents/PaymentMethodCard";
import BlikModal from "./subcomponents/BlikModal";
import OrderSummary from "./subcomponents/OrderSummary";
import { CreditCard, PaymentSharp, PaymentTwoTone } from "@mui/icons-material";
import { FaPaypal } from "react-icons/fa";


const Step4 = ({ carData, toPay, personalData, selectedServices, setStep }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [blikCode, setBlikCode] = useState("");
  const [showBlikModal, setShowBlikModal] = useState(false);


  const handlePaymentConfirmation = () => {
    if (selectedPaymentMethod === "paypal") {
      window.open("https://www.paypal.com/signin", "_blank");
    } 
    else if (selectedPaymentMethod === "blik") {
      setShowBlikModal(true);
    } else {
      // Logika potwierdzenia płatności dla innych metod płatności
    }
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleBlikCodeChange = (e) => {
    setBlikCode(e.target.value);
  };

  return (
    <div className="min-h-[400px]" >
    <Grid container spacing={3} className="h-full">
      <Grid item xs={12} md={6}>
        <Typography variant="h6">Dane kontaktowe:</Typography>
        <Typography>{personalData.firstName} {personalData.lastName}</Typography>
        <Typography>{personalData.phoneNumber}</Typography>
        <Typography>{personalData.email}</Typography>
        <Divider />
        <Typography variant="h6" mt={2}>
          Wybierz metodę płatności:
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <PaymentMethodCard
              title="Karta "
              icon={<CreditCard/>}
              selected={selectedPaymentMethod === "creditCard"}
              onClick={() => handlePaymentMethodChange("creditCard")}
            />
          </Grid>
          <Grid item xs={4}>
            <PaymentMethodCard
              title="Blik"
              icon={<PaymentTwoTone/>}
              selected={selectedPaymentMethod === "blik"}
              onClick={() => handlePaymentMethodChange("blik")}
            />
          </Grid>
          <Grid item xs={4}>
            <PaymentMethodCard
              title="PayPal"
              icon={<FaPaypal size={25}/>}
              selected={selectedPaymentMethod === "paypal"}
              onClick={() => handlePaymentMethodChange("paypal")}
            />
          </Grid>
        </Grid>
        {selectedPaymentMethod === "creditCard" && (
          <Box mt={3} >
            <TextField sx={{mt:2}}  fullWidth label="Numer karty" />
            <TextField sx={{mt:2}} fullWidth label="Imię i nazwisko" />
            <Grid sx={{mt:1}} container spacing={2}>
              <Grid item xs={6}>
                <TextField fullWidth label="Data ważności" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="CVV" />
              </Grid>
            </Grid>
          </Box>
        )}
        <Button
        sx={{mt:5, float:'right'}}
          variant="contained"
          color="primary"
          onClick={handlePaymentConfirmation}
        >
          Potwierdź zamówienie
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <OrderSummary carData={carData} selectedServices={selectedServices} toPay={toPay} />
      </Grid>
    </Grid>
    {showBlikModal && (
      <BlikModal
        open={showBlikModal}
        handleClose={() => setShowBlikModal(false)}
        handleBlikCodeChange={handleBlikCodeChange}
        blikCode={blikCode}
        handlePaymentConfirmation={handlePaymentConfirmation}
        setStep={setStep}
      />
    )}

    </div>
  );
};

export default Step4;
