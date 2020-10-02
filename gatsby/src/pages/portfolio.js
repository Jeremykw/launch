import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Card from '../components/Card';

const Container = styled.section`
  justify-content: center;
  align-items: top;
  height: 100%;
  font-weight: bold;
  overflow-y: auto;
`;

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  height: auto;
  margin: 10vh 10vw 0 10vw;
`;

export default function Portfolio({ data }) {
  const portfolio = data.allSanityPost.nodes;
  return (
    <Layout>
      <Container>
        <CardContainer>
          {portfolio.map((post) => (
            <Card post={post} />
          ))}
        </CardContainer>
      </Container>
    </Layout>
  );
}
export const query = graphql`
  query MyQuery {
    allSanityPost(
      filter: {
        category: { id: { eq: "-eefd9223-c192-5906-9804-8369c4216bf5" } }
      }
    ) {
      nodes {
        title
        slug {
          current
        }
        id
        caption
        tagLine
        mainImage {
          asset {
            fixed(height: 75, width: 75) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;
