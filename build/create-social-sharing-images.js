/* eslint-disable global-require */
const join = require('path').join
const globalModulesPath = require('global-modules')
const sandbox = require('@architect/sandbox')
const getSpeakerData = require('../src/shared/get-speaker-data')
const url = 'http://localhost:3333'


async function createImages () {
  // start the sandbox webserver
  const end = await sandbox.start()

  // define destination for social sharing images
  const dest = join(__dirname, '..', 'public', 'images', 'social')

  // determine environment this is running in
  const isLocal = process.env.BEGIN_ENV === undefined

  // set-up headless browser
  let browser
  let height = 576
  let width = 798 // wanted 768px, but images didn't turn out right, so added 30px /shrug
  let deviceScaleFactor = 1

  if (isLocal) {
    console.log("Loading globally installed localdev puppeteer")
    let puppeteer = require(`${globalModulesPath}/puppeteer`)
    browser = await puppeteer.launch({
      defaultViewport: {
        height,
        width,
        deviceScaleFactor
      }
    })
  }
  else {
    // "trick" Puppeteer into recognizing that this as a Lambda env
    process.env.AWS_EXECUTION_ENV = "AWS_Lambda_nodejs10.x"
    process.env.AWS_LAMBDA_FUNCTION_NAME = "..."
    // load Chromium
    const chromium = require('chrome-aws-lambda')
    //const puppeteer = require('puppeteer-core')
    const executablePath = await chromium.executablePath
    console.log(`Loading AWS build of puppeteer, Chrome path = ${executablePath}`)
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      executablePath,
      headless: chromium.headless,
      defaultViewport: {
        height,
        width,
        deviceScaleFactor,
      },
    })
  }

  // for all speakers, generate a fresh social sharing image

  let speakerData = getSpeakerData()

  // temporarily reduce array size
  speakerData = speakerData.slice(0, 15)
  let promises = []
  for (let i in speakerData) {
    let {id} = speakerData[i]
    console.log(`Generating a screen shot for ${id}`)
    let _page
    let promise = browser.newPage()
      .then(page => _page = page)
      .then(page => page.goto(`${url}/speakers/${id}?social`))
      .then(() => _page)
      .then(page => page.screenshot({path: `${dest}/${id}.png`}))
      .then(() => console.log(`Done for: ${id}`))
      .catch(err => console.log(err))

    promises.push(promise)
  }


  Promise.all(promises).then(async function() {
    console.log("Shutting down")
    // shut down te browser
    await browser.close()
    // shut down the sandbox
    await end()
  })


}

createImages()

