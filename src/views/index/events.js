let eventsData = require('./events.json')

module.exports = function Events () {
  let events = []
  eventsData.forEach(event => {
    let {date, eventName, link} = event
    // Only show events from this or last month
    let now = new Date()
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

  return events.join('\n')
}
