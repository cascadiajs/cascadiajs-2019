const fs = require("fs")
const read = fs.readFileSync
const join = require("path").join

// load layout into memory
const layoutPath = join(__dirname, "layout") + ".html"
let layoutContent = read(layoutPath).toString()
layoutContent = layoutContent.replace("${STATIC}", process.env.BEGIN_STATIC_ORIGIN)

module.exports = function Layout(content) {
  return layoutContent.replace("${CONTENT}", content)
}
