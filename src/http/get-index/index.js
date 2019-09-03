let arc = require('@architect/functions')
let Index = require('@architect/views/index')
let Page = require('@architect/views/page')
let NotFound = require('@architect/views/404')

exports.handler = arc.http.async(Index, Page, NotFound)
