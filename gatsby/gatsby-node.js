// import path from 'path';
import createPortfolioPages from './gatsby-node-helpers/createPortfolioPages';
import createMediumBlogPages from './gatsby-node-helpers/createMediumBlogPages';
import fetchMediumArticlesAndTurnIntoNodes from './gatsby-node-helpers/fetchMediumArticlesAndTurnIntoNodes';

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
