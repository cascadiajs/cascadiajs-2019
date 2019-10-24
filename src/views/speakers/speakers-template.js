module.exports = function IndexTemplate (props) {
  let {speakers} = props

  return /*html*/`
<div id="landing">
  <div id="left">
    <!-- stuff can go here -->
  </div>
  <div id="main">
    <section id="speakers">
      <h2>Speakers</h2>
      <div id="speaker-list">
        ${speakers}
      </div>
    </section>
  </div>
  <div id="right">
    <!-- stuff can go here -->
  </div>
</div>
`
}
