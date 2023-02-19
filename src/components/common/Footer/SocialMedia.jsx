import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
const SocialMedia = () => {
  return (
    <div className='flex items-center justify-center m-2 space-x-4'>
        <div className='p-1 text-white border-white rounded-md bg-blackCoffee hover:border-2'><AiFillFacebook size={32}/></div>
        <div className='p-1 text-white border-white rounded-md bg-blackCoffee hover:border-2'><AiFillInstagram size={32}/></div>
        <div className='p-1 text-white border-white rounded-md bg-blackCoffee hover:border-2'><AiFillLinkedin size={32}/></div>
    </div>
  )
}

export default SocialMedia