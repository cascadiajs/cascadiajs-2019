let getAssetPaths = require('@architect/shared/get-asset-paths')
let Schedule = require('../components/schedule')
let Template = require('./template')
let Layout = require('@architect/views/layout')

/**
 * Schedule view
 */
module.exports = async function Index (req) {
  if (req.path === '/schedule') {
    let {assetPath} = getAssetPaths()
    // Set up view content
    let schedule = Schedule({assetPath}) || 'COMING SOON!'
    let content = Template({schedule, assetPath})

    let index = {
      content,
      assetPath
    }
    let html = await Layout(index)
    return {
      html
    }
  }
  else return // Hand off to next view
}
