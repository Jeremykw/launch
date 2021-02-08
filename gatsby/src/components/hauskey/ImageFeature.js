import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Section from './Section';

const MappingSection = styled(BackgroundImage)`
  width: 100%;
  height: 200px;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;

export default function ImageFeature({ light, image, linkId, title, tagLine }) {
  return (
    <MappingSection light id={linkId} fluid={image.childImageSharp.fluid}>
      <Section>
        <h1>{title}</h1>
        <h3>{tagLine}</h3>
      </Section>
    </MappingSection>
  );
}
