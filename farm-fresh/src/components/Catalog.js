import React, {useState} from 'react';
import { Link } from "react-router-dom";
import ProductCard from './ProductCard';
import Cart from './Cart';
import Navbar from './Navbar';
import Modal from "./Modal";
import useModal from './useModal';
// import axios from 'axios';
import '../App.css';
import styled from 'styled-components'

const Main = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const CardWrapper = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
width: 85%;
`;

const CartWrapper = styled.section`
display: flex;
flex-wrap: wrap;
// justify-content: space-evenly;
width: 15%;
flex-direction: column;
align-items: flex-start;
`;

const Card = styled.div`
  height: 330px;
  background-color: #556B2F;
  padding: 0.5%;
  width: 30%;
  margin: 1% 0;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  border: solid 1px lightgrey;
`;

const StyledLink = styled(Link)`
  display:flex;
  flex-direction: column;
  align-items: space-between;
`;

const Button = styled.button`
  background: #DAA520;
  font-size: 1.2rem;
  line-height: 2rem;
  color: white;
  border-radius: 5px;
  border: solid 1px lightgrey;
  width: 80%;
  margin: 0 auto;
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
`;

// STYLED COMPONENTS ENDS HERE



const Catalog = (props) => {

  const [lineItem, setLineItem] = useState([]);
  const [search, setSearch] = useState("");
  const {isShowing, toggle} = useModal();

  const searchProduct = event => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log('search', search)
  }

  const searchResults =  props.products.filter(product => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });
  
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

if (cartTotal > 0) {

  return (
    <>
      <Navbar  products={props.products} searchProduct={searchProduct} setSearch={setSearch} />
      <h1>Product Catalog</h1>
      <Main>
        <CardWrapper>
          {searchResults.map(product => (
            <Card>
              <StyledLink exact to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                <ProductCard key={product.id} {...props} product={product} lineItem={lineItem} />
              </StyledLink>
              <Button onClick={()=> setLineItem([...lineItem, product]) }>
                Add to cart
              </Button>
            </Card>
          ))}
        </CardWrapper>
        {/* Mini Cart */}
        <Cart {...props} lineItem={lineItem} cartTotal={cartTotal} setLineItem={setLineItem} />
      }
      </Main>
    </>
)}

else {
  return (
    <>
    <Navbar  products={props.products} searchProduct={searchProduct} />
    <h1>Product Catalog</h1>
    <Main>
      <CardWrapper>
        {searchResults.map(product => (
          <Card>
            <StyledLink exact to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
              <ProductCard key={product.id} {...props} product={product} lineItem={lineItem} />
            </StyledLink>
            <Button onClick={()=> setLineItem([...lineItem, product]) }>
              Add to cart
            </Button>
          </Card>
        ))}
      </CardWrapper>
    </Main>
    </>
)}

};


export default Catalog;