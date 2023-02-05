import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-20 '>
    <div className='w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center'>
    <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-male">404</p>
    <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-male mt-2">Page Not Found</p>
    <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">Sorry, the page you are looking for could not be found.</p>
    <Link to="/car-rental-frontend/" className="flex items-center space-x-2 bg-blue text-white hover:bg-blue-700  px-4 py-2 rounded transition duration-150">
        Return Home
    </Link>
    </div>
    <div className='lg:w-1/2 m-auto'>
        <img className='' alt='' src='https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
    </div>
</div>
  )
}

export default ErrorPage