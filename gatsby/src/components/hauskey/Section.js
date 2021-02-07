import React from 'react';
import styled from 'styled-components';

const SectionStyles = styled.section`
  display: grid;
  justify-items: center;
  color: black;
  padding: 3rem;
  h3 {
    margin-top: 0;
    color: var(--h_grey);
    font-style: italic;
  }
`;

export default function Section({ children }) {
  return <SectionStyles>{children}</SectionStyles>;
}
