const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/minjilee1707/repos/minjilee1707.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/home/minjilee1707/repos/minjilee1707.github.io/src/pages/404.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/home/minjilee1707/repos/minjilee1707.github.io/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/minjilee1707/repos/minjilee1707.github.io/src/pages/index.tsx"))),
  "component---src-pages-resume-tsx": hot(preferDefault(require("/home/minjilee1707/repos/minjilee1707.github.io/src/pages/resume.tsx")))
}

