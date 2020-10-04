import React from 'React';
import styled from 'styled-components';

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
  margin: 10vh 10vw 0 10vw;
  padding: 30px;
`;
const ContentArea = styled.div`
  background-color: var(--white);
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
      <GreyArea>
        <ContentArea>{children}</ContentArea>
      </GreyArea>
    </Container>
  );
}
