// This layout only exists to enable screenshots of certain pages to be taken for social sharing images
module.exports = function socialLayout (props) {
  let {assetPath, content} = props

  return /*html*/`
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="${assetPath}/styles/normalize.css">
    <link rel="stylesheet" href="https://use.typekit.net/cnx1fnn.css">
    <script src="https://kit.fontawesome.com/439d39b111.js"></script>
    <link rel="stylesheet" href="${assetPath}/styles/styles.css">
  </head>
  <body style="background-image:url('${assetPath}/images/plaid-pattern.svg');">
    <div id="social">
      ${content}
    </div>
  </body>
</html>
`
}