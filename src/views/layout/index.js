let template = require('./layout')

module.exports = function Layout(content, header) {

  let static = process.env.BEGIN_STATIC_ORIGIN || 'https://localhost:3333/_static/'
  let props = {
    content,
    header,
    static
  }
  let page = template(props)

  return page
}
