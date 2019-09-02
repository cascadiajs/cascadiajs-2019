let template = require('./layout')

module.exports = function Layout(props) {
  props.title = props.title || 'Nov 7-8, 2019 | Seattle, WA, USA'
  return template(props)
}
