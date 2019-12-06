module.exports = function SocialTemplate (props) {
  let {person, assetPath} = props
  let {name, id, location, company, talkTitle, abstract} = person

  return /*html*/`
    <div class="default social-content">
      <section id="speaker">
        <h1>${name}</h1>
        <div class="speaker-info">
          <div class="speaker-photo"><img src="${assetPath}/images/speakers/${id}.jpg" alt="photo of ${name}"/></div>
          <div class="speaker-more">
            <h4>Location</h4>
            <p>${location}</p>
            <h4>Company</h4>
            <p>${company}</p>
          </div>
        </div>
        <h2>Talk: ${talkTitle}</h2>
        <div class="abstract">${abstract}</div>
      </section>
    </div>`
}
