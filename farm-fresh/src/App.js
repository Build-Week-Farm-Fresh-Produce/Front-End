import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Catalog from "./components/Catalog"
import ProductDetails from "./components/ProductDetails"
import Cart from "./components/Cart"
import { data } from './DummyData.js';
import './App.css';

function App() {

  const [products, setProducts] = useState(data)

  // const [lineItem, setLineItem] = useState([]);

  return (
    <div className="App">
      <Route exact path="/" render={props => <Catalog {...props} products={products} />} />
      <Route exact path="/products/:id" render={props => <ProductDetails {...props} products={products} />} />
      {/* <Route exact path="/cart" render={props => <Cart {...props} products={products} lineItem={lineItem} setLineItem={setLineItem} />} /> */}
      <Route exact path="/cart" render={props => <Cart {...props} />} />

    </div>
  );
}

export default App;
