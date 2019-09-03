const fs = require('fs')
const join = require('path').join
const hydrate = require('@architect/hydrate')
const tiny = require('tiny-json-http')
const secret = process.env.SECRET

async function updateSpeakers () {
  try {
    if (!secret)
      throw ReferenceError('Shared secret not found')

    let env = process.env.NODE_ENV
    let isLocal = env === 'testing' || process.env.ARC_LOCAL || !env

    // Set up endpoint
    let speakerEndpoint = isLocal && !process.env.CI
      ? 'http://localhost:4444/api/'
      : process.env.SPEAKER_ENDPOINT
    console.log(`Polling speaker endpoint: ${speakerEndpoint}`)
    let event = 'cascadiajs-2019'
    let url = speakerEndpoint + event

    // Set up authorization token and get data
    let headers = {
      Authorization: `Basic ${Buffer.from(secret).toString('base64')}`
    }
    let speakerData = await tiny.get({url, headers})
    console.log('Got speaker data')

    // Write it
    speakerData = JSON.stringify(speakerData.body)
    let shared = join(process.cwd(), 'src', 'shared')
    fs.mkdirSync(shared, {recursive: true})
    fs.writeFileSync(join(shared, `${event}.json`), speakerData)

    // Hydrate it to functions
    hydrate.shared(err => {
      if (err) throw Error(err)
      else console.log(`Successfully updated ${event} speaker list!`)
    })
  }
  catch (err) {
    console.error(err)
  }
}

updateSpeakers()
