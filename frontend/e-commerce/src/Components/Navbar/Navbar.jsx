import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import {Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

const [menu, setMenu] = useState("home")
const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link to='/'><img src={logo} alt="" /></Link>
        <p>Fantastic Grim</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link> {menu==="home"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/shop'>Shop</Link> {menu==="shop"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><Link style={{ textDecoration: 'none'}} to='/about'>About</Link>{menu==="about"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("cart")}}><Link style={{ textDecoration: 'none'}} to='/cart'>My Cart</Link>{menu==="cart"?<hr />:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar

