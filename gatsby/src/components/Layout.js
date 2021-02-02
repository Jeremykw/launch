import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

import Header from './Header';
import BgAngleSolid from '../images/bgAngleSolid.svg';

const LayoutContainer = styled.section`
  position: absolute;
  overflow-x: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
  background: url(${BgAngleSolid}) no-repeat left bottom fixed;
  /* -webkit-background-size: 100vw auto;
  -moz-background-size: 100vw auto;
  -o-background-size: 100vw auto; */
  background-size: 100vw auto;
  color: var(--black);
  width: 100vw;
  height: 100vh;
  /* overflow: hidden; */
`;

const HeadContainer = styled.div`
  background: #ffffff50;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <LayoutContainer>
        <HeadContainer>
          <Header logo />
        </HeadContainer>

        {children}
      </LayoutContainer>
    </>
  );
}
