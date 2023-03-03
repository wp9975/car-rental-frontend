import { Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Slide, Fade } from "react-reveal";

const CarInformations = (props) => {
  const { model, brand, category, type, fuel, fuelConsumption, quantity } =
    props.carItem;

  return (
    <Grid item xs={12} md={6}>
      <Paper className="" elevation={3}>
        <Slide right cascade>
        <Card>
            <CardContent>
          <Typography variant="h4" gutterBottom>
            {`${brand} ${model}`}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Kategoria: {category}
          </Typography>
          </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6">Informacje o samochodzie:</Typography>
              <Typography variant="body1">Typ: {type}</Typography>
              <Typography variant="body1">Paliwo: {fuel}</Typography>
              <Typography variant="body1">
                Średnie spalanie: {fuelConsumption}
              </Typography>
              <Typography variant="body1">
                Liczba dostępnych sztuk: {quantity}
              </Typography>
            </CardContent>
          </Card>
        </Slide>
        <Fade>
          <Card>
            <CardContent>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      </Paper>
    </Grid>
  );
};

export default CarInformations;
