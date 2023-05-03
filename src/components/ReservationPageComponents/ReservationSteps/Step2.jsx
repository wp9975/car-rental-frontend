import React, { useState } from "react";
import {
  Typography,
  Grid,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import ServiceCard from "./subcomponents/ServiceCard";

const insuranceOptions = [
  {
    id: 1,
    name: "Podstawowe ubezpieczenie",
    description:
      "Obejmuje odpowiedzialność cywilną i ubezpieczenie od kradzieży",
    price: 100,
    image:
      "https://cdn.pixabay.com/photo/2016/12/30/22/07/machine-1941670_960_720.jpg",
  },
  {
    id: 2,
    name: "Ubezpieczenie komfortowe",
    description:
      "Rozszerzone ubezpieczenie obejmujące większość szkód oraz kradzież",
    price: 200,
    image:
      "https://cdn.pixabay.com/photo/2014/11/20/19/16/insurance-539659__340.jpg",
  },
  {
    id: 3,
    name: "Ubezpieczenie premium",
    description: "Najszerszy zakres ochrony, ubezpieczenie od wszystkich ryzyk",
    price: 300,
    image:
      "https://cdn.pixabay.com/photo/2021/05/10/10/19/car-crash-6243099__340.jpg",
  },
  {
    id: 4,
    name: "Ubezpieczenie szkód osobowych",
    description:
      "Dodatkowe ubezpieczenie na wypadek szkód osobowych dla pasażerów",
    price: 150,
    image:
      "https://cdn.pixabay.com/photo/2015/05/02/14/05/wheelchair-749985__340.jpg",
  },
  {
    id: 5,
    name: "Ubezpieczenie szkód materialnych",
    description: "Dodatkowe ubezpieczenie na wypadek szkód materialnych",
    price: 120,
    image:
      "https://cdn.pixabay.com/photo/2016/08/25/20/14/crash-test-1620592_960_720.jpg",
  },
];

const services = [
  {
    id: 6,
    name: "GPS",
    description: "Wypożycz nawigację GPS",
    price: 50,
    image:
      "https://cdn.pixabay.com/photo/2016/10/09/16/08/navigation-1726067_960_720.jpg",
  },
  {
    id: 7,
    name: "Dodatkowy kierowca",
    description: "Dodaj drugiego kierowcę do wypożyczenia",
    price: 100,
    image:
      "https://cdn.pixabay.com/photo/2014/07/31/23/33/driving-407181_960_720.jpg",
  },
  {
    id: 8,
    name: "Fotelik dziecięcy",
    description:
      "Wypożycz fotelik dziecięcy dla bezpieczeństwa Twojego dziecka",
    price: 30,
    image:
      "https://cdn.pixabay.com/photo/2018/10/31/14/55/joie-baby-car-seat-3785975_960_720.jpg",
  },
  {
    id: 9,
    name: "Wi-Fi w samochodzie",
    description: "Korzystaj z bezprzewodowego Internetu podczas podróży",
    price: 40,
    image:
      "https://cdn.pixabay.com/photo/2020/03/04/07/28/blank-4900735_960_720.jpg",
  },
  {
    id: 10,
    name: "Ski box",
    description:
      "Przewieź swój sprzęt narciarski w bezpiecznym i wygodnym ski boxie",
    price: 80,
    image:
      "https://cdn.pixabay.com/photo/2015/06/15/19/19/ski-810500_960_720.jpg",
  },
];

const Step2 = ({
  toPay,
  setToPay,
  setActiveStep,
  selectedServices,
  setSelectedServices,
}) => {
  const [options, setOptions] = useState([...insuranceOptions, ...services]);

  const handleSelect = (id) => {
    const isSelected = selectedServices.some((s) => s.id === id);
    const service = options.find((s) => s.id === id);

    setSelectedServices((prev) =>
      isSelected ? prev.filter((s) => s.id !== id) : [...prev, service]
    );

    if (isSelected) {
      setToPay(toPay - service.price);
    } else {
      setToPay(toPay + service.price);
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Opcje ubezpieczeń
      </Typography>
      <Grid container spacing={4}>
        {insuranceOptions.slice(0, 3).map((option) => (
          <Grid item xs={12} sm={6} md={4} key={option.id}>
            <ServiceCard
              service={option}
              onSelect={handleSelect}
              selected={selectedServices.some((s) => s.id === option.id)}
            />
          </Grid>
        ))}
      </Grid>
      <Accordion className="mt-3">
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Pokaż więcej opcji ubezpieczeń</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={4}>
            {insuranceOptions.slice(3).map((option) => (
              <Grid item xs={12} sm={6} md={4} key={option.id}>
                <ServiceCard
                  service={option}
                  onSelect={handleSelect}
                  selected={selectedServices.some((s) => s.id === option.id)}
                />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Typography variant="h5" gutterBottom style={{ marginTop: "1rem" }}>
        Dodatki
      </Typography>
      <Grid container spacing={4}>
        {services.slice(0, 3).map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <ServiceCard
              service={service}
              onSelect={handleSelect}
              selected={selectedServices.some((s) => s.id === service.id)}
            />
          </Grid>
        ))}
      </Grid>
      <Accordion className="mt-3">
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Pokaż więcej dodatków</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={4}>
            {services.slice(3).map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <ServiceCard
                  service={service}
                  onSelect={handleSelect}
                  selected={selectedServices.some((s) => s.id === service.id)}
                />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* <Box
        mt={4}
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Typography variant="h6">
          Suma dodatkowych usług: {selectedServicesSum.toFixed(2)} zł
        </Typography>
        <Typography variant="h6">
          Łącznie do zapłaty: {(toPay + selectedServicesSum).toFixed(2)} zł
        </Typography>
      </Box> */}
      <Button
        variant="contained"
        color="primary"
        style={{ float: "right", margin: "5px" }}
        onClick={() => {
          setToPay(toPay);
          setActiveStep(2);
        }}
      >
        Następny krok
      </Button>
    </div>
  );
};

export default Step2;
