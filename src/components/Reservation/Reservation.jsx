import React, { useEffect, useState } from 'react'
import Forms from './Forms'
import Steps from './subcomponents/Steps'

const Reservation = () => {
    const [step, setStep] = useState(1);
    function updateStep(step) {
        setStep(step);
      }

      useEffect(() => {
        window.scrollTo(0, 0);
      }, [step]);

  return (
    <div className='bg-gradient-to-b from-slategray-100 to-gray-100 min-h-screen'>
        <Steps step={step}/>
        <Forms step={step} updateStep={updateStep}/>
    </div>
  )
}

export default Reservation