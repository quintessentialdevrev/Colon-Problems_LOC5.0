import React from 'react'
import ContactUs from '../contactus'
import Statistics from '../statistics'
import Testimonial from '../testimonial'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'
import Hero from '../hero'

export default function() {
  return (
    <div>
    <Navbar/>
    <Hero />
    <Testimonial />
    <Statistics />
    <ContactUs />
    <Footer/>
    </div>
  )
}
