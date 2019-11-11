module.exports = function SpeakerTemplate (props) {
  let {person, assetPath, speakerAssetPath, gettingStartedItem} = props
  let {name, id, location, company, talkTitle, abstract, url, slides, resources} = person

  return /*html*/`
<div class="default page">
  <section id="speaker">
    <h1>${name}</h1>
    <div class="speaker-info">
      <div class="speaker-photo"><img src="${speakerAssetPath}/${id}.jpg" alt="photo of ${name}"/></div>
      <div class="speaker-more">
        <h4>Location</h4>
        <p>${location}</p>
        <h4>Company</h4>
        <p>${company}</p>
        ${url ? `<h4>Website</h4><p><a href="${url}">${url.split("://")[1]}</a></p>` : ''}
        ${slides ? `<h4>Slides</h4><p><a href="${slides}">${slides.split("://")[1]}</a></p>` : ''}
        ${resources ? `<h4>Resources</h4>${resources.map(r => `<p><a href="${r}">${r.split("://")[1]}</a></p>` ).join('')}` : ''}
      </div>
    </div>
    <h2>Talk: ${talkTitle}</h2>
    <div class="abstract">${abstract}</div>
  </section>
  <section id="getting-started">
    <p><i>And now a message from our sponsors</i> ✨</p>
    <p>Just getting started with JavaScript? Here's a ${gettingStartedItem.type} from our friends at <a href="/getting-started"><img src="${assetPath}/images/sponsors/heroku.svg"/></a></p>
    <p><a href="${gettingStartedItem.url}">${gettingStartedItem.title}</a></p>
    
  </section>
</div>
`
}
