import React, { useState } from 'react'
import Forms from './Forms'
import Steps from './subcomponents/Steps'

const Reservation = () => {
    const [step, setStep] = useState(1);
    function updateStep(step) {
        setStep(step);
      }
  return (
    <div>
        <Steps step={step}/>
        <Forms step={step}/>
        <div className='flex m-2 items-center justify-around'>
        {/* <button className={`${step === 1 ? 'bg-gray-100' :' bg-blue'} hover:border-2 text-white font-bold py-2 px-4 border-gray rounded`} disabled={step === 1} onClick={() => updateStep(step-1)}>Previous</button>
        <button className={`bg-blue hover:border-2 text-white font-bold py-2 px-4 border-gray rounded`} disabled={step === 3} onClick={() => updateStep(step+1)}>Next</button> */}
        </div>
    </div>
  )
}

export default Reservation