import React from 'react';
import styled from 'styled-components';
import LinesEllipsis from 'react-lines-ellipsis';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const CardBox = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'image'
    'text';
  height: 350px;
  background-color: var(--white);
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
  padding: 10px;
  overflow: hidden;
`;

const Image = styled(Img)`
  grid-area: image;
  height: 200px;
`;

const Text = styled.div`
  grid-area: text;
  display: block;
  margin: 10px;
  /* padding-bottom: 1rem; */
  font-size: 1.5rem;
  letter-spacing: 1px;
`;

const Title = styled.h3`
  line-clamp: 2;
`;

const CardLinkStyles = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  }
`;

function OptionalCardLink({ hasLink, children }) {
  return (
    <>
      {hasLink ? (
        <CardLinkStyles to={hasLink}>{children}</CardLinkStyles>
      ) : (
        <div styles={{ color: 'inherit' }}>{children}</div>
      )}
    </>
  );
}

export default function Card({ post }) {
  return (
    <OptionalCardLink hasLink={post.slug.current}>
      <CardBox>
        {post.mainImage.asset.fluid && (
          <Image
            fluid={post.mainImage.asset.fluid}
            noBackGround={post.slug.current === 'medium-blog'}
            alt={post.title}
            imgStyle={{ objectFit: 'contain' }}
          />
        )}
        <Text>
          {post.title && (
            <Title>
              <LinesEllipsis
                text={post.title}
                maxLine="2"
                ellipsis=""
                trimRight
                basedOn="letters"
              />
            </Title>
          )}
          {post.caption && (
            <div>
              <LinesEllipsis
                text={post.caption}
                maxLine="3"
                ellipsis="..."
                trimRight
                basedOn="words"
              />
            </div>
          )}
        </Text>
      </CardBox>
    </OptionalCardLink>
  );
}
