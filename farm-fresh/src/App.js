import SignIn from './components/SignIn'
import Registration from './components/Registration'
import Home from './components/Home'
import UserForm from './components/UserForm'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Catalog from "./components/Catalog"
import ProductDetails from "./components/ProductDetails"
import { data } from './DummyData.js';
import './App.css';

function App() {

  const [products, setProducts] = useState(data)

  return (

    <Router>
      <Route path='/signin' component={SignIn} />
      <Route path='/register' component={Registration} />
      <Route exact path="/" render={props => <Catalog {...props} products={products} />} />
      <Route exact path="/products/:id" render={props => <ProductDetails {...props} products={products} />} />

    </Router>
  );
}

export default App;
