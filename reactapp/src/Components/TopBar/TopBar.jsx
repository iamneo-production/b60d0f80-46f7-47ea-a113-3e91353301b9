import React from 'react'

import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "./index.scss"

function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbar-left'>
            <div className="topbar-left-left">
                <LocationOnIcon className='topbar-icon'/>
                <p className='topbar-paragraph'>8494 Signal Hill Road Manassas, VA, 20110</p>
            </div>
            <div className="topbar-left-right">
                <AccessTimeIcon className='topbar-icon'/>
                <p className='topbar-paragraph'>Mon-Fri 08:00 AM - 05:00 PM</p>
            </div>
        </div>
        <div className='topbar-right'>
            <div className='topbar-right-left'>
                <CallIcon className='topbar-icon-call'/>
                <p className='topbar-paragraph-call'>1 (800) 765-43-21</p>
            </div>  
            <div className='topbar-right-right'>
                <ShoppingCartIcon className='topbar-icon-shop'/>
            </div>
        </div>
    </div>
  )
}

export default TopBar