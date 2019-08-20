const fs = require("fs")
const read = fs.readFileSync
const join = require("path").join

// load layout into memory
const layoutPath = join(__dirname, "layout") + ".html"
let layoutContent = read(layoutPath).toString()


module.exports = function Layout(pageContent, headerContent) {
  // wrap layout around the pageContent
  let renderedPage = layoutContent.replace("${CONTENT}", pageContent)
  renderedPage = renderedPage.replace("${HEADER}", headerContent)
  // do search and replace for a small number of defined variables
	renderedPage = renderedPage.replace(/\$\{STATIC\}/g, process.env.BEGIN_STATIC_ORIGIN)
	renderedPage = renderedPage.replace(/\$\{NUM_DAYS\}/g, Math.round(((new Date('11/7/2019')).getTime() - Date.now())/ 1000 / 60 / 60 / 24))

  return renderedPage
}
