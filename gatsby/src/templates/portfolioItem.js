import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ContentPageLayout from '../components/ContentPageLayout';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'caption caption'
    'image body';
  @media (max-width: 800px) {
    /* line-height: 1rem; */
    grid-template-areas:
      'image'
      'caption'
      'body';
  }
`;

const Image = styled(Img)`
  width: 30rem;
  grid-area: image;
  @media (max-width: 800px) {
    width: 75%;
    justify-self: center;
  }
`;

const Body = styled.div`
  padding: 1.5rem;
  overflow: visible;
  grid-area: body;
`;
const Caption = styled.div`
  padding: 1rem;
  grid-area: caption;
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
        <Container>
          <Caption>{post.caption}</Caption>
          <Image fluid={post.mainImage.asset.fluid} alt="Website design" />
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
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
