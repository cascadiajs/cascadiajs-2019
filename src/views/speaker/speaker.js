module.exports = function speakerTemplate (props) {

  let {name, id, location, company, talkTitle, abstract, static} = props

  return `
<div id="page">
  <section id="speaker">
    <h1>${name}</h1>
    <div class="speaker-info">
      <div class="speaker-photo"><img src="${static}/images/speakers/${id}.jpg" alt="photo of ${name}"/></div>
      <div class="speaker-more">
        <h4>Location</h4>
        <p>${location}</p>
        <h4>Company</h4>
        <p>${company}</p>
        <h4></h4>
      </div>
    </div>
    <h2>Talk: ${talkTitle}</h2>
    <div class="abstract">${abstract}</div>
  </section>
</div>
`
}
