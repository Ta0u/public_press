import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRouter } from 'next/router';
function Navbar() {

  const router = useRouter();

  const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


  const Logo = styled.div`
  font-size: 1.5rem;
  font-family: 'Sans Serif';
`;


  const NavLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

  const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin-right: 1rem;

   &:hover {
     text-decoration: underline;
   }
`;

  return (
    <NavbarContainer>
      <Logo>MyApp</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
}


export default Navbar;
