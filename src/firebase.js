import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC1h1LzWuNGA1V65XX9iE506utU8ZAk9NQ",
    authDomain: "challenge-2bc97.firebaseapp.com",
    projectId: "challenge-2bc97",
    storageBucket: "challenge-2bc97.appspot.com",
    messagingSenderId: "515289931949",
    appId: "1:515289931949:web:638c81bec48739b18e6624",
    measurementId: "G-NY7J6L2GQR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };