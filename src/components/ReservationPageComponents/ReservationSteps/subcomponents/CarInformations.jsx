import { LocalOffer } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Chip,
  Box,
} from "@mui/material";
import React from "react";
import { Slide, Fade } from "react-reveal";

const CarInformations = (props) => {
  const { model, brand, category, type, fuel, fuelConsumption, quantity } =
    props.carItem;

  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={3}>
        <Slide right cascade>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom className="flex justify-between">
                {`${brand} ${model}`}
                <Box component="span" marginLeft={1}>
                  <Chip
                    icon={<LocalOffer />}
                    label={`Kategoria: ${category}`}
                    color="primary"
                    variant="outlined"
                    size="medium"
                  />
                </Box>
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6">Informacje o samochodzie:</Typography>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Typ:
                      </TableCell>
                      <TableCell align="right">{type}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Paliwo:
                      </TableCell>
                      <TableCell align="right">{fuel}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Średnie spalanie:
                      </TableCell>
                      <TableCell align="right">{fuelConsumption}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Liczba dostępnych sztuk:
                      </TableCell>
                      <TableCell align="right">{quantity}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
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
