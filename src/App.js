import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from './Footer';


const promise = loadStripe('pk_test_51Mf5jhSAsSWlZZGMUUYvf1pa39QheLENkDybBO3aFE68V5ZpsrLsfDlTnQW6JEg7o6pw0hLURtKs6mY534rJmfqO00yv2LJ4ol');

function App() {
  const [{}, dispatch] = useStateValue();


  useEffect(() => {
      // it will only run once when the app component loads
    auth.onAuthStateChanged( authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        //the user just logged in / the user was logged in

        dispatch ({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch ({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },  [] )


  return (
    // BEM
    <BrowserRouter>
      
        <Routes>

            <Route path="/login" element={ <div> <Login /> </div>} />

            <Route path="/" element={  <div> <Header />  <Home /> <Footer /> </div>} />

            <Route path="/checkout" element={ <div> <Header /> <Checkout /></div>} />

            <Route path="/payment"  element={<div> <Header /> <Elements stripe={promise}> <Payment /> </Elements> </div>} />
    
        </Routes>
    </BrowserRouter>
  );
}

export default App;
