let eventsData = require('./events.json')

module.exports = function events () {
  let events = []

  eventsData.forEach(event => {
    let {date, eventName, link} = event
    let now = new Date()
    // Only show events from this or last month
    if (now.getMonth() - date.split('/')[0] >= 1) return

    link = link ? `<a href="${link}">` : ''
    let item = `
<tr>
  <td>${date}</td>
  <td>
    ${link}${eventName}${link ? '</a>' : ''}
  </td>
</tr>
    `
    events.push(item)
  })

  events = events.join('\n')
  return events
}
