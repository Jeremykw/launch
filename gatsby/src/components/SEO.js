import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children, location, description, title, image }) {
  console.log(title);
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          linkedin
        }
      }
    }
  `);
  return (
    <Helmet titleTemplate={`%s | Launch Pad `}>
      <html lang="en" />
      <title>{title}</title>
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale-1.0" />
      <meta charset="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || '/src/images/bgLaunch.png'} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta
        property="og:descriptoin"
        content={site.siteMetadata.description}
        key="ogdescription"
      />
      {children}
    </Helmet>
  );
}
