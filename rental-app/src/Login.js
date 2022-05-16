import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { auth } from './Firebase';

function Login(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate.push('/');
      })
      .catch((e) => alert(e.message))
  };

  const register = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then(auth => {
      navigate.push('/');
    })
    .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
          <button>Sign In</button>
        </form>

        <button>Create your Rental Account</button>
      </div>
    </div>
  )
}

export default Login;
