let speakerData = require('@architect/shared/cascadiajs-2019.json')

let static = process.env.NODE_ENV === 'testing' || process.env.ARC_LOCAL
  ? 'http://localhost:4444/_static/'
  : process.env.BEGIN_STATIC_ORIGIN

module.exports = function Speakers () {
  let speakers = []
  speakerData.forEach((speaker,index) => {
    let {id, name, location, reveal, company, pixelated, ignore} = speaker

    let now = Date.now()
    let revealed = now - new Date(reveal) >= 0

    if (ignore) {
      null
    }
    else if (revealed) {
      let item = `
<div class="speaker">
  <a href="/speakers/${id}"><img src="${static}/2019/${id}.jpg" alt="photo of ${name}"/></a>
  <div class="speaker-info">
    <div class="speaker-name">${name}</div>
    <div class="speaker-misc">${company}<br/>${location}</div>
  </div>
</div>
`
      speakers.push(item)
    }

    else {
      let num = `${index + 1}`.padStart(3, 0)
      let item = `
<div class="speaker">
  <img src="${static}/2019-pixelated/${pixelated}" alt="Secret Speaker"/>
  <div class="speaker-info">
    <div class="speaker-name">Speaker ${num}</div>
    <div class="speaker-misc">${company}<br/>${location}</div>
  </div>
</div>
`
      speakers.push(item)
    }
  })

  speakers = speakers.join('\n')
  return speakers
}
