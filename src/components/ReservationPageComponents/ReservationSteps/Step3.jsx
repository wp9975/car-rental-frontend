import React, { useState } from "react";
import {
  Grid,
  TextField,
  Stack,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const Step3 = ({setPersonalData, setActiveStep }) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setErrors({
      ...errors,
      [name]: !value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      setPersonalData(values);
      setActiveStep(3);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete className="relative max-w-3xl">
      <Typography sx={{margin:"5px", fontSize:"26px"}} >Dane kontaktowe</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            name="firstName"
            label="Imię"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.firstName}
            helperText={errors.firstName ? "Pole wymagane" : ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            name="lastName"
            label="Nazwisko"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.lastName}
            helperText={errors.lastName ? "Pole wymagane" : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            name="email"
            label="Adres e-mail"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.email}
            helperText={errors.email ? "Wprowadź poprawny adres e-mail" : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            name="phoneNumber"
            label="Numer telefonu"
            type="tel"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber ? "Wprowadź poprawny numer telefonu" : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            name="address"
            label="Adres"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.address}
            helperText={errors.address ? "Pole wymagane" : ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            name="city"
            label="Miasto"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.city}
            helperText={errors.city ? "Pole wymagane" : ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        required
        name="zipCode"
        label="Kod pocztowy"
        value={values.zipCode}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!errors.zipCode}
        helperText={errors.zipCode ? "Wprowadź poprawny kod pocztowy" : ""}
      />
    </Grid>
    <Grid item xs={12}>
      <FormControl fullWidth required>
        <InputLabel id="country-label">Kraj</InputLabel>
        <Select
          labelId="country-label"
          name="country"
          value={values.country}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!errors.country}
        >
          <MenuItem value="Polska">Polska</MenuItem>
          <MenuItem value="Niemcy">Niemcy</MenuItem>
          <MenuItem value="Francja">Francja</MenuItem>
          {/* Dodaj więcej krajów według potrzeb */}
        </Select>
        {errors.country && (
          <div style={{ color: "red", fontSize: "0.75rem", marginTop: "0.25rem" }}>
            Pole wymagane
          </div>
        )}
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <Button type="submit" variant="contained" color="primary">
          Zatwierdź
        </Button>
      </Stack>
    </Grid>
  </Grid>
</form>

);
};

export default Step3;