let arc = require("@architect/functions")
let handler = require("@architect/shared/handler")

function route(req, res) {
	handler(req, res)
}

exports.handler = arc.http(route)
