import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";
import ShoppingBasket from "./components/ShoppingBasket";
//import Login from "./components/Login";
import './App.css';
function App () {
  return (
    
    <Router>
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
