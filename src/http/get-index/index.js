let body = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>CascadiaJS 2019 | Nov 7-8, 2019 | Seattle, WA, USA</title>
    <link rel="stylesheet" href="https://unpkg.com/normalize.css@^7.0.0">
    <link rel="stylesheet" href="https://use.typekit.net/cnx1fnn.css">
    <style>
      body {
        font-family: proxima-nova, sans-serif;
        font-weight: 100;
      }
      .center-text {
        text-align:center;
      }
    </style>
  </head>
  <body>

    <h1 class="center-text">
      CascadiaJS 2019
    </h1>

    <p class="center-text">
      When: November 7 - 8, 2019 <b>(save the date!)</b>
    </p>

    <p class="center-text">
      Where: the newly renovated <a href="https://townhallseattle.org/">Town Hall</a> (Seattle, WA, USA)<br/><br/>
      <img src="https://122g2g321ipu7384u15dtr81-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/West-Facade-with-fade.jpg" alt="illustration of renovated Town Hall building"/>
    </p>

    <p class="center-text">
      <i>✨This website is powered by <a href="https://begin.com">Begin</a></i>
    </p>

  </body>
</html>
`

exports.handler = async function http() {
	return {
		type: "text/html; charset=utf8",
		body
	}
}
