import React from 'react'
import ContactInfoNew from '../components/Contact/ContactInfoNew'
import Map from '../components/Contact/Map'
import ContactForm from '../components/Contact/ContactForm'
import ContactMap from '../components/Contact/ContactMap'
import ContactHero from '../components/Contact/ContactHero'

const ContactPage = () => {
  return (
    <div>
    <ContactHero />
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm />
        <ContactInfoNew />
      </div>
    </div>
    <ContactMap />
  </div>
  )
}

export default ContactPage