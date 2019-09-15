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
  let attendeeData
  let table = 'data'
  let key = 'cascadiajs2019'

  try {
    console.log('reading from DB')
    attendees = await data.get({table, key})
    attendeeData = attendees && attendees.attendeeData
    if (!attendeeData)
      attendeeData = await fetchFromApi()
    if (!attendeeData)
      throw Error('no attendees found')
    else {
      let epoch = Date.now() / 1000
      let ttl = epoch + (60*5) // 5 minutes
      console.log('writing to DB')
      attendees = await data.set({table, key, ttl, attendeeData})
      attendeeData = attendees.attendeeData
      return attendeeData
    }
  }
  catch (err) {
    console.log(err)
    throw Error(err)
  }
}
