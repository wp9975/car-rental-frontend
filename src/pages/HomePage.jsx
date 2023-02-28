import React from 'react'
import Hero from '../components/Home/Hero'
import HowToRent from '../components/Home/HowToRent'
import Stats from '../components/Home/StatsSection'
import Blog from '../components/Home/Blog'
import Faq from '../components/Home/Faq'
import Gallery from '../components/Home/GallerySection'

const HomePage = () => {
  return (
    <div className='bg-white'>
      <Hero/>
      <HowToRent/>
      <Stats/>
      <Gallery/>
      <Blog/>
      <Faq/>
    </div>
  )
}

export default HomePage