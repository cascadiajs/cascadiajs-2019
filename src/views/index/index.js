let template = require('./index-template')
let Speakers = require('./speakers')

module.exports = function Index (speakerData) {

  let static = process.env.BEGIN_STATIC_ORIGIN || 'https://localhost:3333/_static/'
  let daysRemaining = Math.round(((new Date('11/7/2019')).getTime() - Date.now())/ 1000 / 60 / 60 / 24)

  let speakers = Speakers(speakerData) || 'COMING SOON!'

  let props = {speakers, static, daysRemaining}
  let index = template(props)

  return index
}
