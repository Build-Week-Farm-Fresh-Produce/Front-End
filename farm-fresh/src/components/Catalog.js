import React, {useState} from 'react';
import { Link } from "react-router-dom";
// import { data } from '../DummyData.js';
import ProductCard from './ProductCard';
import Navbar from './Navbar';
// import ProductDetails from './ProductCard';
// import axios from 'axios';
import '../App.css';
import styled from 'styled-components'

const CardWrapper = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const Card = styled.div`
  height: 270px;
  background-color: springgreen;
  margin: 2%;
  padding: 1%;
`;

const Catalog = (props) => {

  const [lineItem, setLineItem] = useState([]);
  const [search, setSearch] = useState("");

  const searchProduct = event => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log('search', search)
  }

  const searchResults =  props.products.filter(product => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  console.log('searchResults', searchResults)
  
  let cartTotal = lineItem.reduce(function (accumulator, item) {
    return accumulator + item.price;
  }, 0);

  // console.log('products:', props.products);
  
  // const currentProduct = props.products.find(curr => {
  //   return Number(curr.id) === Number(props.match.params.id)
  // })

  // const addToCart = event => {
  //   setLineItem(currentProduct);
  //   console.log('added to cart');
    console.log('lineItem',lineItem);
  // }

  return (
    <>
      <Navbar  products={props.products} searchProduct={searchProduct} />
      <h1>Product Catalog</h1>
      <CardWrapper>
        {/* {props.products.map(product => ( This works but without the search */}
        {searchResults.map(product => (
          <Card>
          <Link exact to={`/products/${product.id}`}>
            <ProductCard key={product.id} {...props} product={product} lineItem={lineItem} />
          </Link>
          <button onClick={()=> setLineItem([...lineItem, product]) }>
            Add to cart
          </button>
          </Card>
        ))}
      </CardWrapper>
      <section className="cart">
        
          <table>
          <tr>
            <th>Product</th>
            <th>Farm</th>
            {/* <th>Qty</th> */}
            <th>Price</th>
          </tr>
          
          {lineItem.map(item => (
          <tr>
            <td>{item.name}</td>
            <td>{item.farm}</td>
            {/* <td>1</td> */}
            <td>{`$ ${item.price.toFixed(2)}`}</td>
          </tr>
            ))}
            <hr></hr>
          <tr>{`Cart Total: $ ${cartTotal}`}</tr>
          <button>Proceed to checkout</button>
        </table>
         
        
      </section>
    </>
  )
};


export default Catalog;