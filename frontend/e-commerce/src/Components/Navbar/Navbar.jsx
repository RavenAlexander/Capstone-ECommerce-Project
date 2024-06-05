import React from 'react'
import './Navbar.css'

import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Fantastic Grim</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link to='/'>Home</Link> {menu==="home"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("shop")}}><Link to='/shop'>Shop</Link> {menu==="shop"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><Link to='/about'>About</Link>{menu==="about"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("cart")}}><Link to='/cart'>My Cart</Link>{menu==="cart"?<hr />:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar

