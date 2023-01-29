import React from 'react'
import ContactForm from './subcomponents/ContactForm'

const Map = () => {
  return (
    <section className='bg-snow relative'>
        <div className='md:absolute h-96 md:h-auto inset-0'>
            <iframe width="100%" height="100%"  frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81860.24954454384!2d21.97402090533716!3d50.12123693661936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ce44faed6a8e1%3A0x74bd253bef8cd691!2sJasionka!5e0!3m2!1spl!2spl!4v1673268017140!5m2!1spl!2spl"></iframe>
        </div>
        <ContactForm/>
    </section>
  )
}

export default Map