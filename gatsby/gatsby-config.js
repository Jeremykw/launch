import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Launch Pad Creations',
    siteUrl: 'https://launchpad.com',
    description: 'Website design for modern business',
    linkedin: 'https://www.linkedin.com/in/jeremy-bissonnette-55203213/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
