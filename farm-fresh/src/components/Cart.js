import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import styled from 'styled-components'

const CartWrapper = styled.section`
display: flex;
flex-wrap: wrap;
// justify-content: space-evenly;
width: 15%;
flex-direction: column;
align-items: flex-start;
`;

const Cartbutton = styled.button`
  // cart button
  background: #DAA520;
  font-size: 1rem;
  line-height: 2rem;
  color: white;
  border-radius: 5px;
  border: solid 1px lightgrey;
  margin: 2% auto;
`;

const Table = styled.table`
  width: 100%;
  // background-color: #556B2F;
  border-top: 1px solid #556B2F;
  border-bottom: 1px solid #556B2F;
  border-radius: 5px;
  border-collapse:collapse

`;

const Tablehead = styled.tr`
  background-color: #556B2F;
  color: #FFF8DC;

`;

const Tableitem = styled.div`
  text-align: left;
`;

const Tabledesc = styled.div`
  text-align: left;
  font-size: 12px;
  padding-left: 5%;
  color: #556B2F;
`;

export default function Cart(props) {
return (
  <>
  <CartWrapper>
  <Table>
    <tbody>
      <Tablehead>
        <th>Product</th>
        <th>Price</th>
      </Tablehead>
      
      {props.lineItem.map(item => (
      <tr>
        <td><Tableitem>{item.name}</Tableitem><Tabledesc>{item.farm}</Tabledesc></td>
        <td>{`$${item.price.toFixed(2)}`}</td>
      </tr>
        ))}
    </tbody>
    <tfoot>
      <Tablehead>
        <th>Total:</th>
        <td>{`$${props.cartTotal.toFixed(2)}`}</td>
      </Tablehead>
      
    </tfoot>
    
  </Table>
  <Link exact to={`/registration/`}><Cartbutton>Proceed to checkout</Cartbutton></Link>
  <button onClick={() => props.setLineItem([])}>Clear cart</button>
</CartWrapper>
</>
)
};