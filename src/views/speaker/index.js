let template = require('./speaker')
let Layout = require('@architect/views/layout')

module.exports = function Speaker(props) {
  let {person, assetPath, speakerAssetPath} = props
  let {name, id, talkTitle} = person

  // Set up view content
  let title = `${name} | ${talkTitle}`
  let header = `
<meta property="og:image" content="${speakerAssetPath}${id}-social.png" />
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@cascadiajs">
<meta name="twitter:title" content="CascadiaJS 2019 | ${name} | ${talkTitle}">
<meta name="twitter:image" content="${speakerAssetPath}${id}-social.png">
  `
  let content = template(props)

  let speaker = {
    title,
    header,
    content,
    assetPath
  }
  return Layout(speaker)
}
