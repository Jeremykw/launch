import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ContentPageLayout from '../components/ContentPageLayout';
import SEO from '../components/SEO';

export default function About({ data }) {
  const aboutData = data.allSanityPost.nodes[0];
  return (
    <Layout>
      <SEO title="About" />
      <ContentPageLayout>
        <h1>{aboutData.title}</h1>
        {aboutData.body.map((paragraph, i) => (
          <p key={`paragraph_${i}`}>
            {paragraph.children.map((line, j) => (
              <span key={`text_${j}`}>{line.text}</span>
            ))}
          </p>
        ))}
      </ContentPageLayout>
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
