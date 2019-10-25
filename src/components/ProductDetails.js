import React, {useState} from 'react';
import Cart from './Cart'
import '../App.css';
import styled from 'styled-components'

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 70%;
  margin: 0 auto;
`;

const Back = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 5vh;
`;

const Product = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  color: black !important;
`;

const H1 = styled.h1`
  color: black !important;
`;

const H2 = styled.h2`
  color: black !important;
`;

const H3 = styled.h3`
  color: black !important;
`;

const Image = styled.img`
align-self: center
`;

const ProductDetails = (props) => {

  console.log('props', props)

  const currentProduct = props.products.find(curr => {
    return Number(curr.product_id) === Number(props.match.params.product_id)
  })

  return (
    
    <ProductWrapper>
      <Back><button onClick={()=> {
          props.history.goBack()
        }}
        >Back</button>
      </Back>
      <Product>
        
        <H1>{currentProduct.product_name}</H1>
        <Image src={currentProduct.img}/>
        <H2>{`$ ${currentProduct.price.toFixed(2)}`}</H2>
        <H3>{`by ${currentProduct.farm}`}</H3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, vitae ullam veritatis id sunt molestiae doloremque. A, culpa magni? Obcaecati, distinctio. Deserunt nostrum maxime excepturi laborum, numquam similique laboriosam quas!</p>
      </Product>
    </ProductWrapper>
  )
};

export default ProductDetails;