import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import slug from 'slug';

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
`;

export default function MediumPageBody({ posts }) {
  return (
    <ul>
      {posts.nodes.map((post) => (
        <StyledLink key={post.id} to={`/blog/${slug(post.title)}`}>
          <li>{post.title}</li>
        </StyledLink>
      ))}
    </ul>
  );
}
