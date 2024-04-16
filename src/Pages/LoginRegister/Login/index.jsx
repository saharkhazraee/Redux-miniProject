import React from "react";
import useFormFields from "../../../utils/useFormFields";
import {useDispatch} from 'react-redux'
import { login } from "../../../Store/Slices/Auth";
export default function Login({handlePageType}) {
  const [fields, handleChange] = useFormFields();
  const dispatch=useDispatch()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
        let res=await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(fields)
        })
        let data=await res.json()
            alert('login successfully')
            dispatch(login(data.token))
        
    }catch(err){
        alert('username or password incorrect')
    }
  }
  return (
    <form className="shadow-lg w-75 mx-auto my-3 p-3 rounded-3 " onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button className="btn btn-primary " onClick={handlePageType}>Don't Have a Account</button>
    </form>
  );
}
