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
import AuthContext from './utils/authContext'
import { useState } from 'react'
export default function App() {
  const [token,setToken]=useState()
  const handleToken=(tk)=>{
    setToken(tk)
  }
  return (
    <>
    <AuthContext.Provider value={{token,handleToken}}>
      <Navbar/>
        <main>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route  path='/login-register' element={!token?<LoginRegister/>:<Navigate to={'/'}/>}/>
            <Route  path='/products' element={<Products/>}/>
            <Route  path='/product-details/:id' element={token?<ProductDetails/>:<Navigate to={'/login-register'}/>}/>
            <Route  path='*' element={<NotFoundPage/>}/>
          </Routes>
        </main>
      <Footer/>
      </AuthContext.Provider>
    </>
  )
}
