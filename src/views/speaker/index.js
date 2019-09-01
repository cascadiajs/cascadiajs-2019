let template = require('./speaker')

module.exports = function Speaker(props) {

  let static = process.env.BEGIN_STATIC_ORIGIN || 'https://localhost:3333/_static/'
  props.static = static
  let speaker = template(props)

  return speaker
}
