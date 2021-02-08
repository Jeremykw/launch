import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/hauskey/hauskey_logo.svg';

const FooterStyles = styled.footer`
  display: grid;
  height: 200px;
  background: var(--h_black);
  padding: 0;
  color: white;
  justify-items: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <h1>Footer</h1>
    </FooterStyles>
  );
}
