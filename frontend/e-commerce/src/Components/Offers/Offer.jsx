import React from 'react'
import './Offer.css'
import exclusive_image from '../assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive Offers</h1>
        <h1> For You</h1>
       
        <button>Check Now <img src="/src/Components/assets/arrow.png" alt=""/></button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offer
