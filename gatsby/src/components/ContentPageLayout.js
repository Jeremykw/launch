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

  max-width: 90vw;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  font-size: 2.2rem;
  line-height: 3.1rem;
  font-family: charter, Georgia, Cambria, 'Times New Roman', Times, serif;
  font-style: normal;
  letter-spacing: -0.05rem;
  p,
  blockquote {
    color: var(--grey);
    font-weight: 200;
  }
  blockquote {
    font-style: italic;
    border-left: 5px solid black;
    padding-left: 1rem;
    font-size: 2rem;
    }
  }
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
