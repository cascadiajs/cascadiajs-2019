let getAssetPaths = require('@architect/shared/get-asset-paths')
let Speakers = require('../components/speakers')
let SpeakersTemplate = require('./speakers-template')
let Layout = require('@architect/views/layout')

/**
 * Speakers view
 */
module.exports = async function Index (req) {
  if (req.path === '/speakers') {
    let {assetPath} = getAssetPaths()
    // Set up view content
    let speakers = Speakers() || 'COMING SOON!'
    let content = SpeakersTemplate({speakers, assetPath})

    let index = {
      content,
      assetPath
    }
    let html = await Layout(index)
    return {
      html
    }
  }
  else return // Hand off to page view
}
