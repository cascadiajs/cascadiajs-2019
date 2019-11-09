module.exports = function IndexTemplate (props) {
  let {schedule, assetPath} = props

  return /*html*/`
<div id="landing">
  <div id="main">
    <section id="hero">
      <div id="logo"><img src="${assetPath}/images/cjs-sunbreak-logo.svg" alt="CascadiaJS 2019 logo"/></div>
      <div id="tagline">
        <h1>CascadiaJS features 2 tracks of 37 amazing speakers discussing the cutting-edge of JavaScript, web development and engineering culture over the course of 2 days.</h1>
        <a class="cta nope" href="#">SOLD OUT</a>
        </div>
    </section>
    <section id="week">
      <h2>Week of CascadiaJS</h2>
      <div id="week-schedule">
        <div class="item">
          <h3>Nov 4</h3>
          <p><a href="/workshop-reactjs" title="React training by Formidable, the premier JavaScript consultancy trusted by engineers.">ReactJS Workshop</a></p>
        </div>
        <div class="item">
          <h3>Nov 5-6</h3>
          <p><a href="/workshop-graphql" title="Want to learn GraphQL but you’re not sure where to get started? Get a solid foundation in this hands-on,
            two-day workshop.">GraphQL Workshop</a></p>
        </div>
        <div class="item">
          <h3>Nov 6</h3>
          <p><a title="professional mixer before the conference" href="/mentor-mixer">Mentor Mixer</a></p>
        </div>
        <div class="item">
          <h3>Nov 7-8</h3>
          <p>CascadiaJS Conference</p>
        </div>
        <div class="item">
          <h3>Nov 9-10</h3>
          <p><a title="kids coding with Seattle Coder Dojo" href="/kids-coding">Kids Coding</a></p>
          <p><a title="weekend fun times after the conference" href="/weekend">Weekend Fun Times</a></p>
        </div>
      </div>
    </section>
    <section class="schedule">
      <h2>Conference Schedule</h2>
      <div>
        ${schedule}
      </div>
    </section>
  </div>
</div>
`
}
