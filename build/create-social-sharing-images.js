const join = require('path').join
const puppeteer = require('puppeteer')
const sandbox = require('@architect/architect').sandbox
const getSpeakerData = require('../src/shared/get-speaker-data')
const url = 'http://localhost:3333'


async function createImages () {
  // start the sandbox webserver
  const end = await sandbox.start()

  // define destination for social sharing images
  const dest = join(__dirname, '..', 'public', 'images', 'social')

  // set-up headless browser
  const browser = await puppeteer.launch({
    defaultViewport: {
      height: 576,
      width: 798,  // wanted 768px, but images didn't turn out right, so added 30px /shrug
      deviceScaleFactor: 1
    }
  })

  // for all speakers, generate a fresh social sharing image

  let speakerData = getSpeakerData()
  for (let i in speakerData) {
    let {id} = speakerData[i]
    console.log(`Generating a screen shot for ${id}`)
    const page = await browser.newPage()
    await page.goto(`${url}/speakers/${id}?social`)
    await page.screenshot({path: `${dest}/${id}.png`})
  }

  // shut down te browser
  await browser.close()
  // shut down the sandbox
  await end()

}

createImages()

