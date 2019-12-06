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

  //console.log(process.env.NODE_ENV, process.env.BEGIN_ENV, process.env.CI)
  const isLocal = process.env.BEGIN_ENV === 'testing'
  //console.log(isLocal)

  // set-up headless browser
  let browser
  let height = 576
  let width = 798
  let deviceScaleFactor = 1

  if (isLocal) {
    console.log("Loading globally installed localdev puppeteer")
    let puppeteer = require(`${globalModulesPath}/puppeteer`)
    browser = await puppeteer.launch({
      defaultViewport: {
        height,
        width,  // wanted 768px, but images didn't turn out right, so added 30px /shrug
        deviceScaleFactor
      }
    })
  }
  else {
    console.log()
    const chrome = require('chrome-aws-lambda')
    const puppeteer = require('puppeteer-core')
    const executablePath = await chrome.executablePath
    console.log(`Loading AWS build of puppeteer, Chrome path = ${executablePath}`)
    browser = await puppeteer.launch({
      args: chrome.args,
      executablePath,
      headless: chrome.headless,
      defaultViewport: {
        height,
        width,
        deviceScaleFactor,
      },
    })
  }



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

