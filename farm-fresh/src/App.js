import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Catalog from "./components/Catalog"
import ProductDetails from "./components/ProductDetails"
import { data } from './DummyData.js';
import './App.css';

function App() {

  const [products, setProducts] = useState(data)

  return (
    <div className="App">
      <Route exact path="/" render={props => <Catalog {...props} products={products} />} />
      <Route exact path="/products/:id" render={props => <ProductDetails {...props} products={products} />} />

    </div>
  );
}

export default App;
