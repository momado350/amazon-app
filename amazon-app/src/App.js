import React, {useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Subtotal from './Subtotal';
import Login from './Login';
import {useStateValue} from './StateProvider';



import './App.css';
import { auth } from './firebase';


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
        <route path="/login">
          <Login />
        </route>
        
      <Route path="/checkout">
      <Header />
        
        <Checkout />

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
