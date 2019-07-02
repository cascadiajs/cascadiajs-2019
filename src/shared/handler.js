let render = require("@architect/shared/render")

function handler(req, res) {
	let { page } = req.params
	res(render(page))
}

module.exports = handler