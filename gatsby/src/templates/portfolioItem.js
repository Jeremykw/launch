import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ContentPageLayout from '../components/ContentPageLayout';
import MediumPageBody from '../components/MediumPageBody';
import SEO from '../components/SEO';

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

const Body = styled.div`
  padding: 1.5rem;
  overflow: visible;
  grid-area: body;
`;
const Caption = styled.blockquote`
  padding: 1rem;
  grid-area: caption;
`;

const TitleStyles = styled.a`
  text-decoration: none;
  color: var(--black);
  &:hover {
    text-decoration: underline;
  }
`;

const TitleWithLink = (post) => (
  <TitleStyles href={post.url ? post.url : ''}>
    <h1>{post.title}</h1>
  </TitleStyles>
);

const ProjectLinkStyles = styled.a`
  color: var(--blue);
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const ProjectLink = (post) => (
  <>
    <br />
    <ProjectLinkStyles href={post.url}>
      <span>Link to Project</span>
    </ProjectLinkStyles>
  </>
);

export default function SinglePortfolioItem({ data }) {
  const { post, mediumPosts } = data;
  return (
    <Layout>
      <SEO title={post.title} />
      <ContentPageLayout>
        {post.url ? TitleWithLink(post) : <h1>{post.title}</h1>}
        <span style={{ color: 'var(--brown)' }}>{post.tagLine}</span>
        <Container>
          {post.caption && (
            <Caption>
              {`${post.caption}`}
              {post.url ? ProjectLink(post) : ''}
            </Caption>
          )}
          <Image
            fluid={post.mainImage.asset.fluid}
            imgStyle={{ objectFit: 'contain' }}
            alt={post.title}
            key={post.id}
          />

          <Body>
            {post.body ? (
              post.body.map((content, i) => (
                <p key={`content_p_${i}`}>
                  {content.children.map((text, j) => (
                    <span key={`content_text_${j}`}>{text.text}</span>
                  ))}
                </p>
              ))
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
