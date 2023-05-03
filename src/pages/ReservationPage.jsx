import React from 'react'
import Reservation from '../components/Reservation/Reservation'
import ReservationForm from '../components/ReservationPageComponents/ReservationForm'
import ReservationService from '../components/ReservationPageComponents/ReservationService'

const ReservationPage = () => {
  return (
    <div className='h-screen'>
      <ReservationService/>
    </div>
  )
}

export default ReservationPage