import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-reveal";
import { Grid, Typography, Paper, Collapse, CardContent, Button } from "@mui/material";
import CarInformations from "./ReservationSteps/subcomponents/CarInformations";
import { BiArrowToBottom } from "react-icons/bi";

const CarDetails = ({carItem, setIsFormVisible}) => {



  return (
      <section className="h-screen flex justify-center items-center">
        <div className=" max-w-screen-2xl">
        <Fade>
          <Grid container className="" spacing={3}>
            <Grid item xs={12} md={6}>
              <img
                src={carItem.imgUrl}
                alt=""
                className="max-w-full  h-auto rounded-lg shadow-lg mx-auto object-cover"
              />
            </Grid>
            <CarInformations carItem={carItem} />
            <div className="flex justify-end my-4 w-full">
            <button className="px-8 py-4 bg-blue-400 hover:bg-blue-500 text-white rounded-lg text-lg font-medium mr-4" onClick={() => {setIsFormVisible(true)}}>Next step</button>
            </div>
          </Grid>
        </Fade>
        </div>
      </section>

  );
};

export default CarDetails;
