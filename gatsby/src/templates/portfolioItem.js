import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ContentPageLayout from '../components/ContentPageLayout';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const Image = styled(Img)`
  width: 30rem;
`;

const Body = styled.div`
  padding: 1.5rem;
  overflow: visible;
`;
const Caption = styled.div`
  padding: 1rem;
`;

export default function SinglePortfolioItem({ data }) {
  const { post } = data;
  console.clear();
  console.log(post);

  return (
    <Layout>
      <ContentPageLayout>
        <h1>{post.title}</h1>
        <span>{post.tagLine}</span>
        <Caption>{post.caption}</Caption>
        <Container>
          <Image fluid={post.mainImage.asset.fluid} />
          <Body>
            {post.body.map((content) => (
              <div>{content.children[0].text}</div>
            ))}
          </Body>
        </Container>
      </ContentPageLayout>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      id
      title
      tagLine
      caption
      body {
        children {
          text
        }
      }
      mainImage {
        asset {
          fluid(maxWidth: 300) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
