module.exports = function SpeakerTemplate (props) {
  let {person, assetPath, gettingStartedItem} = props
  let {name, id, location, company, talkTitle, abstract, url, slides, resources, ytID} = person
  let slidesUrl, slidesName

  if (slides && slides.indexOf('http') >= 0) {
    slidesUrl = slides
    slidesName = slides.split("/")[2]
  }
  else if (slides) {
    slidesUrl = `${assetPath}/${slides}`
    slidesName = slides
  }

  return /*html*/`
    <div class="default page">
      <section id="speaker">
        <h1>${name}</h1>
        <div class="speaker-info">
          <div class="speaker-photo"><img src="${assetPath}/images/speakers/${id}.jpg" alt="photo of ${name}"/></div>
          <div class="speaker-more">
            <h4>Location</h4>
            <p>${location}</p>
            <h4>Company</h4>
            <p>${company}</p>
            ${url ? `<h4>Website</h4><p><a href="${url}">${url.split("://")[1]}</a></p>` : ''}
            ${slides ? `<h4>Slides</h4><p><a href="${slidesUrl}">${slidesName}</a></p>` : ''}
    ${resources ? `<h4>Resources</h4><p>${resources.map((r, i) => `[${i+1}] <a href="${r}">${r.split("/")[2]}</a> ` ).join('')}` : ''}
          </div>
        </div>
        <h2>Talk: ${talkTitle}</h2>
        <div class="abstract">${abstract}</div>
        ${ytID ? `
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${ytID}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>` : ''}
      </section>
      <section id="getting-started">
        <p><i>And now a message from our sponsors</i> ✨</p>
        <p>Just getting started with JavaScript? Here's a ${gettingStartedItem.type} from our friends at <a href="/getting-started"><img src="${assetPath}/images/sponsors/heroku.svg"/></a></p>
        <p><a href="${gettingStartedItem.url}">${gettingStartedItem.title}</a></p>
        
      </section>
    </div>`
}
