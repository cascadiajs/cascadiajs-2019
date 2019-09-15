let data = require('@begin/data')
const tiny = require('tiny-json-http')

const fetchFromApi = async () => {
  let url = 'https://fizbuz.com/graphql'
  let data = {query: '{accountsByPlaceID(placeID:"PLoz9mrq5pvw8xvvnomxq71kjlngx406"){name,nickname,image}}'}
  console.log('calling API')
  let attendeeData = await tiny.post({url, data})
  // should probably cache this data some kind of smart way (5 minutes or so)
  return attendeeData.body.data.accountsByPlaceID
}

module.exports = async function getSpeakerData () {
  let attendees
  let table = 'data'
  let key = 'cascadiajs2019'

  try {
    console.log('reading from DB')
    attendees = await data.get({table, key})
  }
  catch (err) {
    console.log(err)
    attendees = await fetchFromApi()
    let ttl = Date.now() + (60*5) // 5 minutes
    console.log('writing to DB')
    await data.set({table, key, ttl, attendees})
  }

  return attendees

}
