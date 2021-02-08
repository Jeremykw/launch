import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  font-size: 1.5rem;

  align-self: center;
  span {
    font-weight: bold;
    margin: 0 1rem 0 1rem;
  }
  span:hover {
    color: var(--h_grey);
  }
  @media (max-width: 860px) {
    & {
      display: none;
    }
  }
`;

const MenuHamburger = styled.svg`
  display: grid;
  align-self: center;
  fill: var(--h_black);
  @media (min-width: 860px) {
    & {
      display: none;
    }
  }
`;
export default function Nav() {
  return (
    <>
      <MenuHamburger viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="20" />
        <rect y="30" width="100" height="20" />
        <rect y="60" width="100" height="20" />
      </MenuHamburger>
      <NavStyles>
        <span>About</span>
        <span>How it Works</span>
        <span>LOGIN</span>
        <span>CAD</span>
      </NavStyles>
    </>
  );
}
