import React from 'react'
import './Offer.css'
import exclusive_image from '../assets/exclusive_image.png'
import arrow_icon from '../assets/arrow.png'

const Offer = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive Offers</h1>
        <h2> For You</h2>
       
        <button>Check Now <img src={arrow_icon} alt=""/></button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offer
