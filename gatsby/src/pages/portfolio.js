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
  margin: 5vh 10vw 0 10vw;
  color: var(--black);
`;

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  height: auto;
`;

export default function Portfolio({ data }) {
  const portfolio = data.allSanityPost.nodes;
  const projects = portfolio.filter(
    (post) => post.category.id === '-eefd9223-c192-5906-9804-8369c4216bf5'
  );
  const courses = portfolio.filter(
    (post) => post.category.id === '-3b2a8ff3-e0bf-57b9-9531-66e43e6fc0e2'
  );
  console.log({ courses });
  return (
    <Layout>
      <Container>
        <h1>Projects</h1>
        <CardContainer>
          {projects.map((post) => (
            <Card key={`post_${post.id}`} post={post} />
          ))}
        </CardContainer>
        <h1>Courser</h1>
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
            fluid(maxWidth: 75) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
