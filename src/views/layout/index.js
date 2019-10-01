let mainLayout = require('./layout')
let getAssetPaths = require('@architect/shared/get-asset-paths')
let getAttendeeData = require('@architect/shared/get-attendee-data')
let Attendees = require('./attendees')
let Organizers = require('./organizers')

module.exports = async function Layout (props) {
  let title = props.title || 'Nov 7-8, 2019 | Seattle, WA, USA'
  let attendeeData = await getAttendeeData()
  let attendees = Attendees({attendeeData})
  let {assetPath} = getAssetPaths()
  let organizers = Organizers({assetPath})
  return mainLayout({...props, title, attendees, organizers})
}
