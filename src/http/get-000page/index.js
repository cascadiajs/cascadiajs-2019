let arc = require("@architect/functions")
let render = require("@architect/views/markdown")

function route(req, res) {
	let { page } = req.params
	res(render(page))
}

exports.handler = arc.http(route)
