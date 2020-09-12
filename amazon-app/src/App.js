import React from 'react';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Subtotal from './Subtotal'


import './App.css';

function App() {
  return (
    //BEM
    <Router>
    <div className="App">
    {/*we trying to render header on both pages */}
    <Header />
      <Switch>
      <Route path="/checkout">
        
        <Checkout />

      </Route>
      <Route path="/">
          
          <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
