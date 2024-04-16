import React from 'react'

import './App.css'
import {Route,Routes,Navigate} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import LoginRegister from './Pages/LoginRegister'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import NotFoundPage from './Pages/NotFound'
import {useSelector} from 'react-redux'
import Cart from './Pages/Cart'
export default function App() {
  const {token}=useSelector(state=>state.auth)
  return (
    <>
   
      <Navbar/>
        <main>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route  path='/login-register' element={!token?<LoginRegister/>:<Navigate to={'/cart'}/>}/>
            <Route  path='/products' element={<Products/>}/>
            <Route  path='/product-details/:id/:name' element={<ProductDetails/>}/>
            <Route  path='/cart' element={token?<Cart/>:<Navigate to={'/login-register'}/>}/>
            <Route  path='*' element={<NotFoundPage/>}/>
          </Routes>
        </main>
      <Footer/>
    
    </>
  )
}
