import React, { useState, useEffect } from 'react';
import '../App.css';
import styled from 'styled-components'

const CardDetails = styled.div`
  height: 250px;
  margin: 2%;
  padding: 1%;
`;

export default function ProductCard(props) {

  // console.log('card', props)
  return (
  <>
  
  <CardDetails key={props.product.id}>
    <p>{props.product.name}</p>
    <p>{`Farm: ${props.product.farm}`}</p>
  </CardDetails>
  </>
  )
};