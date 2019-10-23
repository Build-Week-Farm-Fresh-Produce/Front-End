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
`;

const Logo = styled.div`
  width: 20%;
`;

const Navlinks = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
`;

const Search = styled.div`
  width: 25%;
`;

const Searchform = styled.input`
padding: 0.5rem;
margin: 0.5rem auto;
color: ${props => props.inputColor || "palevioletred"};
background: papayawhip;
border: none;
border-radius: 3px;
align-self: center;
font-size: 1.2rem;
width: 100%;
`;

const Account = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-evenly;
`;

export default function Navbar(props) {

  // console.log('card', props)
  return (
  <>
  
  <Nav>
    <Logo><h1>Fresh Market</h1></Logo>
    <Navlinks>
      <Link>Home</Link>
      <Link>Catalog</Link>
      <Link>About</Link>
    </Navlinks>
    <Search>
      <Searchform
        type="text"
        placeholder="Seach here"
        onChange={props.searchProduct}
      />
    </Search>
    <Account>
      <Link>Sign Up</Link>
      <Link>Login</Link>
    </Account>
  </Nav>
  </>
  )
};