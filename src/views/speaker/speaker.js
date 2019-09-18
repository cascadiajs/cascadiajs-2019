module.exports = function SpeakerTemplate (props) {
  let {person, speakerAssetPath} = props
  let {name, id, location, company, talkTitle, abstract, url} = person

  return `
<div id="page">
  <section id="speaker">
    <h1>${name}</h1>
    <div class="speaker-info">
      <div class="speaker-photo"><img src="${speakerAssetPath}/${id}.jpg" alt="photo of ${name}"/></div>
      <div class="speaker-more">
        <h4>Location</h4>
        <p>${location}</p>
        <h4>Company</h4>
        <p>${company}</p>
        ${url && `<h4>Website</h4><p><a href="${url}">${url.split("://")[1]}</a></p>`}
      </div>
    </div>
    <h2>Talk: ${talkTitle}</h2>
    <div class="abstract">${abstract}</div>
  </section>
</div>
`
}
