import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import ListSeparator from '../../images/hauskey/list_separating_ellipse.svg';

const NavBoxStyles = styled.div`
  background: white;
  height: 80%;
  margin-bottom: 100px;
  @media (max-width: 960px) {
    & {
      display: none;
    }
  }
`;

const ListGrid = styled.ul`
  display: grid;
  grid-template-rows: repeat(${(props) => props.listLength}, 1fr);
  justify-items: center;
  justify-self: center;
  align-items: center;
  height: 100%;
  padding: 2rem 0 0 0;
  margin: 0;
  list-style-type: none;
`;

const ListStyles = styled.li`
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr;
  font-size: 2rem;
  height: 100%;
  img {
    align-self: top;
  }
  .feature_link {
    text-decoration: none;
    color: var(--h_black);
  }
  .feature_link:hover {
    color: var(--h_grey);
  }
`;

export default function NavBox({ links }) {
  const handleClick = (linkId) => {
    const section = document.getElementById(linkId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavBoxStyles>
      <ListGrid>
        {links.map((link, i) => {
          const linkId = link.split(' ').join('_');
          return (
            <ListStyles key={`${linkId}_${i}`} listLength={links.length}>
              <div className="feature_link" onClick={() => handleClick(linkId)}>
                <strong>{link}</strong>
              </div>
              <img src={ListSeparator} alt="List Separator" />
            </ListStyles>
          );
        })}
      </ListGrid>
    </NavBoxStyles>
  );
}
