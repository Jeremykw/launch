import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import NavBox from './NavBox';

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr minmax(250px, 1fr);
  padding: 8rem;
  height: 100%;
  background: radial-gradient(
    67.58% 99.56% at 22.09% 10.18%,
    #01142a60,
    #01142a90
  );
  h1 {
    margin-top: 0;
    margin-bottom: 8rem;
  }
  @media (max-width: 960px) {
    & {
      padding: 4rem;
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 650px) {
    & {
      h1,
      p {
        font-size: 2rem;
      }
    }
  }
`;

const SplashStyles = styled(BackgroundImage)`
  height: 80%;
`;

const TextStyles = styled.div`
  padding-top: 8rem;
  color: white;
  font-size: 3rem;
`;

export default function Splash({ bgImage, sections }) {
  return (
    <SplashStyles
      fluid={bgImage.childImageSharp.fluid}
      style={{ backgroundPosition: '' }}
    >
      <Container>
        <TextStyles>
          <h1>
            <strong>Your Pre-Construction Condo Marketplace</strong>
          </h1>
          <p>Earn up to 3% Cash Back</p>
        </TextStyles>
        <NavBox links={sections} />
      </Container>
    </SplashStyles>
  );
}
