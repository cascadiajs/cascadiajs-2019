let fs = require('fs')
let exists = fs.existsSync
let read = fs.readFileSync
let md = require('marked')
let join = require('path').join
let Layout = require('@architect/views/layout')

module.exports = function Page (props) {
  let {page, assetPath} = props

  let doc = `${join(__dirname, 'content', page)}.md`

  if (!exists(doc))
    throw Error('Page not found')

  // Set up view content
  doc = read(doc).toString()
                 .replace(/\$\{STATIC\}/g, assetPath)
  let title = doc.split('\n')[0].replace('# ', '')
  let content = `<div id="page">${md(doc)}</div>`

  page = {
    title,
    content,
    assetPath
  }
  return Layout(page)
}
