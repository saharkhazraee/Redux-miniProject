import React,{useContext} from "react";
import { Link, useLocation } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { logout } from "../../Store/Slices/Auth";
export default function Navbar() {
   const {token}=useSelector(state=>state.auth)
   const dispatch=useDispatch()
   const listLength=useSelector(state=>state.cart.list).length
    const x=useLocation()
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={'/'} >
          Navbar
        </Link>
        {console.log(x)}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/'} className="nav-link active" aria-current="page" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            {token?<li className="nav-item">
              <span className="nav-link" onClick={()=>dispatch(logout())}>
                Logout
              </span>
            </li> :<li className="nav-item">
              <Link className="nav-link" to="/login-register">
                Login/Register
              </Link>
            </li>}
            
          </ul>
          <Link to={'/cart'}><span>Cart {listLength!==0&&listLength} </span></Link>
        </div>
      </div>
    </nav>
  );
}
