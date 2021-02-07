import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  height: 200px;
  background: var(--h_black);
  padding: 0;
  color: white;
  text-align: center;
`;
export default function Footer() {
  return (
    <FooterStyles>
      <h1>Footer</h1>
    </FooterStyles>
  );
}
