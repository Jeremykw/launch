import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/hauskey/hauskey_logo.svg';
import Nav from './Nav';

const HeaderStyles = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 5rem 0 5rem;
  height: 20%;
  img {
    justify-self: end;
  }
`;
export default function Header() {
  return (
    <HeaderStyles>
      <Nav />
      <img src={Logo} alt="Hauskey logo" />
    </HeaderStyles>
  );
}
