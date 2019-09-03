let fs = require('fs')
let join = require('path').join

module.exports = function getSpeakerData () {
  // Load super secret speakerData (or don't, esp if working locally)
  let speakerData
  let hasFullSpeakerData = fs.existsSync(join(__dirname, 'cascadiajs-2019.json'))
  if (hasFullSpeakerData) {
    // eslint-disable-next-line
    speakerData = require('./cascadiajs-2019.json')
  }
  else {
    // eslint-disable-next-line
    speakerData = require('./cascadiajs-2019-dummy.json')
  }
  return speakerData
}
