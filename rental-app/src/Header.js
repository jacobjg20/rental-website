import React from 'react'
import './Header.css'
import logo from './logo.png'
import { useStateValue } from './StateProvider'

function Header(){
  const [{ basket }] = useStateValue();

  return (
    <nav className="header">
      <h1>This is where the nav bar will go in the future</h1>
      <img src={logo} alt="Logo" />

      <h3>Here is where the data will change: {basket?.length} </h3>
    </nav>
  )
}

export default Header;
