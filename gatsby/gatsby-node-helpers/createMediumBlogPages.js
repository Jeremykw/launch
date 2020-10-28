import path from 'path';
import slug from 'slug';

export default async function createMediumBlogPages({ graphql, actions }) {
  // get template
  const mediumPostTemplate = path.resolve(
    './src/templates/mediumPostTemplate.js'
  );

  const { data } = await graphql(`
    query {
      posts: allMediumPost {
        nodes {
          title
          author
          id
          content
        }
      }
    }
  `);
  data.posts.nodes.forEach((post) => {
    actions.createPage({
      path: `blog/${slug(post.title)}`,
      component: mediumPostTemplate,
      context: {
        title: post.title,
      },
    });
  });
}
