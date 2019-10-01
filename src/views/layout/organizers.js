let organizersData = require('./organizers.json')

module.exports = function Organizers({assetPath}) {
  let organizers = []
  organizersData.forEach(organizer => {
    let { id, name, role, location } = organizer
    let item = `
<div class="organizer">
  <img src="${assetPath}/images/organizers/${id}.jpg" alt="photo of ${name}"/>
  <div class="organizer-info">
    <div class="organizer-name">${name}</div>
    <div class="organizer-misc">${role}<br/>${location}</div>
  </div>
</div>
    `
    organizers.push(item)
  })

  return organizers.join('\n')
}
