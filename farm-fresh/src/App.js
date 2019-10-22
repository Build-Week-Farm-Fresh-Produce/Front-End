import SignIn from './components/SignIn'
import Registration from './components/Registration'
import Home from './components/Home'
import UserForm from './components/UserForm'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Catalog from "./components/Catalog"
import ProductDetails from "./components/ProductDetails"
import { data } from './DummyData.js';
import './App.css';
import FarmerHome from './components/FarmerHome'
import axiosWithAuth from './utils/axiosWithAuth';
import Inventory from './components/Inventory'
import UpdateForm from './components/UpdateForm'
import Item from './components/Item'
import NewItem from './components/NewItem'
import axios from'axios'

function App() {

  const [products, setProducts] = useState(data)

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3333/items')
      .then(res => setItems(res.data))
      .catch(error => console.log(error));
  }, []);

  

  return (


    <Router>
      <Route path='/signin' component={SignIn} />
      <Route path='/register' component={Registration} />
      <Route path='/farmerhome' component={FarmerHome} render={props =>(<Inventory {...props} items={items}/>)}/>
      <Route
        path="/item-list/:id"
        render={props => (
          <Item {...props} items={items} updateItems={setItems} />
        )}
      />
      <Route path="/new-item" component={NewItem} />
      <Route
        path="/edit-item/:id"
        render={props => (
          <UpdateForm {...props} items={items} updateItems={setItems} />
        )}
      />

      <Route exact path="/" render={props => <Catalog {...props} products={products} />} />
      <Route exact path="/products/:id" render={props => <ProductDetails {...props} products={products} />} />

    </Router>
  );
}

export default App;
