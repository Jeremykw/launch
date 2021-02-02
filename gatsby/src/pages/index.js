import { graphql } from 'gatsby';
import React, { Component } from 'react';
import LayoutHome from '../components/LayoutHome';
import SEO from '../components/SEO';

export default function Home({ data }) {
  return (
    <LayoutHome bgImage={data.bgImage}>
      <SEO title="Home" />
    </LayoutHome>
  );
}

export const bgImageQuery = graphql`
  query {
    bgImage: file(relativePath: { eq: "bgLaunch.png" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
