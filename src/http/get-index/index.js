var Layout = require("@architect/views/layout")

let content = `
  <h1>
    CascadiaJS 2019
  </h1>

  <p class="center-text">
    When: November 7 - 8, 2019 <b>(save the date!)</b>
  </p>

  <p class="center-text">
    Where: the newly renovated
    <a href="https://townhallseattle.org/">Town Hall</a> (Seattle, WA,
    USA)<br /><br />
    <img
      src="https://122g2g321ipu7384u15dtr81-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/West-Facade-with-fade.jpg"
      alt="illustration of renovated Town Hall building"
    />
  </p>
`

exports.handler = async function http() {
	return {
		status: 200,
		type: "text/html; charset=utf8",
		body: Layout(content)
	}
}
