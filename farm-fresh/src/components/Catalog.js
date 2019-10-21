import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { data } from '../DummyData.js';
import ProductCard from './ProductCard';
// import axios from 'axios';

import '../App.css';
import styled from 'styled-components'

const CardWrapper = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const Catalog = (props) => {

  const [products, setProducts] = useState(data)

  console.log('products:', products);

  return (
  <CardWrapper>
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </CardWrapper>
  )
};

export default Catalog;