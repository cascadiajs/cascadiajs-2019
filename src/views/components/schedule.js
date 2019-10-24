const speakers = require('@architect/shared/get-speaker-data')()
const schedule = require('./schedule.json')

const findSpeaker = (id) => {
    return speakers.find((s) => {if (s.id === id) {return s}})
}

const findTalk = (location, start) => {
    return schedule.find((e) => {if (e.location === location && e.start === start) {return e}})
}

const printTalk = (location, time) => {
    let talk = findTalk(location, time)
    let speaker = findSpeaker(talk.speaker)
    return `<div class="item"><a href="/speakers/${speaker.id}">${speaker.talkTitle}</a></div>
    <div class="byline">${speaker.name}</div>`
}

module.exports = function Schedule ({assetPath}) {
    return /*html*/`
        <section>
            <h2>Day One<br/>November 7</h2>
            <div class="entry">
                <div class="when">08:00</div>
                <div class="what">
                    <div class="registration">
                        <div class="item"><i class="fas fa-door-open"></i> Doors open at Town Hall.</div>
                        <div class="byline">Register in the lobby. Venue sponsored by
                            <a href="https://www.amazon.jobs/en/jobs/920890/frontend-engineer">
                                <img src="${assetPath}/images/sponsors/aws.svg" alt="aws logo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">09:15</div>
                <div class="what">
                    <div class="mainstage">
                        <div class="location">Great Hall - Level 3</div>
                        <div class="item">Opening Ceremonies</div>
                        <div class="byline">Day One Talks brought to you by
                            <a href="https://formidable.com"><img src="${assetPath}/images/sponsors/formidable.svg" alt="Formidable logo"/></a>
                        </div>
                        ${printTalk("main", "2019-11-07T09:45:00-07:00")}
                        ${printTalk("main", "2019-11-07T10:15:00-07:00")}
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">10:45</div>
                <div class="what">
                    <div>
                        <div class="item"><i class="fas fa-coffee"></i> Coffee Break</div>
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">11:10</div>
                <div class="what">
                    <div class="mainstage">
                        <div class="location">Great Hall - Level 3</div>
                        ${printTalk("main", "2019-11-07T11:10:00-07:00")}
                        ${printTalk("main", "2019-11-07T11:40:00-07:00")}
                        ${printTalk("main", "2019-11-07T12:10:00-07:00")}
                    </div>
                    <div class="lightning">
                        <div class="location">Forum - Level 1</div>
                        ${printTalk("lightning", "2019-11-07T11:10:00-07:00")}
                        ${printTalk("lightning", "2019-11-07T11:25:00-07:00")}
                        ${printTalk("lightning", "2019-11-07T11:40:00-07:00")}
                        ${printTalk("lightning", "2019-11-07T11:55:00-07:00")}
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">12:40</div>
                <div class="what">
                    <div>
                        <div class="item"><i class="fas fa-sandwich"></i> Lunch Break</div>
                        <div class="byline">Lunch will be served in the Forum, on Level 1</div>
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">14:00</div>
                <div class="what">
                    <div class="mainstage">
                        <div class="location">Great Hall - Level 3</div>
                        ${printTalk("main", "2019-11-07T14:00:00-07:00")}
                        ${printTalk("main", "2019-11-07T14:30:00-07:00")}
                        ${printTalk("main", "2019-11-07T15:00:00-07:00")}
                    </div>
                    <div class="lightning">
                        <div class="location">Forum - Level 1</div>
                        ${printTalk("lightning", "2019-11-07T14:00:00-07:00")}
                        ${printTalk("lightning", "2019-11-07T14:15:00-07:00")}
                        ${printTalk("lightning", "2019-11-07T14:30:00-07:00")}
                        ${printTalk("lightning", "2019-11-07T14:45:00-07:00")}
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">15:30</div>
                <div class="what">
                    <div>
                        <div class="item"><i class="fas fa-coffee"></i> Coffee Break</div>
                    </div>
                </div>
            </div>
            <div class="entry">
            <div class="when">15:55</div>
                <div class="what">
                    <div class="mainstage">
                        <div class="location">Great Hall - Level 3</div>
                        ${printTalk("main", "2019-11-07T15:55:00-07:00")}
                        ${printTalk("main", "2019-11-07T16:25:00-07:00")}
                        ${printTalk("main", "2019-11-07T16:55:00-07:00")}
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">17:25</div>
                <div class="what">
                    <div>
                        <div class="item"><i class="fas fa-gift"></i> Wrapping-up Day One</div>
                        <div class="byline"></div>
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">18:00</div>
                <div class="what">
                    <div>
                        <div class="item"><i class="fas fa-sparkles"></i> Opening Party</div>
                        <div class="byline">We will host the Opening Party on-site at Town Hall!</div>
                    </div>
                </div>
            </div>
        </section>
    `
}
