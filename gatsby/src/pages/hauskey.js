import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import HauskeyLayout from '../components/hauskey/HauskeyLayout';
import Header from '../components/hauskey/Header';
import Splash from '../components/hauskey/Splash';
import Section from '../components/hauskey/Section';
import Feature from '../components/hauskey/Feature';
import Footer from '../components/hauskey/Footer';

const TopSection = styled.div`
  height: 100vh;
`;

export default function Hauskey({ data }) {
  const sections = [
    'Quick Search',
    'Mapping Features',
    'Project Listings',
    'Suit Reservations',
    'Mobile App',
  ];
  const quickSearchImages = [
    data.condo_8,
    data.condo_1,
    data.condo_2,
    data.condo_3,
  ];
  const projectListingImages = [
    data.condo_4,
    data.condo_5,
    data.condo_6,
    data.condo_7,
  ];

  return (
    <>
      <HauskeyLayout>
        <TopSection>
          <Header />
          <Splash bgImage={data.hauskey} sections={sections} />
          <Section id="advanced_search">
            <Feature
              images={quickSearchImages}
              title="Advanced Search Features"
              tagline="Find your dream condo in moments"
            />
          </Section>
          <Section id="mapping">
            <Feature
              images={projectListingImages}
              title="Project Listings"
              tagline="Many onions to chose from"
            />
          </Section>
          <Footer />
        </TopSection>
      </HauskeyLayout>
    </>
  );
}

export const HauskeyImageQuery = graphql`
  query {
    condo_1: file(relativePath: { eq: "hauskey/condos/condo_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    condo_2: file(relativePath: { eq: "hauskey/condos/condo_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    condo_3: file(relativePath: { eq: "hauskey/condos/condo_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    condo_4: file(relativePath: { eq: "hauskey/condos/condo_4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    condo_5: file(relativePath: { eq: "hauskey/condos/condo_5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    condo_6: file(relativePath: { eq: "hauskey/condos/condo_6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    condo_7: file(relativePath: { eq: "hauskey/condos/condo_7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    condo_8: file(relativePath: { eq: "hauskey/condos/condo_8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    condo_9: file(relativePath: { eq: "hauskey/condos/condo_9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hauskey: file(relativePath: { eq: "hauskey/hauskey_home_image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
