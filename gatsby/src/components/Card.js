import React from 'react';
import styled from 'styled-components';

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
  overflow: hidden;
`;

const Image = styled.div`
  grid-area: image;
  background-color: var(--blue);
  /* margin-right: 1rem; */
  height: 75px;
  width: 75px;
`;

const Title = styled.div`
  grid-area: title;
  align-self: start;
  padding: 0;
  padding-left: 1rem;
  margin: 0;
  font-size: 2rem;
`;
const Tagline = styled.div`
  display: grid;
  align-self: flex-end;
  grid-area: tagline;
  font-size: 1.2rem;
  color: var(--brown);
  padding-left: 1rem;
`;
const Text = styled.div`
  display: block;
  height: 60px;
  padding-top: 1rem;
  grid-area: text;
  font-size: 1.25rem;
  overflow: hidden;
`;
export default function Card(props) {
  console.log(props);
  return (
    <CardBox>
      <Image />
      <Title>{props.title}</Title>
      <Tagline>This is the tag line</Tagline>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </Text>
    </CardBox>
  );
}
