import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { getCarItemBySlug } from "../../utils/getData";
import LoadingScreen from "../common/UI/LoadingScreen";
import CarDetails from "./CarDetails";
import ReservationForm from "./ReservationForm";

const ReservationService = () => {
  const { carSlug } = useParams();
  const [carItem, setCarItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCarItemBySlug(carSlug).then((cars) => {
      setCarItem(cars);
      setIsLoading(false);
    });
  }, [carSlug]);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <CarDetails carItem={carItem} />
          <ReservationForm carItem={carItem} />
        </div>
      )}
    </div>
  );
};

export default ReservationService;
