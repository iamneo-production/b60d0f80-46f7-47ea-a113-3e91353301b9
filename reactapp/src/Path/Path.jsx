import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from '../components/AboutUs/AboutUs'
import Appointment from '../components/Appointment/Appointment'
import Blog from '../components/Blog/Blog'
import Contact from '../components/Contact/Contact'
import Faq from '../components/Faq/Faq'
import Gallery from '../components/Gallery/Gallery'
import Home from '../components/Home/Home'
import Prices from '../components/Prices/Prices'
import Services from '../components/Services/Services'
import Shop from '../components/Shop/Shop'

function Path() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="prices" element={<Prices />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="blog" element={<Blog />} />
            <Route path="shop" element={<Shop />} />
            <Route path="faq" element={<Faq />} />
            <Route path="contact" element={<Contact />} />
            <Route path="appointment" element={<Appointment />} />
        </Routes>
    </div>
  )
}

export default Path