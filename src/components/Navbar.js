import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import styled from 'styled-components'

const Nav = styled.nav`
  height: 70px;
  width: 100%
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 2%;
`;

const Logo = styled.div`
  // width: 20%;
`;

const Title = styled.h1`
  color: #556B2F;
  font-size: 2.2rem;
`;

const Navlinks = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Search = styled.div`
  width: 35%;
`;

const Searchform = styled.input`
padding: 0.5rem;
margin: 0.5rem auto;
color: #8B4513;
background: #FFF8DC;
border: 1px solid #8B4513;
border-radius: 3px;
align-self: center;
font-size: 1.2rem;
width: 100%;
`;

const Account = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-evenly;
`;

export default function Navbar(props) {

  // console.log('card', props)
  return (
  <>
  
  <Nav>
    <Logo><Title>Farm Fresh Produce<i class="fas fa-carrot" aria-hidden="true"></i></Title></Logo>
    <Navlinks>
      <a href="/">Home</a>
      {/* <Link>Catalog</Link> */}
      <a href="/about">About</a>
    
    <Search>
      <Searchform
        type="text"
        placeholder="Seach here"
        onChange={props.searchProduct}
      />
      {/* <button onClick={() => props.setSearch("")}>Clear</button> */}
    </Search>
    <Account>
      <Link exact to={`/registration/`}>Register</Link>
      <Link exact to={`/signin/`}>Sign In</Link>
    </Account>
    </Navlinks>
  </Nav>
  </>
  )
};