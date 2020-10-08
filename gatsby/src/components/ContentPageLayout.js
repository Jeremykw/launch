import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  justify-content: center;
  align-items: top;
  height: auto;
  font-weight: bold;
  display: grid;
  overflow-y: auto;
`;

const ContentArea = styled.div`
  background-color: var(--white);
  margin: 5vh 10vw 10vw 10vw;
  padding: 30px;
  line-height: 2rem;
  font-size: 1.5rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  span {
    color: var(--brown);
  }
`;
export default function ContentPageLayout({ children }) {
  return (
    <Container>
      <ContentArea>{children}</ContentArea>
    </Container>
  );
}
