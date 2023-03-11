import React from 'react'
import ContactUs from '../contactus'
import Statistics from '../statistics'
import Testimonial from '../testimonial'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'

export default function() {
  return (
    <div>
    <Navbar/>
    <Testimonial />
    <Statistics />
    <ContactUs />
    <Footer/>
  
    </div>
  )
}
