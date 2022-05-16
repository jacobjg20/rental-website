import React from 'react';
import "./Listing.css";

function Listing({ price, address, zipCode, beds, baths }){
 return (
   <div className="Listing">
    <h2>$ {price}</h2>
    <p>{address} {zipCode}</p>
    <p>{beds} {baths}</p>
   </div>
 );
}

export default Listing;
