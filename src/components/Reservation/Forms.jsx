import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCarItemBySlug } from "../../utils/getData";
import CarsData from '../../assets/data/CarsData';
import Confirmation from './subcomponents/Confirmation';
import PersonalDetails from './subcomponents/PersonalDetails';
import RentalDetails from './subcomponents/RentalDetails';

const Forms = (props) => {
  const {step} = props;
  const { carSlug } = useParams();
  const [carItem, setCarItem] = useState();
  const [carCategory, setCarCategory] = useState();
  const [calculations, setCalculations] = useState();

  const [formPersonalData, setFormPersonalData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    address: '',
    city: '',
    postalCode: ''
  });
 


  useEffect(() => {
    getCarItemBySlug(carSlug).then(cars =>{
      setCarItem(cars);
    })
  }, [carSlug]);

  const displayForm = (step) => {
    if (step === 1){
      return <RentalDetails carItem={carItem} setCarCategory={setCarCategory} calculations={calculations} setCalculations={setCalculations} updateStep={props.updateStep}/>
    } 
    else if (step === 2){
      return <PersonalDetails updateStep={props.updateStep} updateFormPersonalData={setFormPersonalData} formPersonalData={formPersonalData}/>
    } 
    else if (step === 3){
      return <Confirmation carItem={carItem} updateStep={props.updateStep} dataRentalForm={calculations} dataPersonal={formPersonalData}/>
    } 
  }


  return (
    <div className='w-screen'>
      {displayForm(step)}
      {console.log(carCategory)}
    </div>
  )
}

export default Forms