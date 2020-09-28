import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

import Header from './Header';
import Logo from './Logo';
import BgAngleSolid from '../images/bgAngleSolid.svg';
import BgLaunch from '../images/bgLaunch.png';

const LayoutContainer = styled.section`
  position: absolute;
  background: url(${BgLaunch}) no-repeat right bottom fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: Geneva;
  width: 100vw;
  height: 100vh;
  background-color: var(--blue);
  overflow: hidden;
  @media (max-width: 1440px) {
    & {
      background-size: 100vw auto, auto 125vh;
    }
  }
  @media (max-width: 1350px) {
    & {
      background-size: cover, auto 150vh;
      background-position: left bottom;
    }
  }
  @media (max-width: 770px) {
    & {
      background: none;
      overflow: hidden;
      background: url(${BgAngleSolid}) no-repeat left bottom fixed;
    }
  }
  @media (max-width: 450px) {
    background-size: 200vw auto;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <LayoutContainer>
        <Header color="var(--white)" />
        <Logo />
        {children}
      </LayoutContainer>
    </>
  );
}
