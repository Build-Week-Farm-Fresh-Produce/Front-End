import React, {useState} from 'react';
import Cart from './Cart'
import '../App.css';
import styled from 'styled-components'

const ProductDetails = (props) => {

  const [lineItem, setLineItem] = useState([]);

  const currentProduct = props.products.find(curr => {
    return Number(curr.id) === Number(props.match.params.id)
  })

  const addToCart = event => {
    // lineItem.push(currentProduct);
    setLineItem(currentProduct);
    console.log('added to cart');
    console.log('lineItem',lineItem);
  }

  return (
    <>
        <h1>{currentProduct.name}</h1>
        <h2>{`$ ${currentProduct.price.toFixed(2)}`}</h2>
        <h3>{`by ${currentProduct.farm}`}</h3>
        <button onClick={()=> {
          addToCart()
        }}
        >Add to cart</button>
        
        <hr></hr>
        <Cart {...props} lineItem={lineItem} />
    </>
  )
};

export default ProductDetails;