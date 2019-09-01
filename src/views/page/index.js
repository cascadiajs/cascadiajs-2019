let fs = require('fs')
let exists = fs.existsSync
let read = fs.readFileSync
let md = require('marked')
let join = require('path').join

module.exports = function Page (page) {

  let static = process.env.BEGIN_STATIC_ORIGIN || 'https://localhost:3333/_static/'
  let doc = `${join(__dirname, 'content', page)}.md`

  if (!exists(doc))
    throw Error('Page not found')

  doc = read(doc).toString()
                 .replace(/\$\{STATIC\}/g, static)

  let html = md(doc)

  return `<div id="page">${html}</div>`
}
