import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { getCarItemBySlug } from "../../utils/getData";
import LoadingScreen from "../common/UI/LoadingScreen";
import imgBg1 from "../../assets/img/backgrounds/pexels-adonyi-gábor-8315432.jpg";
import ReservationForm from "./ReservationForm";
import CarDetails from "./CarDetails";

const ReservationService = () => {
  const { carSlug } = useParams();
  const [carItem, setCarItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    getCarItemBySlug(carSlug).then((cars) => {
      setCarItem(cars);
      setIsLoading(false);
    });
  }, [carSlug]);

  return (
    <div className={`h-screen `} style={{ backgroundImage: imgBg1 }}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          {isFormVisible ?  <ReservationForm carItem={carItem} /> : <CarDetails carItem={carItem} setIsFormVisible={setIsFormVisible}/>}
          
          
        </div>
      )}
    </div>
  );
};

export default ReservationService;
