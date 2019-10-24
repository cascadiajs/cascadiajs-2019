let {speakerData} = require('@architect/shared/get-speaker-data')()
let {speakerAssetPath} = require('@architect/shared/get-asset-paths')()

module.exports = function Speakers () {
  let speakers = []
  speakerData.forEach((speaker, index) => {
    let {id, name, location, reveal, company, pixelated, ignore} = speaker
    let now = Date.now()
    let revealed = now - new Date(reveal) >= 0

    // Manually hides any speaker
    if (ignore) {
      null
    }
    else if (revealed) {
      let item = `
<div class="speaker">
  <a href="/speakers/${id}"><img src="${speakerAssetPath}/${id}.jpg" alt="photo of ${name}"/></a>
  <div class="speaker-info">
    <div class="speaker-name">${name}</div>
    <div class="speaker-misc">
      ${company}<br/>
      ${location}
    </div>
  </div>
</div>
`
      speakers.push(item)
    }
    else {
      let num = `${index + 1}`.padStart(3, 0)
      let item = `
<div class="speaker">
  <img src="${speakerAssetPath}-pixelated/${pixelated}" alt="Secret Speaker"/>
  <div class="speaker-info">
    <div class="speaker-name">Speaker ${num}</div>
    <div class="speaker-misc">${company}<br/>${location}</div>
  </div>
</div>
`
      speakers.push(item)
    }
  })

  return speakers.join('\n')
}
