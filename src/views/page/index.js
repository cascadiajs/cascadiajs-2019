let fs = require('fs')
let exists = fs.existsSync
let read = fs.readFileSync
let md = require('marked')
let join = require('path').join
let getAssetPaths = require('@architect/shared/get-asset-paths')
let Layout = require('@architect/views/layout')

/**
 * Page view: catchall for all other pages, authored either in markdown or HTML
 */
module.exports = async function Page (req) {
  let page = req.path.substr(1)
  let doc = join(__dirname, 'content', `${page}.md`)
  if (!exists(doc))
    doc = join(__dirname, 'content', `${page}.html`)

  if (!exists(doc))
    return // Bails to 404

  let {assetPath} = getAssetPaths()

  // Set up view content
  doc = read(doc).toString()
                 .replace(/\$\{STATIC\}/g, assetPath)

  let title = doc.split('\n')[0].replace('# ', '')
  let content = `<div class="default page">${md(doc)}</div>`

  page = {
    title,
    content,
    assetPath
  }
  let html = await Layout(page)
  return {
    html
  }
}
