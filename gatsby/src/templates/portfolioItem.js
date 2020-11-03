import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ContentPageLayout from '../components/ContentPageLayout';
import MediumPageBody from '../components/MediumPageBody';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-template-areas:
    'image caption'
    'body body';
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'image'
      'caption'
      'body';
  }
`;

const Image = styled(Img)`
  width: 100%;
  grid-area: image;
  margin-top: 1.5rem;
  @media (max-width: 800px) {
    width: 75%;
    justify-self: center;
  }
`;

const Body = styled.p`
  padding: 1.5rem;
  overflow: visible;
  grid-area: body;
`;
const Caption = styled.blockquote`
  padding: 1rem;
  grid-area: caption;
`;

const Title = styled(Link)`
  text-decoration: none;
  color: var(--black);
  &:hover {
    text-decoration: underline;
  }
`;

const TitleWithLink = (post) => (
  <Title to={post.url ? post.url : ''}>
    <h1>{post.title}</h1>
  </Title>
);
export default function SinglePortfolioItem({ data }) {
  const { post, mediumPosts } = data;
  console.log({ data });
  return (
    <Layout>
      <ContentPageLayout>
        {post.url ? TitleWithLink(post) : <h1>{post.title}</h1>}
        <span>{post.tagLine}</span>
        <Container>
          <Caption>{post.caption}</Caption>
          <Image
            fluid={post.mainImage.asset.fluid}
            imgStyle={{ objectFit: 'contain' }}
            alt="Website design"
            key={post.id}
          />
          <Body>
            {post.body ? (
              post.body.map((content) => <div>{content.children[0].text}</div>)
            ) : (
              <MediumPageBody posts={mediumPosts} />
            )}
          </Body>
        </Container>
      </ContentPageLayout>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    mediumPosts: allMediumPost {
      nodes {
        title
        id
      }
    }
    post: sanityPost(slug: { current: { eq: $slug } }) {
      id
      title
      tagLine
      caption
      url
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
