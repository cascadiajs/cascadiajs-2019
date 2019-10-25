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
        <section id="dayone">
            <h3>Day One<br/>November 7</h3>
            <div class="entry">
                <div class="when">08:00</div>
                <div class="what">
                    <div class="registration">
                        <div class="item"><i class="fas fa-door-open"></i> Doors open at Town Hall.</div>
                        <div class="byline">Register in the lobby. Venue sponsored by
                            <a href="https://www.amazon.jobs/en/jobs/920890/frontend-engineer">
                                <img height="50px" src="${assetPath}/images/sponsors/aws-white.svg" alt="aws logo"/>
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
                            <a href="https://formidable.com"><img src="${assetPath}/images/sponsors/formidable-white.svg" height="25px" alt="Formidable logo"/></a>
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
                        <div class="byline">Take a break, get some coffee, submit that PR you've been working on.</div>
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
                        <div class="byline">Take a break, get some coffee, type up on some notes these awesome talks.</div>
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
        <section id="daytwo">
            <h3>Day Two<br/>November 8</h3>
            <div class="entry">
                <div class="when">08:00</div>
                <div class="what">
                    <div class="registration">
                        <div class="item"><i class="fas fa-door-open"></i> Doors open at Town Hall.</div>
                        <div class="byline">Register in the lobby. Venue sponsored by
                            <a href="https://www.amazon.jobs/en/jobs/920890/frontend-engineer">
                                <img src="${assetPath}/images/sponsors/aws-white.svg" height="50px" alt="aws logo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">09:00</div>
                <div class="what">
                    <div class="mainstage">
                        <div class="location">Great Hall - Level 3</div>
                        <div class="item">Opening Ceremonies</div>
                        <div class="byline">Day Two Talks brought to you by
                            <a href="https://fizbuz.com"><img src="${assetPath}/images/sponsors/fizbuz-white.svg" height="25px" alt="Fizbuz logo"/></a>
                        </div>
                        ${printTalk("main", "2019-11-08T09:30:00-07:00")}
                        ${printTalk("main", "2019-11-08T10:00:00-07:00")}
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">10:30</div>
                <div class="what">
                    <div>
                        <div class="item"><i class="fas fa-coffee"></i> Coffee Break</div>
                        <div class="byline">Take a break, get some coffee, chat with an engineering manager about their team.</div>
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">10:55</div>
                <div class="what">
                    <div class="mainstage">
                        <div class="location">Great Hall - Level 3</div>
                        ${printTalk("main", "2019-11-08T10:55:00-07:00")}
                        ${printTalk("main", "2019-11-08T11:25:00-07:00")}
                        ${printTalk("main", "2019-11-08T11:55:00-07:00")}
                    </div>
                    <div class="lightning">
                        <div class="location">Forum - Level 1</div>
                        ${printTalk("lightning", "2019-11-08T10:55:00-07:00")}
                        ${printTalk("lightning", "2019-11-08T11:10:00-07:00")}
                        ${printTalk("lightning", "2019-11-08T11:25:00-07:00")}
                        ${printTalk("lightning", "2019-11-08T11:40:00-07:00")}
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">12:30</div>
                <div class="what">
                    <div>
                        <div class="item"><i class="fas fa-sandwich"></i> Lunch Break</div>
                        <div class="byline">Lunch will be served in the Forum, on Level 1</div>
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">13:40</div>
                <div class="what">
                    <div class="mainstage">
                        <div class="location">Great Hall - Level 3</div>
                        ${printTalk("main", "2019-11-08T13:40:00-07:00")}
                        ${printTalk("main", "2019-11-08T14:10:00-07:00")}
                        ${printTalk("main", "2019-11-08T14:40:00-07:00")}
                    </div>
                    <div class="lightning">
                        <div class="location">Forum - Level 1</div>
                        ${printTalk("lightning", "2019-11-08T13:40:00-07:00")}
                        ${printTalk("lightning", "2019-11-08T13:55:00-07:00")}
                        ${printTalk("lightning", "2019-11-08T14:10:00-07:00")}
                        ${printTalk("lightning", "2019-11-08T14:25:00-07:00")}
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">15:10</div>
                <div class="what">
                    <div>
                        <div class="item"><i class="fas fa-coffee"></i> Coffee Break</div>
                        <div class="byline">Take a break, get some coffee, make reservations for dinner with your new friends.</div>

                    </div>
                </div>
            </div>
            <div class="entry">
            <div class="when">15:30</div>
                <div class="what">
                    <div class="mainstage">
                        <div class="location">Great Hall - Level 3</div>
                        ${printTalk("main", "2019-11-08T15:30:00-07:00")}
                        ${printTalk("main", "2019-11-08T16:00:00-07:00")}
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">16:30</div>
                <div class="what">
                    <div>
                        <div class="item"><i class="fas fa-gift"></i> Wrapping-up Day Two</div>
                        <div class="byline"></div>
                    </div>
                </div>
            </div>
            <div class="entry">
                <div class="when">19:00</div>
                <div class="what">
                    <div>
                        <div class="item"><i class="fas fa-sparkles"></i> Closing Party</div>
                        <div class="byline">We will host the Closing Party at Optimism Brewing!</div>
                    </div>
                </div>
            </div>
        </section>
    `
}
