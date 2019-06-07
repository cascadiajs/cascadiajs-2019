var Layout = require("@architect/views/layout")

let content = `
  <h1>
    CascadiaJS 2019
  </h1>
  <p><img src="${process.env.BEGIN_STATIC_ORIGIN}/2018-stickers.jpg" alt="stickers on table at 2018 conference"/></p>
  <p>
    CascadiaJS features a single track of 24 amazing speakers discussing the cutting-edge of JavaScript, 
    web development and engineering culture over the course of 2 days.
  </p>
  <p>We also work hard to provide a safe 
    and inclusive environment for everyone! We expect, and require, all organizers, sponsors, speakers, 
    volunteers, and attendees of all levels to adhere to our <a href="/code-of-conduct">Code of Conduct</a>. 
  </p>
  <section id="tickets">
    <h2>Tickets</h2>
    <p>
      Early Bird tickets will go on sale on <span class="exclaim">Friday, June 7th at 10am PDT</span>.
    </p>
  </section>
  
  <h2>Schedule</h2>
  <section id="schedule">
    <div class="item">
      <h3>Nov 4</h3>
      <p><a href="/workshop-reactjs" title="React training by Formidable, the premier JavaScript consultancy trusted by engineers.">ReactJS Workshop</a></p>
    </div>
    <div class="item">
      <h3>Nov 5-6</h3>
      <p><a href="/workshop-graphql" title="Want to learn GraphQL but you’re not sure where to get started? Get a solid foundation in this hands-on,
        two-day workshop.">GraphQL Workshop</a></p>
    </div>
    <div class="item">
      <h3>Nov 6</h3>
      <p><a href="#hacker-bus">Hacker Bus</a></p>
      <p><a href="#mentor-mixer">Mentor Mixer</a></p>
    </div>
    <div class="item">
      <h3>Nov 7-8</h3>
      <p><a href="#conference">CascadiaJS Conference</a></p>
    </div>
    <div class="item">
      <h3>Nov 9-10</h3>
      <p><a href="#fun-times">Weekend Fun Times</a></p>
    </div>
  </section>
  <h2>Location</h2>
  <p id="conference">
   The newly renovated
    <a href="https://townhallseattle.org/">Town Hall</a> (Seattle, WA,
    USA)<br /><br />
    <img
      src="https://122g2g321ipu7384u15dtr81-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/West-Facade-with-fade.jpg"
      alt="illustration of renovated Town Hall building"
    />
  </p>
  <h2>Hacker Bus</h2>
  <p id="hacker-bus">
    We are chartering buses to bring folks from Portland, OR and Vancouver, BC to Seattle! 
    Travel to the conference in style with fellow developers and enjoy forking repos and submitting 
    PRs on the Wi-Fi.<br/><br/>
    PLEASE NOTE that these tickets are only good for one way travel on Nov 6.
  </p>
  <h2>Mentor Mixer</h2>
  <p id="mentor-mixer">
    We will be organizing a mentor mixer the evening before the conference for our Scholarship recipients.
  </p>
  <h2>Weekend Fun Times</h2>
  <p id="fun-times">
    TBD fun weekend activities with your fellow Cascadians!
  </p>
`

exports.handler = async function http() {
	return {
		status: 200,
		type: "text/html; charset=utf8",
		body: Layout(content)
	}
}
