import React from 'react'
import ContactUs from '../contactus'
import Statistics from '../statistics'
import Testimonial from '../testimonial'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'
import Hero from '../hero'
import Loading from '../Loading/Loading'

export default function() {
  const [myVal, setMyVal] = React.useState(true)
   
  React.useEffect(() => {
    setTimeout(() => setMyVal(false), 3000)
  })

  return (
    <div>
    {myVal ? <Loading /> : <div> <Navbar/>
    <Hero />
    <Testimonial />
    <Statistics />
    <ContactUs />
    <Footer/>
    </div>
    }
    </div>
  )
}
