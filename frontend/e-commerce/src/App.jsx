import React from 'react'

import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        
        </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}

export default App
