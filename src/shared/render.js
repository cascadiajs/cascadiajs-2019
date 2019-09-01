let fs = require('fs')
let read = fs.readFileSync
let exists = fs.existsSync
let join = require('path').join
let md = require('marked')
let Layout = require('@architect/views/layout')
let Index = require('@architect/views/index')
let Speaker = require('@architect/views/speaker')
let speakers = require('./data/speakers')

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

const getSpeakerHtml = (speaker) => {
	let html = processVariables(Speaker(speakers[speaker]))
	return `<div id="page">${html}</div>`
}

module.exports = function render({page, speaker}) {
	try {
		let body, header
		if (page) {
			body = getMarkdownHtml(page)
			header = `<title>CascadiaJS 2019 | Nov 7-8, 2019 | Seattle, WA, USA</title>`
		}
		else if (speaker) {
			body = getSpeakerHtml(speaker)
			header = `<title>CascadiaJS 2019 | ${speakers[speaker].name} | ${speakers[speaker].talk}</title>
	<meta property="og:image" content="${process.env.BEGIN_STATIC_ORIGIN}/images/social/${speaker}-talk.png" />
	<meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@cascadiajs">
    <meta name="twitter:title" content="CascadiaJS 2019 | ${speakers[speaker].name} | ${speakers[speaker].talk}">
    <meta name="twitter:image" content="${process.env.BEGIN_STATIC_ORIGIN}/images/social/${speaker}-talk.png">`
		}
		else {
			body = Index()
			header = `<title>CascadiaJS 2019 | Nov 7-8, 2019 | Seattle, WA, USA</title>`
		}
		return {
			html: Layout(body, header)
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
