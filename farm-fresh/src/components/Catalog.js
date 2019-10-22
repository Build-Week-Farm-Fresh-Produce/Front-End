import React from 'react';
import { Link } from "react-router-dom";
// import { data } from '../DummyData.js';
import ProductCard from './ProductCard';
// import ProductDetails from './ProductCard';
// import axios from 'axios';
import '../App.css';
import styled from 'styled-components'

const CardWrapper = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const Catalog = (props) => {

  console.log('products:', props.products);

  return (
    <>
      <h1>Product Catalog</h1>
      <CardWrapper>
        {props.products.map(product => (
          <Link exact to={`/products/${product.id}`}>
            <ProductCard key={product.id} {...props} product={product} />
          </Link>
          
        ))}
      </CardWrapper>
    </>
  )
};


export default Catalog;