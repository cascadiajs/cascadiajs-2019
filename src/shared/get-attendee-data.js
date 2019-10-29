let data = require('@begin/data')
const tiny = require('tiny-json-http')

const fetchFromApi = async () => {
  let attendeeData
  if (process.env.NODE_ENV !== 'testing') {
    let url = 'https://fizbuz.com/graphql'
    let data = {query: '{accountsByPlaceID(placeID:"PLoz9mrq5pvw8xvvnomxq71kjlngx406"){name,nickname,image}}'}
    attendeeData = await tiny.post({url, data})
  }
  else {
    // make local dev without Internet access better
    attendeeData = {body: {data: {accountsByPlaceID: []}}}
  }

  return attendeeData.body.data.accountsByPlaceID
}

module.exports = async function getSpeakerData () {
  let attendees
  let attendeeData
  let table = 'data'
  let key = 'cascadiajs2019'

  try {
    //console.log('Reading attendees from Begin Data')
    attendees = await data.get({table, key})
    attendeeData = attendees && attendees.attendeeData
    if (!attendeeData) {
      //console.log('attendees not in DB, fetching from API')
      attendeeData = await fetchFromApi()
      let epoch = Date.now() / 1000
      let ttl = epoch + (60*5) // 5 minutes
      //console.log(`Writing attendees to Begin Data and caching for 5 minutes`)
      attendees = await data.set({table, key, ttl, attendeeData})
      attendeeData = attendees.attendeeData
    }

    if (!attendeeData) {
      throw Error('ERROR: failed to get attendees from DB or API')
    }
  }
  catch (err) {
    console.log(err)
    // if we fail to fetch from the API, just return an empty array
    attendeeData = []
  }

  return attendeeData
}
