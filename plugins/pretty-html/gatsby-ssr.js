const { renderToString } = require('react-dom/server')
const jsbeautify = require('js-beautify')

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const bodyHTML = renderToString(bodyComponent)
  const prettyHTML = jsbeautify.html(bodyHTML, { indent_size: 2 })
  replaceBodyHTMLString(prettyHTML)
}
