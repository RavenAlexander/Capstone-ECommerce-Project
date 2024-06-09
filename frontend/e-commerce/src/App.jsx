import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kid_banner from './Components/assets/banner_kids.png'
import ShopCategory from './Pages/ShopCategory'

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/shop' element={<ShopCategory banner={men_banner} category='men'/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product' element={<Product/>}>
          <Route path='/product/:productId' element={<Product/>}/>
          </Route>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer />
        </BrowserRouter>
        </div>
    </>
  )
}

export default App
