let Layout = require('@architect/views/layout')
let Index = require('@architect/views/index')
let Page = require('@architect/views/page')
let Speaker = require('@architect/views/speaker')
let speakers = require('./data/speakers')

const getSpeakerHtml = (speaker) => {
	let html = Speaker(speakers[speaker])
	return `<div id="page">${html}</div>`
}

module.exports = async function render(req) {
	try {
    let path = req.path.substr(1)

    let speaker = req.params && req.params.speakers ||
                  req.pathParameters && req.pathParameters.speakers // Arc 6 transition compat

    if (speaker) {
			let body = getSpeakerHtml(speaker)
      let header = `
<title>CascadiaJS 2019 | ${speakers[speaker].name} | ${speakers[speaker].talk}</title>
<meta property="og:image" content="${process.env.BEGIN_STATIC_ORIGIN}/images/social/${speaker}-talk.png" />
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@cascadiajs">
<meta name="twitter:title" content="CascadiaJS 2019 | ${speakers[speaker].name} | ${speakers[speaker].talk}">
<meta name="twitter:image" content="${process.env.BEGIN_STATIC_ORIGIN}/images/social/${speaker}-talk.png">
      `
      return {
        html: Layout(body, header)
      }
		}
    else if (path) {
			let body = Page(path)
      let header = `<title>CascadiaJS 2019 | Nov 7-8, 2019 | Seattle, WA, USA</title>`
      return {
        html: Layout(body, header)
      }
		}
		else {
			let body = Index()
      let header = `<title>CascadiaJS 2019 | Nov 7-8, 2019 | Seattle, WA, USA</title>`
      return {
        html: Layout(body, header)
      }
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
