let getAssetPaths = require('@architect/shared/get-asset-paths')

let Events = require('./events')
let Speakers = require('../components/speakers')
let IndexTemplate = require('./index-template')
let Layout = require('@architect/views/layout')

/**
 * Index view
 */
module.exports = async function Index (req) {
  if (req.path === '/') {
    let {assetPath} = getAssetPaths()
    // Calculate days remaining until the event!
    let daysRemaining = Math.round(((new Date('11/7/2019')).getTime() - Date.now())/ 1000 / 60 / 60 / 24)
    // Set up view content
    let events = Events() || 'COMING SOON!'
    let speakers = Speakers() || 'COMING SOON!'
    let content = IndexTemplate({events, speakers, assetPath, daysRemaining})

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
