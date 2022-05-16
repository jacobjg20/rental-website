import React from 'react';
import "./Home.css";
import Listing from "./Listing";

function Home(){
  return(
    <div className="Home">
      <h1>Home Component</h1>
      <Listing
        price = "300,000"
        address ="300,000"
        zipCode ="300,000"
        beds ="300,000"
        baths ="300,000"
       />
    </div>
  )
}

export default Home;
