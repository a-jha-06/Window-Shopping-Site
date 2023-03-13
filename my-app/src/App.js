import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";
import ShoppingBasket from "./components/ShoppingBasket";
import GoogleButton from 'react-google-button';
function App () {
  return (
    
    <Router>
      <GoogleButton
  label='Click to Sign In'
  onClick={() => { console.log('Google button clicked') }}
/>
      <Header/>
      <Routes>
        <Route exact path="/" element={
          <React.Fragment>
            <Banner/>
          <ProductList/>
          </React.Fragment>
        }/>
        <Route exact path="/checkout" element={
          <React.Fragment>
            <Checkout/>
            <ShoppingBasket/>
          </React.Fragment>
          }/>
      </Routes>
    </Router>
  );
}

export default App;
