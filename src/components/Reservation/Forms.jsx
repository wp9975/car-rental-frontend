import React, { useState } from 'react'
import Confirmation from './subcomponents/Confirmation';
import PersonalDetails from './subcomponents/PersonalDetails';
import RentalDetails from './subcomponents/RentalDetails';

const Forms = (props) => {
  const {step} = props;
  const [carCategory, setCarCategory] = useState();
  const [calculations, setCalculations] = useState();
  const [formPersonalData, setFormPersonalData] = useState();
  const [formRentalData, setFormRentalData] = useState();

  const displayForm = (step) => {
    if (step === 1){
      return <RentalDetails setCarCategory={setCarCategory} calculations={calculations} setCalculations={setCalculations} updateStep={props.updateStep}/>
    } 
    else if (step === 2){
      return <PersonalDetails updateStep={props.updateStep} updateFormPersonalData={setFormPersonalData} formPersonalData={formPersonalData}/>
    } 
    else if (step === 3){
      return <Confirmation updateStep={props.updateStep}/>
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