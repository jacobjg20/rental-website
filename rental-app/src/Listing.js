import React from 'react';
import "./css/Listing.css";

function Listing({price, address, zipCode, beds, baths }){
 return (
   <div className="Listing">
    <h2>$ {price}</h2>
    <p>{address} {zipCode}</p>
    <p>beds {beds} baths {baths}</p>
   </div>

 );
}

export default Listing;
