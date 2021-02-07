import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

import GlobalStyles from '../../styles/GlobalStyles';

const HauskeyStyles = styled.div`
  color: var(--h_black);
  overflow-y: scroll;
  overflow-x: hidden;
`;

export default function HauskeyLayout({ children }) {
  return (
    <HauskeyStyles>
      <GlobalStyles />
      {children}
    </HauskeyStyles>
  );
}
