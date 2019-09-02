let arc = require('@architect/functions')
let render = require('@architect/shared/render')

exports.handler = arc.http.async(render)
