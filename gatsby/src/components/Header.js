import React from 'react';
import styled from 'styled-components';
import MobileMenu from './MobileMenu';
import Nav from './Nav';
import Logo from '../images/launchPadLogo.svg';

const HeadContainer = styled.div`
  display: grid;
  padding-top: 5px;
  grid-template-columns: 1fr 1fr;
`;
const NavDeskTop = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 30px;
  align-content: center;
  justify-content: end;
  font-size: 2rem;
  padding-right: 30px;
  @media (max-width: 770px) {
    display: none;
  }
`;
const LogoContainer = styled.div`
  visibility: ${(props) => (props.logo ? 'visible' : 'hidden')};
  img {
    padding-left: 30px;
    height: 90px;
  }
`;
export default function Header(props) {
  return (
    <HeadContainer>
      <LogoContainer logo={props.logo}>
        <img src={Logo} alt="LaunchPad web development Logo" />
      </LogoContainer>
      <NavDeskTop>
        <Nav color={props.color} />
      </NavDeskTop>
      <MobileMenu />
    </HeadContainer>
  );
}
