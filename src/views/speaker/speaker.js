module.exports = function speakerTemplate (props) {

  let {name, avatar, location, company, talk, synopsis, static} = props

  return `
<section id="speaker">
  <h1>${name}</h1>
  <div class="speaker-info">
    <div class="speaker-photo"><img src="${static}/images/speakers/${avatar}" alt="photo of ${name}"/></div>
    <div class="speaker-more">
      <h4>Location</h4>
      <p>${location}</p>
      <h4>Company</h4>
      <p>${company}</p>
      <h4></h4>
    </div>
  </div>
  <h2>Talk: ${talk}</h2>
  <div class="abstract">${synopsis}</div>
</section>
`
}
