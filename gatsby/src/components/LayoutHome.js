import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Logo from './Logo';
import BgAngleSolid from '../images/bgAngleSolid.svg';
import BgLaunch from '../images/bgLaunch.png';

const LayoutContainer = styled(BackgroundImage)`
  h1 {
    font-size: 4rem;
    line-height: 4rem;
  }
  h2 {
    font-size: 3rem;
  }
  width: 100vw;
  height: 100vh;
  @media (max-width: 1440px) {
    & {
      background-size: 100vw auto, auto 125vh !important;
    }
  }
  @media (max-width: 1350px) {
    & {
      background-size: cover, auto 150vh !important;
      background-position: left bottom !important;
    }
  }
  @media (max-width: 770px) {
    &,
    &::before,
    &::after {
      background: none !important;
      overflow: hidden !important;
      background: url(${BgAngleSolid}) no-repeat left bottom fixed !important;
    }
  }
  @media (max-width: 450px) {
    background-size: 200vw auto !important;
  }
`;

export default function Layout(props) {
  const { children, bgImage } = props;
  return (
    <>
      <GlobalStyles />
      <LayoutContainer
        fluid={bgImage.childImageSharp.fluid}
        style={{ backgroundPosition: '' }}
      >
        <Header color="var(--white)" />
        <Logo bgImage={bgImage} />
        {children}
      </LayoutContainer>
    </>
  );
}
