var plugins = [{
      plugin: require('/Users/jeremybissonnette/dev/launch/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jeremybissonnette/dev/launch/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"x8u8gxth","dataset":"production","watchmode":true,"token":"skjpkEQiosJj93O0oeQjj5W7o6wXA5FVuuXUrnKKi3JwZWvO4BA2SsWM2xSxAFUldwK9BkZFzZkPhW3gQvOdXUs33eXI3ji9dSb3mB50SEQPArRJxfkVz88wA9igPdIyFWqe2KF509sxm9r5Ls3i1RGULszYq74Lxs2mQfzr9MSEmAankKou"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
