import path from 'path';

export default async function createPortfolioPages({ graphql, actions }) {
  // 1. Get a template for this page
  const portfolioTemplate = path.resolve('./src/templates/portfolioItem.js');
  // 2. Query all sanity Posts
  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          body {
            children {
              text
            }
          }
          title
          caption
          category {
            id
          }
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each post and create a page for that post
  data.posts.nodes.forEach((post) => {
    if (post.category.id !== '-f7e0a2ea-0f15-5e37-a09f-6489d072f12c') {
      actions.createPage({
        // What is the url for this new page
        path: `portfolio/${post.slug.current}`,
        component: portfolioTemplate,
        context: {
          slug: post.slug.current,
        },
      });
    }
  });
}
