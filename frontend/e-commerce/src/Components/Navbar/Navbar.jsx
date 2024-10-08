import React, { useContext, useState, useRef } from 'react'
import './Navbar.css'
import logo from '../assets/shopping-bag.png'
import cart_icon from '../assets/cart_icon.png'
import {Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../assets/drop-down-list.svg'

const Navbar = () => {

const [menu, setMenu] = useState("home")
const {getTotalCartItems} = useContext(ShopContext)
const menuRef = useRef();

const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
}


  return (
    <div className='navbar'>
      <div className="nav-logo" onClick={()=>{setMenu("home")}}>
        <Link to='/'><img src={logo} alt="" />
        <p>StyleStation</p></Link>{menu==="home"?<hr />:<></>}
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link> {menu==="home"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none'}} to='/mens'>Men</Link> {menu==="mens"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none'}} to='/womens'>Women</Link> {menu==="womens"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to='/kids'>Kids</Link> {menu==="kids"?<hr />:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={() => {localStorage.removeItem('auth-token');
          window.location.replace('/')
        }}>Log Out</button>:<Link to='/login'><button>Log In</button></Link>}
        
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar

