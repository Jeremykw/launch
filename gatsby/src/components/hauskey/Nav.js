import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  font-size: 1.5rem;

  align-self: center;
  span {
    font-weight: bold;
    margin: 0 1rem 0 1rem;
  }
`;
export default function Nav() {
  return (
    <NavStyles>
      <span>About</span>
      <span>How it Works</span>
      <span>LOGIN</span>
      <span>CAD</span>
    </NavStyles>
  );
}
