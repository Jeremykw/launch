import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ImageGrid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-areas: 'condo_search_image_0 condo_search_image_1 condo_search_image_2 condo_search_image_3';
  @media (max-width: 960px) {
    grid-template-areas:
      'condo_search_image_0 condo_search_image_1'
      'condo_search_image_2 condo_search_image_3';
  }
  @media (max-width: 500px) {
    grid-template-areas: 'condo_search_image_0' 'condo_search_image_1';
    .condo_search_image_2,
    .condo_search_image_3 {
      display: none;
    }
  }
`;

const Image = styled(Img)`
  height: 200px;
  width: 200px;
  @media (max-width: 490px) {
    height: 150px;
    width: 150px;
  }
  &.no_hover {
    filter: grayscale(75%);
  }
`;
export default function Feature({ images, title, tagline }) {
  const [hovered, setHovered] = useState([false, false, false, false]);
  const toggleHover = (i) => {
    const newHovered = !hovered[i];
    const newHoveredArray = [...hovered];
    newHoveredArray[i] = newHovered;
    setHovered([...newHoveredArray]);
  };
  return (
    <>
      <h1>{title}</h1>
      <h3>{tagline}</h3>
      <ImageGrid>
        <>
          {images.map((image, i) => (
            <div
              key={`condo_search_image_${i}`}
              className={`condo_search_image_${i}`}
              onMouseEnter={() => toggleHover(i)}
              onMouseLeave={() => toggleHover(i)}
            >
              <Image
                fluid={image.childImageSharp.fluid}
                alt={`condo search ${i}`}
                className={`${hovered[i] ? 'hovering' : 'no_hover'}`}
                imgStyle={{
                  objectFit: 'cover',
                  gridArea: `condo_search_image_${i}`,
                }}
              />
            </div>
          ))}
        </>
      </ImageGrid>
    </>
  );
}
