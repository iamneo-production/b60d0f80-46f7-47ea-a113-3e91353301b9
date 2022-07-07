import React from 'react'

import { Field, Form, Formik } from 'formik'

import house from "../../assets/house.jpg"
import electric from "../../assets/electric.jpg"
import transformer from "../../assets/transformer.jpg"
import profPic from "../../assets/pp.jpg"
import signature from "../../assets/signature.jpg"
import lightening from "../../assets/light.png"
import commercial from "../../assets/commercial.jpg"
import industrial from "../../assets/industrial.jpg"
import residential from "../../assets/residential.jpg"

import BoltIcon from '@mui/icons-material/Bolt';
import DoneIcon from '@mui/icons-material/Done';

import "./index.scss"

function Home() {
  return (
    <div className='home'>
      <div className="homepage-top">
          <img className='home-image' src={house} alt="house" />
          <p className='top-uppertext'>we can light everything</p>
          <h1 className='top-lowertext1'>Nothing is</h1>
          <h1 className='top-lowertext2'>Impossible for. Us</h1>
          <div className='request'>
            <div className='request-top'>
              <h1>Request Service Today</h1>
            </div>
            <div className='request-bottom'>
            <Formik
              initialValues={{
              name: '',
              email: '',
              number: '',
              }}
              onSubmit=""
            >
              <Form className='home-top-form'>
                <Field className="form-component" id="name" name="name" placeholder="Your Name" />
                <Field className="form-component" id="email" name="email" placeholder="Your e-mail" type="email" />
                <Field className="form-component" id="number" name="number" placeholder="Your Number" />
                <Field className="form-component" id="date" name="date" placeholder="Date" />
                <button className="form-button" type="submit"><BoltIcon className='link-icon'/>Get Service</button>
              </Form>
            </Formik>
            </div>
          </div>
      </div>
      <div className='middle1'>
        <div className='middle1-left'>
          <img className='electrician-image' src={electric} alt="electrician" />
          <img className='transformer-image' src={transformer} alt="transformer" />
        </div>
        <div className='middle1-right'>
          <div className='middle1-right-top'>
            <h1>About Us</h1>
            <h2>Outstanding Residential & Commercial Services</h2>
            <p>All of our services are backed by our 100% satisfaction guarantee. Our electricians can install anything from new security lighting for your outdoors to a whole home generator that will keep your appliances working during a power outage.</p>
            <ul>
              <li><DoneIcon className='done-icon' fontSize="small" />Full-service electrical layout, design</li>
              <li><DoneIcon className='done-icon' fontSize="small"/>Wiring and installation/upgrades</li>
              <li><DoneIcon className='done-icon' fontSize="small"/>Emergency power solutions (generators)</li>
              <li><DoneIcon className='done-icon' fontSize="small"/>Virtually any electrical needs you have – just ask!</li>
            </ul>
          </div>
          <div className='middle1-right-bottom'>
          <img className='profile-image' src={profPic} alt="profile" />
          <div className='middle1-right-bottom-text'>
            <h1>Mark Smith</h1>
            <h2>Your own electrician</h2>
          </div>
          <div className='middle1-right-midLine'/>
          <img className='signature-image' src={signature} alt="signature" />
          </div>
        </div>
      </div>
      <div className='middle2'>
        <div className='middle2-left'>
          <img src={commercial} alt="commercial" />
          <img className='lightening-sign' src={lightening} alt="sign" />
          <h1>Commercial</h1>
          <div className='middle2-circle'>+</div>
          <div className='middle2-circle-animate'></div>
        </div>
        <div className='middle2-center'>  
          <img src={industrial} alt="indusrial" />
          <img className='lightening-sign' src={lightening} alt="sign" />
          <h1>Industrial</h1>
          <div className='middle2-circle'>+</div>
          <div className='middle2-circle-animate'></div>
        </div>
        <div className='middle2-right'> 
          <img src={residential} alt="residential" />
          <img className='lightening-sign' src={lightening} alt="sign" />
          <h1>Residential</h1>
          <div className='middle2-circle'>+</div>
          <div className='middle2-circle-animate'></div>
        </div>
      </div>
    </div>
  )
}

export default Home