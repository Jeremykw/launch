import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.section`
  justify-content: center;
  align-items: top;
  height: 100%;
  font-weight: bold;
  overflow-y: auto;
`;

const GreyArea = styled.div`
  display: grid;
  height: auto;
  background-color: var(--clear);
  margin: 10vh 10vw 0 10vw;
  padding: 30px;
`;
const ContentArea = styled.div`
  background-color: var(--white);
  padding: 30px;
  line-height: 2rem;
  font-size: 1.5rem;
  /* box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25); */
  p {
    margin: 10px;
  }
`;

export default function About() {
  return (
    <Layout>
      <Container>
        <GreyArea>
          <ContentArea>
            <h1>Heading 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2>Heading 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h3>Heading 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </ContentArea>
        </GreyArea>
      </Container>
    </Layout>
  );
}
