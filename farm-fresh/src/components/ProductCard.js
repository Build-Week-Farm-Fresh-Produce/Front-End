import React, { useState, useEffect } from 'react';
import '../App.css';
import styled from 'styled-components'

const Card = styled.div`
  width: 20%;
  height: 270px;
  background-color: springgreen;
  margin: 2%;
  padding: 1%;
`;

export default function ProductCard(props) {

  return (
  <>
  
  <Card key={props.product.id}>
    <p>{props.product.name}</p>
    <p>{`Farm: ${props.product.farm}`}</p>
  </Card>
  </>
  )
};