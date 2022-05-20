import React from 'react';
import "./css/Listing.css";

function Listing({img, price, address, zipCode, beds, baths }){
 return (
   <div className="Listing">
    <img src={img} width="700px" height="500px" />
    <h2>$ {price}</h2>
    <p>{address} {zipCode}</p>
    <p>beds {beds} baths {baths}</p>
   </div>

 );
}

export default Listing;
