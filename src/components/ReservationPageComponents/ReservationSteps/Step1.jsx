import React from "react";

import {
  Grid,
  TextField,
  Box,
  Select,
  MenuItem,
  Stack,
  FormControl,
  InputLabel,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const Step1 = () => {
  const [selectedDateRange, setSelectedDateRange] = React.useState([
    null,
    null,
  ]);
  const [drivingLicenseYear, setDrivingLicenseYear] = React.useState("");
  const [suggestedMileage, setSuggestedMileage] = React.useState("");
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - (currentYear - 65) + 1 },
    (_, index) => (currentYear - 65) + index
  );

  const handleDateRangeChange = (date) => {
    setSelectedDateRange(date);
  };

  const handleDrivingLicenseYearChange = (event) => {
    setDrivingLicenseYear(event.target.value);
  };

  const handleSuggestedMileageChange = (event) => {
    setSuggestedMileage(event.target.value);
  };

  return (
    <div className="flex flex-wrap space-x-5">
    <form noValidate className="pr-10 p-4 border-r-2 border-black">
      <Stack spacing={4}>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={{ start: "Wypożyczenie", end: "Zwrot" }}
        >
          <DateRangePicker
            value={selectedDateRange}
            minDate={new Date()}
            onChange={(newValue) => {
              setSelectedDateRange(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
        <FormControl>
          <InputLabel id="driving-license-year-label">
            Rok otrzymania prawa jazdy
          </InputLabel>
          <Select
            fullWidth
            labelId="driving-license-year-label"
            id="driving-license-year"
            name="drivingLicenseYear"
            label="Rok otrzymania prawa jazdy"
            value={drivingLicenseYear}
            onChange={handleDrivingLicenseYearChange}
          >
            <MenuItem value="0">Nie posiada</MenuItem>
            {years.reverse().map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          id="suggested-mileage"
          name="suggestedMileage"
          label="Sugerowana liczba kilometrów do przejechania"
          value={suggestedMileage}
          onChange={handleSuggestedMileageChange}
        />
      </Stack>

      {console.log(selectedDateRange)}
    </form>
    <Stack spacing={4} className='p-2 pl-5'>
      <h2 className="m-auto"> Uzupełnij formularz w celu wyceny wypożyczenia</h2>
    </Stack>


    {console.log(selectedDateRange)}
    </div>
  );
};

export default Step1;
