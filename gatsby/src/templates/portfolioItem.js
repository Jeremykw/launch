import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ContentPageLayout from '../components/ContentPageLayout';

export default function SinglePortfolioItem({ data }) {
  const { post } = data;
  console.log({ post });
  return (
    <Layout>
      <ContentPageLayout>
        <h1>{post.title}</h1>
        <span>{post.tagLine}</span>
        <p>{post.body[0].children[0].text}</p>
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
      body {
        children {
          text
        }
      }
      mainImage {
        asset {
          fluid(maxWidth: 800) {
            base64
            srcWebp
            srcSetWebp
          }
        }
      }
    }
  }
`;
