import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Card from '../components/Card';
import SEO from '../components/SEO';

const Container = styled.section`
  justify-content: center;
  align-items: top;
  height: 100%;

  margin: 5vh 10vw 0 10vw;
  color: var(--black);
  h1 {
    color: var(--black);
    margin: 5rem;
  }
`;

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  height: auto;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default function Portfolio({ data }) {
  const portfolio = data.allSanityPost.nodes;
  const projects = portfolio.filter(
    (post) =>
      post.category.id === '-eefd9223-c192-5906-9804-8369c4216bf5' &&
      post.id !== '-57d8e0cf-4083-5a4e-92d5-9ced66f6d621'
  );
  const launchPad = portfolio.filter(
    (post) => post.id === '-57d8e0cf-4083-5a4e-92d5-9ced66f6d621'
  );
  projects.unshift(launchPad[0]);
  const courses = portfolio.filter(
    (post) => post.category.id === '-3b2a8ff3-e0bf-57b9-9531-66e43e6fc0e2'
  );
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Container>
        <CardContainer>
          {projects.map((post) => (
            <Card key={`post_${post.id}`} post={post} />
          ))}
        </CardContainer>
        <h1>Courses</h1>
        <CardContainer>
          {courses.map((post) => (
            <Card key={`post_${post.id}`} post={post} />
          ))}
        </CardContainer>
      </Container>
    </Layout>
  );
}
export const query = graphql`
  query MyQuery {
    allSanityPost {
      nodes {
        title
        slug {
          current
        }
        id
        category {
          id
        }
        caption
        tagLine
        mainImage {
          asset {
            fluid(maxWidth: 200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
