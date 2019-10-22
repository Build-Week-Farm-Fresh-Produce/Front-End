import React from 'react';

import '../App.css';
import styled from 'styled-components'

const ProductDetails = (props) => {

  console.log('product details:', props.match.params);
  console.log('product details/products:', props.products);

const currentProduct = props.products.find(curr => {
  return Number(curr.id) === Number(props.match.params.id)
})
console.log('currentProduct', currentProduct)

  return (
    <>
        <h1>{currentProduct.name}</h1>
        <h2>{`$ ${currentProduct.price.toFixed(2)}`}</h2>
        <h3>{`by ${currentProduct.farm}`}</h3>
        
    </>
  )
};

export default ProductDetails;