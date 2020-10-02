import React from 'react';
import styled from 'styled-components';
import LinesEllipsis from 'react-lines-ellipsis';

const CardBox = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'image title title'
    'image tagline tagline'
    'text text text'
    'text text text';
  height: 150px;
  background-color: var(--white);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  padding: 10px;
  gap: 10px;
  overflow: hidden;
`;

const Image = styled.div`
  grid-area: image;
  background-color: var(--blue);
  height: 75px;
  width: 75px;
`;

const Title = styled.div`
  grid-area: title;
  align-self: start;
  padding-left: 1rem;
  font-size: 1.6rem;
  line-clamp: 2;
`;
const Tagline = styled.div`
  display: grid;
  align-self: end;
  grid-area: tagline;
  font-size: 1.2rem;
  color: var(--brown);
  padding-left: 1rem;
  max-lines: 1;
`;
const Text = styled.div`
  display: block;
  height: 50px;
  margin-bottom: 10px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  grid-area: text;
  font-size: 1.25rem;
`;
function truncateCaption(caption) {
  // if (!caption || type of caption !=== 'string') return ''
  // if (caption.length <)
  return caption;
}

export default function Card({ post }) {
  console.log(post);
  return (
    <CardBox>
      <Image />
      <Title>
        <LinesEllipsis
          text={post.title}
          maxLine="2"
          ellipsis=""
          trimRight
          basedOn="letters"
        />
      </Title>
      <Tagline>
        <LinesEllipsis
          text={post.tagLine}
          maxLine="2"
          ellipsis=""
          trimRight
          basedOn="words"
        />
      </Tagline>
      <Text>
        <LinesEllipsis
          text={post.caption}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="words"
        />
      </Text>
    </CardBox>
  );
}
