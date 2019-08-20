let render = require("@architect/shared/render")

function handler(req, res) {
	let { page, speaker } = req.params
	res(render({page, speaker}))
}

module.exports = handler