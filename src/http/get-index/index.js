let arc = require('@architect/functions')
let Index = require('@architect/views/index')
let Speakers = require('@architect/views/speakers')
let Schedule = require('@architect/views/schedule')
let Page = require('@architect/views/page')
let NotFound = require('@architect/views/404')

/**
 * Index & page views
 * - This root function handles the main index view, and...
 * - Anything not specifically caught by explicitly defined paths (i.e. `GET /speakers/:speaker`)
 */
exports.handler = arc.http.async(Index, Speakers, Schedule, Page, NotFound)
