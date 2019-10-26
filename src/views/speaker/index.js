let getAssetPaths = require('@architect/shared/get-asset-paths')
let getSpeakerData = require('@architect/shared/get-speaker-data')
let gettingStartedData = require('@architect/shared/getting-started.json')
let Template = require('./template')
let Layout = require('@architect/views/layout')

/**
 * Speaker view
 */
module.exports = async function Speaker (req) {
  let {assetPath, speakerAssetPath} = getAssetPaths()
  let speakerData = getSpeakerData()

  let person = req.params && req.params.speaker ||
               req.pathParameters && req.pathParameters.speaker // Arc 6 transition compat
  person = speakerData.find(s => s.id === person)
  if (!person)
    return // Bails to 404

  let {name, id, talkTitle} = person

  // Set up view content
  let title = `${name} | ${talkTitle}`
  let header = `
<meta property="og:image" content="${speakerAssetPath}/${id}-social.png" />
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@cascadiajs">
<meta name="twitter:title" content="CascadiaJS 2019 | ${name} | ${talkTitle}">
<meta name="twitter:image" content="${speakerAssetPath}/${id}-social.png">
  `

  // pick a random piece of technical content to inject
  //console.log(gettingStartedData)
  let gettingStartedItem = gettingStartedData[Math.floor(Math.random() * gettingStartedData.length - 1)]
  //console.log(gettingStartedItem)
  let content = Template({person, assetPath, speakerAssetPath, gettingStartedItem})

  let speaker = {
    title,
    header,
    content,
    assetPath
  }
  let html = await Layout(speaker)
  return {
    html
  }
}
