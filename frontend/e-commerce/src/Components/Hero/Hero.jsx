import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/herocoatgirl.png'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        
        <div>
            <div className="hero-hand-icon">
            {/* <img src={hand_icon} alt="" /> */}
      </div>
            <p>New Arrivals in Fashion</p>
        <h1>Trendy Clothing and Accessories for Everyone</h1>
      </div>
      <div className="hero-latest-btn">
        <Link to='/womens'><div>Latest Collection</div>
        <img src={arrow_icon} alt="" /></Link>
      </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
   
  )
}

export default Hero
