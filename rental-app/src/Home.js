import React, { useState } from 'react';
import "./css/Home.css";
import Listing from "./Listing";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from './Firebase';

function Home(){
  const [count, setCount] = useState([]);

  (async function (){
    const querySnapshot = await getDocs(collection(db, "Listings"));

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
  
    });
  })();

  return(
    <div className="Home">
      <h1>Tampa Bay Homes</h1>
      <p>{count}</p>
    </div>
  )
}

export default Home;
