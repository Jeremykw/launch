import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  color: ${(props) => props.color || 'var(--black)'};
  text-decoration: none;
  cursor: pointer;
  z-index: 2;
  &:active {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 770px) {
    display: grid;
    align-items: center;
    padding-left: 30px;
    border-left: 6px solid var(--lightBlue);
    background-color: var(--lightBlue);
    color: var(--black);
    &:hover {
      border-left: 6px solid var(--red);
      transition: all 0.5s ease;
    }
  }
  @media (max-width: 450px) {
    & {
      font-size: 0.75em;
    }
  }
`;

export default function Nav(props) {
  const { color } = props;
  return (
    <>
      <StyledLink color={color} to="/">
        Home
      </StyledLink>
      <StyledLink color={color} to="/about">
        About
      </StyledLink>
      <StyledLink color={color} to="/contact">
        Contact
      </StyledLink>
      <StyledLink color={color} to="/portfolio">
        Portfolio
      </StyledLink>
    </>
  );
}
