let body = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>CascadiaJS 2019 | Nov 7-8, 2019 | Seattle, WA, USA</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
  </head>
  <body>

    <h1 class="center-text">
      CascadiaJS 2019
    </h1>

    <p class="center-text">
      When: November 7 - 8, 2019
    </p>

    <p class="center-text">
      Where: <a href="https://townhallseattle.org/">Town Hall</a> (Seattle, WA, USA)
    </p>

    <p class="center-text">
      <b>Save the date! More info coming soon!</b>
    </p>

    <p class="center-text">
      <i>This website is powered by the kind folks at <a href="https://begin.com">Begin</a></i>
    </p>

  </body>
</html>
`

exports.handler = async function http(req) {
  console.log(req)
  return {
    type: 'text/html; charset=utf8',
    body
  }
}
