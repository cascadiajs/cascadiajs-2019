let getAssetPaths = require('@architect/shared/get-asset-paths')
let getSpeakerData = require('@architect/shared/get-speaker-data')
let gettingStartedData = require('@architect/shared/getting-started.json')
let Template = require('./template')
let SocialTemplate = require('./social')
let Layout = require('@architect/views/layout')
let SocialLayout = require('@architect/views/layout/social')

/**
 * Speaker view
 */
module.exports = async function Speaker (req) {
  let {assetPath} = getAssetPaths()
  let speakerData = getSpeakerData()

  let person = req.params && req.params.speaker ||
               req.pathParameters && req.pathParameters.speaker // Arc 6 transition compat
  person = speakerData.find(s => s.id === person)
  if (!person)
    return // Bails to 404

  let social = req.query.social

  let {name, id, talkTitle} = person

  let html

  if (social || social === '') {
    let content = SocialTemplate({person, assetPath})

    let speaker = {
      content,
      assetPath
    }
    html = await SocialLayout(speaker)
  }
  else {
    // set up <head> content
    let title = `${name} | ${talkTitle}`
    let header = `
      <meta property="og:image" content="${assetPath}/images/social/${id}.png" />
      <meta name="twitter:image" content="${assetPath}/images/social/${id}.png">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:site" content="@cascadiajs">
      <meta name="twitter:title" content="CascadiaJS 2019 | ${name} | ${talkTitle}">
      `

    // pick a random piece of technical content to inject
    let gettingStartedItem = gettingStartedData[Math.floor(Math.random() * gettingStartedData.length)]

    let content = Template({person, assetPath, social, gettingStartedItem})

    let speaker = {
      title,
      header,
      content,
      assetPath
    }
    html = await Layout(speaker)
  }

  return {
    html
  }
}
