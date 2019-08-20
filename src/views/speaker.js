const fs = require("fs")
const read = fs.readFileSync
const join = require("path").join

// load layout into memory
const speakerPath = join(__dirname, "speaker") + ".html"
let speakerContent = read(speakerPath).toString()


module.exports = function Speaker(speaker) {
  let content = speakerContent.replace(/\$\{NAME\}/g, speaker.name)
  content = content.replace(/\$\{AVATAR\}/g, speaker.avatar)
  content = content.replace(/\$\{LOCATION\}/g, speaker.location)
  content = content.replace(/\$\{COMPANY\}/g, speaker.company)
  content = content.replace(/\$\{TALK\}/g, speaker.talk)
  content = content.replace(/\$\{ABSTRACT\}/g, speaker.synopsis)

  return content
}
