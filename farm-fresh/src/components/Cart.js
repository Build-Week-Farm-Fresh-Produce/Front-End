import React from 'react';

import '../App.css';
import styled from 'styled-components'

const Cart = (props) => {

  console.log('cart props:', props);
  console.log('cart items:', props.lineItem);

  return (
    <>
      <h1>My Cart</h1>
      <p>{props.lineItem.name}</p>
      {console.log('cart items:', props.lineItem.name)}
        
    </>
  )
};

export default Cart;