import React from 'react'
import SlidingBanner from '../../Components/SlidingBanner'
import AboutUs from '../../Components/AboutUs'
import ContactUs from '../../Components/ContactUs'
import KeyProduct from '../../Components/KeyProducts'
import Footer from '../../Components/Footer'
const Home = () => {
  return (
    <div>
        <SlidingBanner/>      
        <KeyProduct/>
        <AboutUs/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Home
