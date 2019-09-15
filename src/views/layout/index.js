let mainLayout = require('./layout')
// let getAttendeeData = require('@architect/shared/get-attendee-data')
// let Attendees = require('./attendees')

module.exports = async function Layout (props) {
  let title = props.title || 'Nov 7-8, 2019 | Seattle, WA, USA'
  // let attendeeData = await getAttendeeData()
  // let attendees = Attendees({attendeeData})
  return mainLayout({...props, title})
}
