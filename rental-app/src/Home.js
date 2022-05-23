import React, { useState } from 'react';
import "./css/Home.css";
import Listing from "./Listing";


function Home(){
  const [count, setCount] = useState([]);


  return(
    <div className="Home">
      <h1>Tampa Bay Homes</h1>
      <p></p>
    </div>
  )
}

export default Home;
