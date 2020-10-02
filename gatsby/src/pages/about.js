import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Container = styled.section`
  justify-content: center;
  align-items: top;
  height: 100%;
  font-weight: bold;
  overflow-y: auto;
`;

const GreyArea = styled.div`
  display: grid;
  height: auto;
  background-color: var(--clear);
  margin: 10vh 10vw 0 10vw;
  padding: 30px;
`;
const ContentArea = styled.div`
  background-color: var(--white);
  padding: 30px;
  line-height: 2rem;
  font-size: 1.5rem;
  /* box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25); */
  p {
    margin: 10px;
  }
`;

export default function About({ data }) {
  const aboutData = data.allSanityPost.nodes[0];
  console.log(aboutData);
  return (
    <Layout>
      <Container>
        <GreyArea>
          <ContentArea>
            <h1>{aboutData.title}</h1>
            <p>{aboutData.body[0].children[0].text}</p>
          </ContentArea>
        </GreyArea>
      </Container>
    </Layout>
  );
}

// About content saved as a post under the about category
export const query = graphql`
  query AboutQuery {
    allSanityPost(
      filter: {
        category: { _id: { eq: "0cbfbb40-eca5-4f5f-821c-05114b9000e1" } }
      }
    ) {
      nodes {
        title
        body {
          children {
            text
          }
        }
      }
    }
  }
`;
