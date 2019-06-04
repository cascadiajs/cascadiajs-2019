var fs = require("fs")
var read = fs.readFileSync
var exists = fs.existsSync
var join = require("path").join
var md = require("marked")
var Layout = require("@architect/views/layout")

module.exports = function render(doc) {
	// Defines the file needed to render a doc
	var contentFile = join(__dirname, "pages", doc) + ".md"

	// Make sure each doc exists
	if (exists(contentFile)) {
		// Now get the metadata, content, and send to Layout
		var content = read(contentFile).toString()
		// swap out all instances of ${STATIC} with value of BEGIN_STATIC_ORIGIN
		content = content.replace("${STATIC}", process.env.BEGIN_STATIC_ORIGIN)
		return {
			html: Layout(md(content))
		}
	} else {
		// Return 404
		var notFound = "404, sorry!"
		return {
			html: notFound,
			status: 404
		}
	}
}
