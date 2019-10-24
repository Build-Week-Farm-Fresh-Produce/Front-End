import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Catalog from "./components/Catalog"
import ProductDetails from "./components/ProductDetails"
import Cart from "./components/Cart"
// import Modal from "./components/Modal";
// import useModal from './components/useModal';
import { data } from './DummyData.js';
import './App.css';

function App() {

  const [products, setProducts] = useState(data)

  // const {isShowing, toggle} = useModal();

  return (
    <div className="App">
      {/* <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      /> */}
      <Route exact path="/" render={props => <Catalog {...props} products={products} />} />
      <Route exact path="/products/:id" render={props => <ProductDetails {...props} products={products}  />} />
      {/* <Route exact path="/cart" render={props => <Cart {...props} products={products} lineItem={lineItem} setLineItem={setLineItem} />} /> */}
      <Route exact path="/cart" render={props => <Cart {...props} />} />

    </div>
  );
}

export default App;
