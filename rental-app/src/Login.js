import React, { useState } from 'react';
import './css/Login.css';
import { Link, useNavigate } from "react-router-dom";

function Login(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="login">
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
          <button className="login-loginButton">Sign In</button>
          <button className="login-loginButton">Logout</button>
        </form>

        <button className="login_registerButton">Create your Rental Account</button>
      </div>
    </div>
  )
}

export default Login;
