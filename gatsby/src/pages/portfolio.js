import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Card from '../components/Card';

const Container = styled.section`
  justify-content: center;
  align-items: top;
  height: 100%;
  font-weight: bold;
  overflow-y: auto;
`;

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  height: auto;
  margin: 10vh 10vw 0 10vw;
`;

export default function Portfolio() {
  return (
    <Layout>
      <Container>
        <CardContainer>
          <Card title="Portfolio1" />
          <Card title="Portfolio2" />
          <Card title="Portfolio3" />
          <Card title="Portfolio4" />
          <Card title="Portfolio4" />
          <Card title="Portfolio4" />
          <Card title="Portfolio4" />
          <Card title="Portfolio4" />
          <Card title="Portfolio4" />
          <Card title="Portfolio4" />
          <Card title="Portfolio4" />
        </CardContainer>
      </Container>
    </Layout>
  );
}
