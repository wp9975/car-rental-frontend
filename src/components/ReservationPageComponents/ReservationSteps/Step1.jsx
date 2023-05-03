import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Box,
  Select,
  MenuItem,
  Stack,
  FormControl,
  InputLabel,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import calculateRental from "../../../functions/calculateRental";
import CountUp from "react-countup";
import { Fade } from "react-reveal";

const Step1 = ({carItem, setActiveStep, setToPay}) => {
  const [selectedDateRange, setSelectedDateRange] = useState([
    null,
    null,
  ]);
  const [drivingLicenseYear, setDrivingLicenseYear] = useState("");
  const [suggestedMileage, setSuggestedMileage] = useState("");
  const [results, setResults] = useState();
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - (currentYear - 65) + 1 },
    (_, index) => currentYear - 65 + index
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

  const calculateResults = () => {
    if (
      selectedDateRange[0] &&
      selectedDateRange[1] &&
      drivingLicenseYear &&
      suggestedMileage
    ) {
     
      setResults( 
        calculateRental(
          carItem.category,
          carItem.fuel,
          carItem.fuelConsumption,
          carItem.quantity,
          selectedDateRange[0],
          selectedDateRange[1],
          drivingLicenseYear,
          suggestedMileage
        )
    );
    }
  };

  useEffect(() => {
    calculateResults();
  }, [selectedDateRange, drivingLicenseYear, suggestedMileage]);

  const isFormComplete =
    selectedDateRange[0] &&
    selectedDateRange[1] &&
    drivingLicenseYear &&
    suggestedMileage;

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
              onChange={handleDateRangeChange}
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
              name="driving
              LicenseYear"
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
      </form>
      <Stack spacing={4} className="p-2 pl-5">
  {results ? (
    <div>
      <h2 className="m-auto">Wyniki obliczeń:</h2>
      <Fade>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow className="bg-gray-300 font-bold">
                    <TableCell>Nazwa</TableCell>
                    <TableCell align="right">Wartość</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Cena wynajmu za dzień</TableCell>
                    <TableCell align="right">
                      <CountUp end={results.dailyRentalPrice} decimals={2} suffix=" zł" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Liczba dni wynajmu</TableCell>
                    <TableCell align="right">
                      <CountUp end={results.rentalDays} />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Dystans</TableCell>
                    <TableCell align="right">
                      <CountUp end={results.distance} suffix=" km" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Zniżka dla kierowcy</TableCell>
                    <TableCell align="right">
                      {results.driverDiscount ? "Tak" : "Nie"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cena paliwa</TableCell>
                    <TableCell align="right">
                      <CountUp end={results.fuelPrice} decimals={2} suffix=" zł" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cena netto</TableCell>
                    <TableCell align="right">
                      <CountUp end={results.nettoPrice} decimals={2} suffix=" zł" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cena brutto</TableCell>
                    <TableCell align="right">
                      <CountUp end={results.bruttoPrice} decimals={2} suffix=" zł" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            </Fade>
      <Button
        style={{ marginTop: "20px", float: "right" }}
        variant="contained"
        color="primary"
        disabled={!isFormComplete}
        onClick={() => {
          setActiveStep(1);
          setToPay(results.bruttoPrice);
        }}
      >
        Następny krok
      </Button>
    </div>
  ) : (
    <h2 className="m-auto">Uzupełnij formularz w celu wyceny wypożyczenia</h2>
  )}
</Stack>

    </div>
  );
};

export default Step1;
