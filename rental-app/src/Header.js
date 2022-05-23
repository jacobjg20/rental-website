import React, { useState } from 'react'
import './css/Header.css'
import { useStateValue } from './StateProvider'


function Header(){
  const [email, setEmail] = useState('')

  return (
    <nav className="header">
      <p>This is where the nav bar will go in the future: {email} </p>
      <div className="currentUser"></div>
    </nav>
  )
}

export default Header;
