import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ContentPageLayout from '../components/ContentPageLayout';

export default function mediumPostTemplate({ data }) {
  const post = data.posts.nodes[0];
  return (
    <Layout>
      <ContentPageLayout>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </ContentPageLayout>
    </Layout>
  );
}

export const query = graphql`
  query($title: String!) {
    posts: allPost(filter: { title: { eq: $title } }) {
      nodes {
        title
        author
        id
        content
      }
    }
  }
`;
