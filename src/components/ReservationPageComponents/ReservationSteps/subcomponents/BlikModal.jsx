import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  CircularProgress,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const BlikModal = ({
  open,
  handleClose,
  handleBlikCodeChange,
  blikCode,
  handlePaymentConfirmation,
  setStep,
}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isBlikCodeValid = () => {
    return /^\d{6}$/.test(blikCode);
  };

  const handleConfirm = () => {
    if (!isBlikCodeValid()) {
      alert("Kod Blik musi zawierać 6 cyfr.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handlePaymentConfirmation();
      handleClose();
      navigate('/car-rental-frontend/reservation/success');
    }, 3000);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Wprowadź kod Blik</DialogTitle>
      <DialogContent>
        {loading ? (
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <CircularProgress />
            <p>Oczekujemy na płatność...</p>
          </Box>
        ) : (
          <TextField
            autoFocus
            margin="dense"
            id="blik-code"
            label="Kod Blik"
            type="text"
            value={blikCode}
            onChange={handleBlikCodeChange}
            inputProps={{ maxLength: 6 }}
            fullWidth
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Anuluj</Button>
        <Button onClick={handleConfirm} color="primary">
          Potwierdź
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BlikModal;
