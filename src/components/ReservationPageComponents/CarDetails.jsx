import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-reveal";
import { Grid, Typography, Paper, Collapse, CardContent } from "@mui/material";
import CarInformations from "./ReservationSteps/subcomponents/CarInformations";
import { BiArrowToBottom } from "react-icons/bi";

const CarDetails = (props) => {
  const { imgUrl } = props.carItem;
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <Collapse in={scrollPosition === 0} className="h-full mx-auto mt-10 max-w-screen-2xl">
        <Fade>
          <Grid container className="" spacing={3}>
            <Grid item xs={12} md={6}>
              <img
                src={imgUrl}
                alt=""
                className="max-w-full  h-auto rounded-lg shadow-lg mx-auto object-cover"
              />
            </Grid>
            <CarInformations carItem={props.carItem} />
          </Grid>
        </Fade>
      </Collapse>

  );
};

export default CarDetails;
