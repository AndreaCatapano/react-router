import { useState } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'




function App() {

  return (
    <>  <BrowserRouter>

      <nav>
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
