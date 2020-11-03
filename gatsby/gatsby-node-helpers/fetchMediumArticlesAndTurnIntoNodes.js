import fetch from 'isomorphic-fetch';

export default async function fetchMediumArticlesAndTurnIntoNodes({
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
        type: 'mediumPost',
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
