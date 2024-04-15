import React from 'react'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function LoginRegister() {
  const [pageType,setPageType]=useState('login')
  const handlePageType=()=>{
    setPageType(pageType==='login'?'register':'login')
  }

  return (
    <>
      {pageType==='login'?<Login handlePageType={handlePageType}/>:<Register handlePageType={handlePageType}/>}
    </>
  )
}
