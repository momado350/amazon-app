import React, {useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Payment from "./Payment";
import Subtotal from './Subtotal';
import Login from './Login';
import Orders from './Orders'
import {useStateValue} from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"



import './App.css';
import { auth } from './firebase';

const promise = loadStripe('pk_test_51HRn7dH2tBqJRWa37OfcgzKpkmz3ou5otJGOQDGr9uk7aD1DpxB46pDJOW8XyDhMf6jO8VdFzHtoYTRVAGXCAANx00yX5m2tDW');
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // this will run once when the app component loads
  auth.onAuthStateChanged(authUser => {
    console.log('THE USER IS >>>', authUser);
    if (authUser) {
      // the user just logged in/ the user was logged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    }else {
      dispatch({
        type: 'SET_USER',
        user: null
      })
      // the user is logged out
    }
  })
   }, [])
  return (
    //BEM
    <Router>
    <div className="App">
    {/*we trying to render header on both pages */}
    
      <Switch>
        <route path="/orders">
          <Header />
          <Orders />
        </route>

        <route path="/login">
          <Login />
        </route>
        
      <Route path="/checkout">
      <Header />
        
        <Checkout />

      </Route>
      <Route path="/payment">
        <Header />
        <Elements stripe={promise}>
        <Payment />
            {/* Wrap the Payment element in a higher order function */}
          
        </Elements>
        
          </Route>
      <Route path="/">
      <Header />
          
          <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
