let eventsData = require('./events.json')

module.exports = function Events() {
  let events = []
  eventsData.forEach(event => {
    let { date, eventName, link } = event
    let now = new Date()
    // Only show events from this or next month
    let monthDelta = Number(date.split('/')[0]) - now.getMonth() - 1
    // Only show events for running 30 days range
    let dayDelta = 30 * monthDelta + Number(date.split('/')[1]) - now.getDate()

    if (monthDelta < 0 || monthDelta > 1) return
    if (dayDelta > 30) return

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
