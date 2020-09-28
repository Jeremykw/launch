import React from 'react';
import styled from 'styled-components';
import logo from '../images/launchPadLogo.svg';
import BgLaunch from '../images/bgLaunch.png';
import angleLeft from '../images/leftAngleTransparent.svg';
import angleRight from '../images/rightAngleTransparent.svg';

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;
  grid-template-rows: auto 38vh 300px;
  color: white;

  /* @media (max-width: 1350px) {
    & {
      grid-template-columns: 310px 1fr;
    }
  } */
  @media (max-width: 770px) {
    grid-template-rows: auto 2fr 3fr;
  }
  @media (max-width: 770px) and (max-height: 620px) {
    & {
      margin-top: 10px;
      grid-gap: 10px;
      grid-template-columns: 2fr 3fr;
      grid-template-rows: 10vh 20vh 20vh;
    }
  }
  @media (max-width: 550px) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }
  @media (max-width: 300px) {
    & {
      grid-template-rows: 1fr 40vh 2fr;
    }
  }
  @media (max-width: 250px) {
    & {
    }
  }
`;
const LogoContainer = styled.div`
  display: grid;
  justify-content: end;
  padding-left: 30px;
  @media (max-width: 770px) and (max-height: 620px) {
    & {
      align-content: end;
      grid-column: 1;
      grid-row: 2;
    }
  }
  @media (max-width: 550px) {
    & {
      padding: 0;
      justify-content: center;
    }
  }
  @media (max-width: 550px) and (max-height: 620px) {
    grid-row: 1;
  }
`;
const LaunchLogo = styled.img`
  width: 100%;
  position: relative;
  right: -35%;
  @media (max-width: 770px) and (max-height: 620px) {
    & {
      right: 0;
    }
  }
  @media (max-width: 550px) {
    & {
      /* align-self: start;s */
      /* position: absolute; */

      top: 20px;
      padding-top: 10vh;
      width: 60vw;
      right: 0;
    }
  }
`;
const Tagline = styled.div`
  grid-row: 2;
  grid-column: 2;
  align-self: center;
  max-width: 900px;
  font-size: 4rem;
  z-index: 10;
  & ul {
    list-style-type: none;
    padding: 0;
  }
  @media (max-width: 770px) {
    & {
      font-size: 3em;
      color: var(--black);
    }
  }
  @media (max-width: 770px) and (max-height: 620px) {
    & {
      grid-column: 1;
      grid-row: 3;
      align-self: center;
      text-align: right;
      line-height: 3rem;
      font-size: 2rem;
    }
  }
  /* @media (max-width: 770px) and (max-height: 400px) {
      & {
        font-size: 2em;
      }
    } */
  @media (max-width: 550px) {
    & {
      grid-column: 1 / -1;
      justify-self: center;
    }
  }
  @media (max-width: 300px) {
    & {
      font-size: 2.5em;
    }
  }
  @media (max-width: 250px) {
    & {
      font-size: 2em;
    }
  }
`;
const MobileImage = styled.img`
  display: none;
  width: 90%;
  grid-column: 2;
  justify-self: start;
  grid-row: 3;
  border: 2px solid var(--black);
  @media (max-width: 770px) {
    & {
      display: block;
    }
  }
  @media (max-width: 770px) and (max-height: 620px) {
    & {
      height: 45vh;
      width: auto;
      justify-self: center;
      grid-column: 2;
      grid-row: 2 / 3;
    }
  }
  @media (max-width: 550px) {
    & {
      width: 60vw;
      grid-column: 1 / -1;
      justify-self: center;
    }
  }
  @media (max-width: 300px) {
    & {
      width: 80vw;
    }
  }
  @media (max-width: 250px) {
    & {
      width: 90vw;
    }
  }
`;

const AngleLeft = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 3;
  align-content: end;
  overflow: visible;
  float: right;
  @media (max-width: 770px) {
    display: none;
  }
  img {
    width: 100%;
  }
`;
const AngleRight = styled.div`
  display: grid;
  grid-column: 2;
  grid-row: 3;
  overflow: visible;
  align-content: end;
  @media (max-width: 770px) {
    display: none;
  }
  img {
    width: 100%;
  }
`;
export default function Logo(props) {
  const { transparent } = props;
  return (
    <Container>
      {' '}
      <LogoContainer>
        <LaunchLogo src={logo} id="logo" />
      </LogoContainer>
      <Tagline>
        <ul>
          <li>Simple Solutions for</li>
          <li>Modern Business</li>
        </ul>
      </Tagline>
      <MobileImage src={BgLaunch} />
      <AngleLeft>
        <img src={angleLeft} alt="" />
      </AngleLeft>
      <AngleRight>
        <img src={angleRight} alt="" />
      </AngleRight>
    </Container>
  );
}
