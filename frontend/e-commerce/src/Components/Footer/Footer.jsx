import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt='' />
        <p>Fantastic Grim</p>
      </div>
      <ul className="footer-links">
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ Raven Alexander 2024</p>
      </div>
    </div>
  )
}

export default Footer
