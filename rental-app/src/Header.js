import React, { useState } from 'react'
import './css/Header.css'
import { useStateValue } from './StateProvider'
import firebase from "firebase/compat/app";
import "firebase/compat/auth"

function Header(){
  const [email, setEmail] = useState('')

  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setEmail(user.email);
      } else {
        setEmail('');
      }
  });

  return (
    <nav className="header">
      <p>This is where the nav bar will go in the future: {email} </p>
      <div className="currentUser"></div>
    </nav>
  )
}

export default Header;
