let arc = require('@architect/functions')
let render = require('@architect/views/render')

exports.handler = arc.http.async(render)
