import React, { useState, useEffect } from 'react';
import '../App.css';
import styled from 'styled-components'

const CardDetails = styled.div`
  height: 250px;
`;

const Cardtext = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  max-width: -webkit-fill-available;
`;

const H3 = styled.h3`
  text-decoration: none;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const H5 = styled.h5`
  text-decoration: none;
`;

// STYLED COMPONENTS ENDS HERE


export default function ProductCard(props) {

  // console.log('card', props)
  return (
  <>
  
  <CardDetails key={props.product.id}>
    <Image src={props.product.img}/>
    <Cardtext>
      <H3>{props.product.name}</H3>
      <H5>{`by ${props.product.farm}`}</H5>
      <H3>{`$ ${props.product.price.toFixed(2)}`}</H3>
    </Cardtext>
  </CardDetails>
  </>
  )
};