import SignIn from './components/SignIn'
import Registration from './components/Registration'
import Home from './components/Home'
import UserForm from './components/UserForm'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Catalog from "./components/Catalog";
import ProductDetails from "./components/ProductDetails";
import { data } from './DummyData.js';
import './App.css';

function App() {

  // With dummy data:
  const [products, setProducts] = useState(data)

  // With axios call:
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //     axios
  //       .get('https://farmfreshproduce.herokuapp.com/api/farm/products')
  //       .then(response => {
  //         setProducts(response.data.products);
  //       })
  //       .catch(error => {
  //         console.error('Server Error', error);
  //       });
  // }, []);
  // End of axios call

  console.log('products data', products)

  return (
    <div className="App">

    <Router>
      <Route path='/signin' component={SignIn} />
      <Route path='/register' component={Registration} />
      <Route exact path="/" render={props => <Catalog {...props} products={products} />} />
      <Route exact path="/products/:product_id" render={props => <ProductDetails {...props} products={products}  />} />
      <Route exact path="/registration" render={props => <Registration {...props} />} />
      <Route exact path="/signin" render={props => <SignIn {...props} />} />

    </Router>
    </div>
  );
}

export default App;
