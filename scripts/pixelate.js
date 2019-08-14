const fs = require('fs')
const Jimp = require('jimp')
const crypto = require('crypto')

async function main() {
  const source = __dirname + '/../build/speakers/source'
  const dest = __dirname + '/../build/speakers/dest'
  fs.readdir(source, async (err, items) => {
    if (err) {
        console.log(err)
        return
    }
    items.forEach(async (file) => {
        let image = await Jimp.read(`${source}/${file}`) 
        let hash = crypto
            .createHash('sha1')
            .update(file)
            .digest('hex')
        console.log(`Pixelating ${file} to ${hash}.png`)
        image
            .pixelate(20)
            .write(`${dest}/${hash}.png`)
    })
  })
}

main()
