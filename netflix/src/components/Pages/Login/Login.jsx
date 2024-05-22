import React, { useState } from 'react';
import './Login.css';
import logo from '../../../assets/assets/logo.png';
import {login,signup}from '../../../firebase'
import netflix_spinner from '../../../assets/assets/netflix_spinner.gif'


const Login = () => {

  const [signState,setsignState]=useState("Sign In")
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [loading,setloading]=useState(false);

  const user_auth = async(event)=>{
    event.preventDefault()
    setloading(true);
    if(signState==="Sign In"){
      await login(email,password)
    }
    else{
      await signup(name,email,password)
    }
    setloading(false)

  }
  


  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img srcSet={logo} alt="Logo"  className='logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?
          <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder='Your Name' />:<></>}
          
          <input  value={email} onChange={(e)=>{setemail(e.target.value)}}
           type="email" placeholder='Email' />
          <input value={password} onChange={(e)=>{setpassword(e.target.value)}}
           type="password" placeholder='Password' />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type='checkbox' id='rememberMe' />
              <label htmlFor='rememberMe'>Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"? <p>New to Netflix? <span onClick={()=>{setsignState("Sign Up")}}>Sign up Now</span></p>
          :<p>Already have an account? <span onClick={()=>{setsignState("Sign In")}} >Sign In Now</span></p>}
         
          
        </div>
      </div>
    </div>
  );
};

export default Login;
