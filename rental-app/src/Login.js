import React, { useState } from 'react';
import './css/Login.css';
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from './Firebase';
import { collection, getDocs } from "firebase/firestore";

// import { addDoc, collection } from "firebase/firestore";

function Login(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  (async function (){
    const querySnapshot = await getDocs(collection(db, "Listings"));
    querySnapshot.forEach((doc) => {
      console.log(JSON.stringify(doc.data())) 
    });
  })();

  // const docRef = addDoc(collection(db, "Listings"), {
  //   first: "Alan",
  //   middle: "Mathison",
  //   last: "Turing",
  //   born: 1912
  // });

  const login = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch((e) => alert(e.message))
  };

  const register = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then(auth => {
      navigate('/');
    })
    .catch((e) => alert(e.message));
  };

  const logout = (event) => {
    event.preventDefault();

    auth.signOut()
    .then(function() {
      console.log('signed out')
    })
    .catch(function(error) {
      // An error happened
    });
  }

  return (
    <div className="login">
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
          <button onClick={login} className="login-loginButton">Sign In</button>
          <button onClick={logout} className="login-loginButton">Logout</button>
        </form>

        <button onClick={register} className="login_registerButton">Create your Rental Account</button>
      </div>
    </div>
  )
}

export default Login;
