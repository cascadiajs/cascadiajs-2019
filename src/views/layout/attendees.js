module.exports = function Attendees ({attendeeData}) {
  let attendees = []
  attendeeData.forEach((attendee) => {
    let {nickname, name, image} = attendee
    let item = `
<div class="attendee">
  <a href="https://fizbuz.com/u/${nickname}"><img src="${image}" alt="photo of ${name}"/></a>
</div>
`
    attendees.push(item)
  })

  return attendees.join('\n')
}
