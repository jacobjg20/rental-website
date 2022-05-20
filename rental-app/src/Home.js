import React from 'react';
import "./css/Home.css";
import Listing from "./Listing";
import house1 from './images/house1.jpg';
import house2 from './images/house2.jpg';
import house3 from './images/house3.jpg';

function Home(){

  return(
    <div className="Home">
      <h1>Tampa Bay Homes User: </h1>
      <Listing
        img = {house1}
        price = "1,300,000"
        address ="11850 dr Martin L king St N"
        zipCode ="33716"
        beds ="3"
        baths = "2"
       />

       <Listing
         img = {house2}
         price = "567,000"
         address ="11850 dr Martin L king St N"
         zipCode ="33716"
         beds ="3"
         baths = "2"
        />

        <Listing
          img = {house3}
          price = "325,000"
          address ="11850 dr Martin L king St N"
          zipCode ="33716"
          beds ="4"
          baths = "3"
         />
    </div>
  )
}

export default Home;
