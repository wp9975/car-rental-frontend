import React from "react";
import { Card, CardContent, Typography, Checkbox } from "@mui/material";
import { CreditCard } from "@mui/icons-material";

const PaymentMethodCard = ({ title, icon, selected, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{ borderColor: selected ? "primary.main" : "divider", borderWidth: selected ? 2 : 1, borderStyle: "solid", cursor: "pointer" }}
    >
      <CardContent>
        {icon}
        <Typography variant="h6">{title}</Typography>
       
      </CardContent>
    </Card>
  );
};

export default PaymentMethodCard;