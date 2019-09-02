let template = require('./index-template')
let Events = require('./events')
let Speakers = require('./speakers')
let Layout = require('@architect/views/layout')

module.exports = function Index (props) {
  let {speakerData, assetPath, speakerAssetPath} = props

  // Calculate days remaining until the event!
  let daysRemaining = Math.round(((new Date('11/7/2019')).getTime() - Date.now())/ 1000 / 60 / 60 / 24)

  // Set up view content
  let events = Events() || 'COMING SOON!'
  let speakers = Speakers({speakerData, speakerAssetPath}) || 'COMING SOON!'
  let content = template({events, speakers, assetPath, daysRemaining})

  let index = {
    content,
    assetPath
  }
  return Layout(index)
}
