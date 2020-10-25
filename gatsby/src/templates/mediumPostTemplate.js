import React from 'react';
import { graphql, Link } from 'gatsby';
import slug from 'slug';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ContentPageLayout from '../components/ContentPageLayout';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  line-height: 4rem;
  &:hover {
    text-decoration: underline;
  }
  li {
    list-style: none;
  }
  img {
    width: 75%;
  }
`;

const StyledContent = styled.div`
  img {
    width: 100%;
  }
`;

export default function mediumPostTemplate({ data }) {
  const post = data.posts.nodes[0];
  return (
    <Layout>
      <ContentPageLayout>
        <StyledLink external to={post.link}>
          <h1>{post.title}</h1>
        </StyledLink>
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          by: <span>{post.author}</span>
        </StyledContent>
      </ContentPageLayout>
    </Layout>
  );
}

export const query = graphql`
  query($title: String!) {
    posts: allMediumPost(filter: { title: { eq: $title } }) {
      nodes {
        title
        author
        link
        content
      }
    }
  }
`;
