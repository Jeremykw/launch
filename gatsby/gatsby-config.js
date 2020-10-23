import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Launch Pad',
    siteUrl: 'https://launchpad.com',
    description: 'Website design for modern business',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'x8u8gxth',
        dataset: 'production',
        watchmode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
