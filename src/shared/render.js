var fs = require("fs")
var read = fs.readFileSync
var exists = fs.existsSync
var join = require("path").join
var md = require("marked")
var Layout = require("@architect/views/layout")

const processVariables = (content) => {
	return content.replace(/\$\{STATIC\}/g, process.env.BEGIN_STATIC_ORIGIN)
}

const getFile = (path) => {
	if (exists(path)) {
		return read(path).toString()
	}
	else {
		throw new Error("file not found")
	}
}

const getMarkdownHtml = (doc) => {
	let pathToMarkdownDoc = join(__dirname, "pages", doc) + ".md"
	let html = md(processVariables(getFile(pathToMarkdownDoc)))
	return `<div id="page">${html}</div>`

}

const getIndexHtml = () => {
	let pathToIndexHtml = join(__dirname, "index") + ".html"
	return getFile(pathToIndexHtml)
}

module.exports = function render(doc) {
	try {
		let html
		if (doc) {
			html = getMarkdownHtml(doc)
		}
		else {
			html = getIndexHtml()
		}
		return {
			html: Layout(html)
		}
	}
	catch (error) {
		// Return 404
		var notFound = "404, sorry!"
		return {
			html: notFound,
			status: 404
		}
	}
}
