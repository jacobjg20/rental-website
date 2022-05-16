import firebase from "firebase/compat/app";
import "firebase/compat/auth"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDBboPvfFaCGgc_mAYqr1dl1rF2W0pnDS0",
  authDomain: "rental-app-3e55f.firebaseapp.com",
  projectId: "rental-app-3e55f",
  storageBucket: "rental-app-3e55f.appspot.com",
  messagingSenderId: "302763296872",
  appId: "1:302763296872:web:879d2eb602f76c58e9d3dd",
  measurementId: "G-YYDHR1Q8R6"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
