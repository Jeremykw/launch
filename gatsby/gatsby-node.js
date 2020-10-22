import path from 'path';
import fetch from 'isomorphic-fetch';
import slug from 'slug';

async function createPortfolioPages({ graphql, actions }) {
  // 1. Get a template for this page
  const portfolioTemplate = path.resolve('./src/templates/portfolioItem.js');
  // 2. Query all Pizzas
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

async function createMediumBlogPages({ graphql, actions }) {
  // get template
  const mediumPostTemplate = path.resolve(
    './src/templates/mediumPostTemplate.js'
  );

  const { data } = await graphql(`
    query {
      posts: allPost {
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
    console.log('PATH = ', `blog/${slug(post.title)}`);
    actions.createPage({
      path: `blog/${slug(post.title)}`,
      component: mediumPostTemplate,
      context: {
        title: post.title,
      },
    });
  });
}

async function fetchMediumArticlesAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jeremybissonnette'
  );
  const data = await res.json();
  data.items.forEach((post) => {
    const nodeMeta = {
      id: createNodeId(`medium-post-${post.title}`),
      parent: null,
      children: [],
      internal: {
        type: 'post',
        mediaType: 'application/json',
        contentDigest: createContentDigest(post),
      },
    };
    // 3. Crete a node for that beer
    actions.createNode({
      ...post,
      ...nodeMeta,
    });
  });
}

export async function sourceNodes(params) {
  // sourceNodes is a gatsby life cycle hook called once
  // it is used to create nodes accessible through the graphQL api
  await Promise.all([fetchMediumArticlesAndTurnIntoNodes(params)]);
}

export async function createPages(params) {
  // Create Pages Dynamically
  await createPortfolioPages(params);
  await createMediumBlogPages(params);
}
