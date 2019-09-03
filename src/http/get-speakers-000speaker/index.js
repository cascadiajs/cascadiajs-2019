let arc = require('@architect/functions')
let Speaker = require('@architect/views/speaker')
let NotFound = require('@architect/views/404')

exports.handler = arc.http.async(Speaker, NotFound)
