module.exports = function IndexTemplate (props) {
  let {speakers} = props

  return /*html*/`
<div class="default page">
  <section id="speakers">
    <h2>Speakers</h2>
    <div id="speaker-list">
      ${speakers}
    </div>
  </section>
</div>
`
}
