let fs = require('fs')
let join = require('path').join
let Layout = require('@architect/views/layout')
let Index = require('@architect/views/index')
let Page = require('@architect/views/page')
let Speaker = require('@architect/views/speaker')

// Load super secret speakerData
let speakerData
let shared = join(process.cwd(), 'node_modules', '@architect', 'shared')
let hasFullSpeakerData = fs.existsSync(join(shared, 'cascadiajs-2019.json'))
if (hasFullSpeakerData) {
  // eslint-disable-next-line
  speakerData = require('@architect/shared/cascadiajs-2019.json')
}
else {
  // eslint-disable-next-line
  speakerData = require('@architect/shared/cascadiajs-2019-dummy.json')
}

module.exports = async function render(req) {
	try {
    let isSpeaker = req.params && req.params.speaker ||
                    req.pathParameters && req.pathParameters.speaker // Arc 6 transition compat
    let isPage = req.path.length >= 2

    if (isSpeaker) {
      let person = isSpeaker
      person = speakerData.find(s => s.id === person)
      let {id, name, talkTitle} = person
			let body = Speaker(person)
      let header = `
<title>CascadiaJS 2019 | ${name} | ${talkTitle}</title>
<meta property="og:image" content="${process.env.BEGIN_STATIC_ORIGIN}/images/social/${id}-talk.png" />
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@cascadiajs">
<meta name="twitter:title" content="CascadiaJS 2019 | ${name} | ${talkTitle}">
<meta name="twitter:image" content="${process.env.BEGIN_STATIC_ORIGIN}/images/social/${id}-talk.png">
`
      return {
        html: Layout(body, header)
      }
		}
    else if (isPage) {
      let path = req.path.substr(1)
			let body = Page(path)
      let header = `<title>CascadiaJS 2019 | Nov 7-8, 2019 | Seattle, WA, USA</title>`
      return {
        html: Layout(body, header)
      }
		}
		else {
			let body = Index(speakerData)
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
