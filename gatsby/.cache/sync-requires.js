const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jeremybissonnette/dev/launch/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/jeremybissonnette/dev/launch/gatsby/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/jeremybissonnette/dev/launch/gatsby/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jeremybissonnette/dev/launch/gatsby/src/pages/index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/Users/jeremybissonnette/dev/launch/gatsby/src/pages/portfolio.js")))
}

