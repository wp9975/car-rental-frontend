import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import CarsData from '../../assets/data/CarsData';
import Confirmation from './subcomponents/Confirmation';
import PersonalDetails from './subcomponents/PersonalDetails';
import RentalDetails from './subcomponents/RentalDetails';

const Forms = (props) => {
  const {step} = props;
  const { carSlug } = useParams();
  const carItem = CarsData.find((item) => item.carLink === carSlug);
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