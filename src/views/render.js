let fs = require('fs')
let join = require('path').join
let Index = require('@architect/views/index')
let Page = require('@architect/views/page')
let Speaker = require('@architect/views/speaker')

// Load super secret speakerData (or don't, esp if working locally)
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
    /**
     * Set up asset paths
     * - assetPath: public assets in this repo
     * - speakerAssetPath: private assets for yet to be revealed speakers!
     */
    let env = process.env.NODE_ENV
    let isLocal = env === 'testing' || process.env.ARC_LOCAL || !env
    let assetPath = isLocal
      ? 'http://localhost:3333/_static'
      : process.env.BEGIN_STATIC_ORIGIN
    // Speaker asssets will 404 when working locally without access to the private speaker repo
    // TODO maybe use dummy image(s) in this case?
    let speakerAssetPath = isLocal
      ? 'http://localhost:4444/_static/2019'
      : process.env.SPEAKER_ASSETS
    let props = {
      assetPath,
      speakerAssetPath
    }

    let isSpeaker = req.params && req.params.speaker ||
                    req.pathParameters && req.pathParameters.speaker // Arc 6 transition compat
    let isPage = req.path.length >= 2

    // #views
    if (isSpeaker) {
      let person = isSpeaker
      props.person = speakerData.find(s => s.id === person)
			let html = Speaker(props)
      return {
        html
      }
		}
    else if (isPage) {
      let page = req.path.substr(1)
      props.page = page
			let html = Page(props)
      return {
        html
      }
		}
		else {
      props.speakerData = speakerData
			let html = Index(props)
      return {
        html
      }
		}
	}
	catch (error) {
		// Return 404
		let html = "404, sorry!"
		return {
			html,
			status: 404
		}
	}
}
