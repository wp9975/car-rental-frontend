import React, { useState } from 'react'
import Confirmation from './subcomponents/Confirmation';
import PersonalDetails from './subcomponents/PersonalDetails';
import RentalDetails from './subcomponents/RentalDetails';

const Forms = (props) => {
  const {step} = props;
  const [formPersonalData, setFormPersonalData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    nationality: "",
    other: "",
  });

  const [formRentalData, setFormRentalData] = useState({
    rentalDays: "",
    distance: "",
    yearDrivingLicense: "",
    other: "",
  });

  const displayForm = (step) => {
    if (step === 1){
      return <RentalDetails/>
    } 
    else if (step === 2){
      return <PersonalDetails/>
    } 
    else if (step === 3){
      return <Confirmation/>
    } 
  }


  return (
    <div className='w-screen'>
      {displayForm(step)}
    </div>
  )
}

export default Forms