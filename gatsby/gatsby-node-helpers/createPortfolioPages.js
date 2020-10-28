import path from 'path';

export default async function createPortfolioPages({ graphql, actions }) {
  // 1. Get a template for this page
  const portfolioTemplate = path.resolve('./src/templates/portfolioItem.js');
  // 2. Query all sanity Posts
  const { data } = await graphql(`
    query {
      posts: allSanityPost(
        filter: {
          category: { id: { eq: "-eefd9223-c192-5906-9804-8369c4216bf5" } }
        }
      ) {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each post and create a page for that post
  data.posts.nodes.forEach((post) => {
    actions.createPage({
      // What is the url for this new page
      path: `portfolio/${post.slug.current}`,
      component: portfolioTemplate,
      context: {
        slug: post.slug.current,
      },
    });
  });
}
