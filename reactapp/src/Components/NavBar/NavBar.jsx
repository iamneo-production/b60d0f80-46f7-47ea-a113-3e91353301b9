import React from 'react'
import { Link } from "react-router-dom";
import "./index.scss"
import lighteningLogo from "../../assets/Lightening.png"
import BoltIcon from '@mui/icons-material/Bolt';

function NavBar() {
  return (
    <div className='navbar'>
          <Link className='link-logo' to="/" >
            <div className='nav-logo'>
              <img src={lighteningLogo} className="lightening-logo" alt="logo" />
              <div className='box'></div>
              <h1>Electrician</h1>
            </div>
          </Link>
          <Link className='link' to="/" >Home</Link>
          <Link className='link' to="/about" >About Us</Link>
          <Link className='link' to="/services" >Services</Link>
          <Link className='link' to="/prices" >Prices</Link>
          <Link className='link' to="/gallery" >Gallery</Link>
          <Link className='link' to="/blog" >Blog</Link>
          <Link className='link' to="/shop" >Shop</Link>
          <Link className='link' to="/faq" >Faq</Link>
          <Link className='link' to="/contact" >Contact</Link>
          <Link className='link-button' to="/appointment" >
              <div className="appointment-container">
                <BoltIcon className='link-icon'/>
                <p>Appointment</p>
              </div>
          </Link>
    </div>
  )
}

export default NavBar