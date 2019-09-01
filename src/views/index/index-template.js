module.exports = function indexTemplate (props) {

  let {static, daysRemaining} = props

  return `
<div id="landing">
  <div id="left">
    <section id="tickets">
      <h2>Tickets</h2>
      <table>
        <thead>
          <tr>
            <th>Deadline</th>
            <th>Jun 28</th>
            <th>Sept 13</th>
            <th>Nov 6</th>
          <tr>
        </thead>
        <tbody>
          <tr>
            <td>Corporate</th>
            <td>$600</td>
            <td>$700</td>
            <td>$800</td>
          </tr>
          <tr>
            <td>Indie</th>
            <td>$400</td>
            <td>$500</td>
            <td>$600</td>
          </tr>
          <tr>
            <td><a href="/scholarships">Scholarship</th>
            <td>$99</td>
            <td>$99</td>
            <td>$99</td>
          </tr>
        </tbody>
      </table>
      <p>
        NOTE: If you are paying yourself, work at a non-profit or a company with less than 10 people, feel free to use the promo code INDIE for $200 off.
      </p>
      <p>
        <a class="cta" href="https://fizbuz.com/signup?placeID=PLoz9mrq5pvw8xvvnomxq71kjlngx406&forwardUrl=https%3A%2F%2Fti.to%2Fevent-loop%2Fcascadiajs-2019%2Fwith%2Fnfb9f7-vxei%2C2jsnjwraibu%2Cdarlfcbexuy%2Coxxgtirrr5o%2Cgxtdhvhs2s8%2Cqzjnfesyonm%2Ccip51mg0glk%2C5atc3qhk-60">Buy a Ticket</a>
      </p>
    </section>
    <section class="filler">
      <img src="${static}/images/filler-photo-01.jpg" alt="Speaker at CascadiaJS 2018"/>
    </section>
    <section id="code-of-conduct">
      <h2>Code of Conduct</h2>
      <p>
        We work hard to provide a safe and inclusive environment for everyone! We expect, and require, all organizers, sponsors, speakers, volunteers, and attendees of all levels to adhere to our <a href="/code-of-conduct">Code of Conduct</a>.
      </p>
    </section>
    <section id="venue">
      <h2>Venue</h2>
      <p>
        CascadiaJS 2019 will be held and the historic and newly renovated
        <a href="https://townhallseattle.org/">Town Hall Seattle</a>
        <br/>
        <br/>
        <b>Town Hall Seattle</b><br/>
        1118 8th Ave<br/>
        Seattle, WA<br/>
        98101
      </p>
    </section>
  </div>
  <div id="main">
    <section id="hero" style="background-image: url(${static}/images/family-photo.jpg);">
      <img src="${static}/images/logo-round.svg" alt="CascadiaJS 2019 logo"/>
      <br/>
      <span id="tagline">CascadiaJS features 2 tracks of 30+ amazing speakers</span><br/>
      <span id="tagline">discussing the cutting-edge of JavaScript, web development and</span><br/>
      <span id="tagline">engineering culture over the course of 2 days.</span>
    </section>
    <section id="email">
      <h2>Stay Connected</h2>
      <!-- Begin Mailchimp Signup Form -->
      <!--link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"-->
      <div id="mc_embed_signup">
      <form action="https://cascadiajs.us1.list-manage.com/subscribe/post?u=ffa37cf28eebc9e75b8558f3b&amp;id=d1b100650c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <div class="mc-field-group">
            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="chloe.obrian@24.dev"/>
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
          </div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ffa37cf28eebc9e75b8558f3b_d1b100650c" tabindex="-1" value=""></div>
          <div class="clear"></div>
        </div>
      </form>
      </div>
      <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='MMERGE3';ftypes[3]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
      <!--End mc_embed_signup-->
    </section>
    <section id="week">
      <h2>Week of CascadiaJS</h2>
      <div id="schedule">
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
          <p>Hacker Bus</p>
          <p>Mentor Mixer</p>
        </div>
        <div class="item">
          <h3>Nov 7-8</h3>
          <p>CascadiaJS Conference</p>
        </div>
        <div class="item">
          <h3>Nov 9-10</h3>
          <p>Weekend Fun Times</p>
        </div>
      </div>
    </section>
    <section id="speakers">
      <h2>Speakers</h2>
      <div id="speaker-list">
        <div class="speaker">
          <a href="/speakers/aaron-turner"><img src="${static}/images/speakers/aaron-turner.png" alt="photo of Aaron Turner"/></a>
          <div class="speaker-info">
            <div class="speaker-name">Aaron Turner</div>
            <div class="speaker-misc">Wasmer<br/>Los Angeles, CA</div>
          </div>
        </div>
        <div class="speaker">
          <a href="/speakers/daria-caraway"><img src="${static}/images/speakers/daria-caraway.jpg" alt="photo of Daria Caraway"/></a>
          <div class="speaker-info">
            <div class="speaker-name">Daria Caraway</div>
            <div class="speaker-misc">Workday<br/>Denver, CO</div>
          </div>
        </div>
        <div class="speaker">
          <a href="/speakers/ej-mason"><img src="${static}/images/speakers/ej-mason.jpg" alt="photo of E.J. Mason"/></a>
          <div class="speaker-info">
            <div class="speaker-name">E.J. Mason</div>
            <div class="speaker-misc">Pearson<br/>Los Angeles, CA</div>
          </div>
        </div>
        <div class="speaker">
          <a href="/speakers/ginger-chien"><img src="${static}/images/speakers/ginger-chien.jpg" alt="photo of Ginger Chien"/></a>
          <div class="speaker-info">
            <div class="speaker-name">Ginger Chien</div>
            <div class="speaker-misc">AT&amp;T<br/>Seattle, WA</div>
          </div>
        </div>
        <div class="speaker">
          <a href="/speakers/isabela-moreira"><img src="${static}/images/speakers/isabela-moreira.jpg" alt="photo of Isabela Moreira"/></a>
          <div class="speaker-info">
            <div class="speaker-name">Isabela Moreira</div>
            <div class="speaker-misc">Cedar AI<br/>Seattle, WA</div>
          </div>
        </div>
        <div class="speaker">
          <a href="/speakers/jasper-schulte"><img src="${static}/images/speakers/jasper-schulte.jpg" alt="photo of Jasper Schulte"/></a>
          <div class="speaker-info">
            <div class="speaker-name">Jasper Schulte</div>
            <div class="speaker-misc">GreenHome<br/>Amsterdam, NE</div>
          </div>
        </div>
        <div class="speaker">
          <a href="/speakers/kinuko-yasuda"><img src="${static}/images/speakers/kinuko-yasuda.jpg" alt="photo of Kinuko Yasuda"/></a>
          <div class="speaker-info">
            <div class="speaker-name">Kinuko Yasuda</div>
            <div class="speaker-misc">Google<br/>Tokyo, JP</div>
          </div>
        </div>
        <div class="speaker">
          <a href="/speakers/claudius-mbemba"><img src="${static}/images/speakers/claudius-mbemba.jpg" alt="photo of Claudius Mbemba"/></a>
          <div class="speaker-info">
            <div class="speaker-name">Claudius Mbemba</div>
            <div class="speaker-misc">Neu<br/>Seattle, WA</div>
          </div>
        </div>
        <div class="speaker">
          <a href="/speakers/saimon-sharif"><img src="${static}/images/speakers/saimon-sharif.jpg" alt="photo of Saimon Sharif"/></a>
          <div class="speaker-info">
            <div class="speaker-name">Saimon Sharif</div>
            <div class="speaker-misc">Attune<br/>New York, NY</div>
          </div>
        </div>
        <div class="speaker">
          <img src="${static}/images/speakers/fdb3112a5367e6798e9a34b6829989f6f6985eff.png" alt="Secret Speaker"/>
          <div class="speaker-info">
            <div class="speaker-name">Speaker 009</div>
            <div class="speaker-misc">Atlassian<br/>Sydney, AU</div>
          </div>
        </div>
        <div class="speaker">
          <img src="${static}/images/speakers/f12ce9b364bea70fc9cf2bacf217cb34b57353b7.png" alt="Secret Speaker"/>
          <div class="speaker-info">
            <div class="speaker-name">Speaker 010</div>
            <div class="speaker-misc">Slack<br/>San Francisco, CA</div>
          </div>
        </div>
        <div class="speaker">
          <img src="${static}/images/speakers/269d2e011fc9403ca597ab8dc9428a1586cd73a5.png" alt="Secret Speaker"/>
          <div class="speaker-info">
            <div class="speaker-name">Speaker 011</div>
            <div class="speaker-misc">New York Times<br/>New York, NY</div>
          </div>
        </div>
        <div class="speaker">
          <img src="${static}/images/speakers/1af0a1b798219d4487afd0e2799e6ead016ea7fa.png" alt="Secret Speaker"/>
          <div class="speaker-info">
            <div class="speaker-name">Speaker 012</div>
            <div class="speaker-misc">Amazon<br/>Seattle, WA</div>
          </div>
        </div>
        <div class="speaker">
          <img src="${static}/images/speakers/956202a39df2282825bfecca2e91c7bdb2d70925.png" alt="Secret Speaker"/>
          <div class="speaker-info">
            <div class="speaker-name">Speaker 013</div>
            <div class="speaker-misc">Morning Consult<br/>Washington, DC</div>
          </div>
        </div>
        <div class="speaker">
          <img src="${static}/images/speakers/cc81c94d40a0ba25a90f4f84ab738e3d10263a36.png" alt="Secret Speaker"/>
          <div class="speaker-info">
            <div class="speaker-name">Speaker 014</div>
            <div class="speaker-misc">Netlify<br/>Boston, MA</div>
          </div>
        </div>
        <div class="speaker">
          <img src="${static}/images/speakers/02df60b2e5b1805f3019c647f60361c92dee4c31.png" alt="Secret Speaker"/>
          <div class="speaker-info">
            <div class="speaker-name">Speaker 015</div>
            <div class="speaker-misc">DockYard<br/>Washington, DC</div>
          </div>
        </div>
        <div class="speaker">
          <img src="${static}/images/speakers/54d4efaed3f78e30b9b595db692cd7362029ddc9.png" alt="Secret Speaker"/>
          <div class="speaker-info">
            <div class="speaker-name">Speaker 016</div>
            <div class="speaker-misc">Pulumi<br/>Seattle, WA</div>
          </div>
        </div>
        <div class="speaker">
          <img src="${static}/images/speakers/89f7c47f6980eef915d81ebe299a9952fa689c11.png" alt="Secret Speaker"/>
          <div class="speaker-info">
            <div class="speaker-name">Speaker 017</div>
            <div class="speaker-misc">Twilio<br/>San Francisco, CA</div>
          </div>
        </div>
        <div class="speaker">
          <div class="no-image"></div>
          <div class="speaker-info">
            <div class="speaker-name">Speaker 018</div>
            <div class="speaker-misc">CBS<br/>Nashville, TN</div>
          </div>
        </div>
        <div class="speaker">
          <img src="${static}/images/speakers/08431cb45c390f1e8141947bb99aab6f28f62ad6.png" alt="Secret Speaker"/>
          <div class="speaker-info">
            <div class="speaker-name">Speaker 019</div>
            <div class="speaker-misc">Microsoft<br/>Seattle, WA</div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div id="right">
    <section id="events">
      <h2>Upcoming JS Events</h2>
      <table id="events-list">
        <tbody>
          <!--tr><td>7/1</td><td>Flatiron School Seattle Coding Community</td></tr>
          <tr><td>7/2</td><td>SeattleJS Hackers</td></tr>
          <tr><td>7/2</td><td>Code Fellows Seattle Meetup</td></tr>
          <tr><td>7/2</td><td>Learn to Code Seattle </td></tr>
          <tr><td>7/8</td><td>Free Code Camp Portland</td></tr>
          <tr><td>7/8</td><td>SeattleJS Hackers</td></tr>
          <tr><td>7/10</td><td>Women Who Code Portland</td></tr>
          <tr><td>7/10</td><td>PDXNODE</td></tr>
          <tr><td>7/11</td><td>Seattle JS</td></tr>
          <tr><td>7/13</td><td>Nodeschool Vancouver</td></tr>
          <tr><td>7/16</td><td>Front End PDX</td></tr>
          <tr><td>7/16</td><td><a href="https://www.eventbrite.com/e/apollo-day-seattle-tickets-62440338734" title="Use promo code CASCADIA for 40% off!">Apollo Day Seattle</a></td></tr>
          <tr><td>7/17</td><td>Beer&&Code Seattle</td></tr>
          <tr><td>7/20</td><td>Nodeschool Vancouver</td></tr>
          <tr><td>7/30</td><td>BellevueJS</td></tr-->
          <tr><td>8/10</td><td><a href="https://www.meetup.com/codefellows/events/263601137/">Code Fellows Seattle Meetup</a></td></tr>
          <tr><td>8/10</td><td><a href="https://www.meetup.com/Learn-Code-Seattle/events/263403236/">Learn to Code Seattle</a></td></tr>
          <tr><td>8/10</td><td><a href="https://www.meetup.com/nodeschool-vancouver/events/262570784/">NodeSchool Vancouver</a></td></tr>
          <tr><td>8/10</td><td><a href="https://www.meetup.com/The-Tech-Academy-Free-Classes-Seattle/events/263594193/">The Tech Academy Free Classes Seattle</a></td></tr>
          <tr><td>8/11</td><td><a href="https://www.meetup.com/seattlejshackers/events/pxqsfryzlbpb/">SeattleJS Hackers</a></td></tr>
          <tr><td>8/13</td><td><a href="https://www.meetup.com/BrainStation-Vancouver/events/263487843/">BrainStation Vancouver</a></td></tr>
          <tr><td>8/13</td><td><a href="https://www.meetup.com/Portland-ReactJS/events/263444168/">Portland ReactJS</a></td></tr>
          <tr><td>8/13</td><td><a href="https://www.meetup.com/seattlejshackers/events/263765505/">SeattleJS Hackers</a></td></tr>
          <tr><td>8/14</td><td><a href="https://www.meetup.com/Beer-Code-Seattle/events/dfmznnyzlbsb/">Beer&amp;&amp;Code Seattle</a></td></tr>
          <tr><td>8/14</td><td><a href="https://www.meetup.com/hacksalem/events/qwgxwgyzlbsb/">Hack Salem!</a></td></tr>
          <tr><td>8/14</td><td><a href="https://www.meetup.com/seattle-software-craftsmanship/events/ghjvxqyzlbsb/">Seattle Software Crafters</a></td></tr>
          <tr><td>8/14</td><td><a href="https://www.meetup.com/Seattle-Web-App-Developers-Group/events/261216051/">Seattle Web App Developers Group</a></td></tr>
          <tr><td>8/14</td><td><a href="https://www.meetup.com/The-Tech-Academy-Free-Classes-Seattle/events/263686088/">The Tech Academy Free Classes Seattle</a></td></tr>
          <tr><td>8/14</td><td><a href="https://www.meetup.com/Women-Who-Code-Portland/events/263765187/">Women Who Code Portland</a></td></tr>
          <tr><td>8/15</td><td><a href="https://www.meetup.com/React-Native-Portland/events/fqnhzqyzlbtb/">React Native Portland</a></td></tr>
          <tr><td>8/15</td><td><a href="https://www.meetup.com/Women-Who-Code-Portland/events/263573371/">Women Who Code Portland</a></td></tr>
          <tr><td>8/17</td><td><a href="https://www.meetup.com/Seattle-NodeSchool/events/263300553/">Seattle NodeSchool</a></td></tr>
          <tr><td>8/19</td><td><a href="https://www.meetup.com/Free-Code-Camp-Portland/events/zxvcsqyzlbzb/">Free Code Camp Portland</a></td></tr>
          <tr><td>8/19</td><td><a href="https://www.meetup.com/lighthouselabsYVR/events/263046581/">Lighthouse Labs Vancouver</a></td></tr>
          <tr><td>8/19</td><td><a href="https://www.meetup.com/seattlejshackers/events/nxqccryzlbzb/">SeattleJS Hackers</a></td></tr>
          <tr><td>8/20</td><td><a href="https://www.meetup.com/Front-End-PDX/events/jvklwqyzlbbc/">Front End PDX</a></td></tr>
          <tr><td>8/20</td><td><a href="https://www.meetup.com/seattlejshackers/events/262984672/">SeattleJS Hackers</a></td></tr>
          <tr><td>8/21</td><td><a href="https://www.meetup.com/seattlejs/events/clmbzqyzlblb/">Annual SeattleJS Community Party!</a></td></tr>
          <tr><td>8/22</td><td><a href="https://www.meetup.com/Ember-js-Seattle-Meetup/events/cwmcnpyzlbdc/">Ember.js Seattle</a></td></tr>
          <tr><td>8/22</td><td><a href="https://www.meetup.com/ProtoSchool-Seattle-Learn-to-Make-the-Decentralized-Web/events/262328555/">ProtoSchool Seattle</a></td></tr>
          <tr><td>8/23</td><td><a href="https://www.meetup.com/techacademy/events/262907439/">Tech Academy Portland Meetup</a></td></tr>
          <tr><td>8/24</td><td><a href="https://www.meetup.com/Mentorship-Saturdays/events/263820248/">Mentorship Saturdays Portland</a></td></tr>
          <tr><td>8/24</td><td><a href="https://www.meetup.com/Women-Who-Code-Portland/events/261034179/">Women Who Code Portland</a></td></tr>
          <tr><td>8/26</td><td><a href="https://www.meetup.com/Seattle-FlatironSchoolStudy/events/263786029/">Flatiron School Seattle Coding Community</a></td></tr>
          <tr><td>8/27</td><td><a href="https://www.meetup.com/BellevueJS/events/llvkklyzlbkc/">BellevueJS</a></td></tr>
          <tr><td>8/27</td><td><a href="https://www.meetup.com/Women-Who-Code-Portland/events/263740752/">Women Who Code Portland</td></tr>
          <tr><td>8/28</td><td><a href="https://www.meetup.com/Portland-JavaScript-Admirers/events/263615230/">Portland JavaScript Admirers</a></td></tr>
          <tr><td>8/28</td><td><a href="https://www.meetup.com/seattle-ts/events/263619537/">Seattle TypeScript</a></td></tr>
          <tr><td>8/29</td><td><a href="https://www.meetup.com/fullstackpdx/events/262455915/">Full Stack PDX</a></td></tr>
          <tr><td>8/29</td><td><a href="https://www.meetup.com/pdxnode/events/ngpncpyzlbmc/">PDXnode</a></td></tr>
        </tbody>
      </table>
    </section>
    <section id="metrics">
      <div class="metric">${daysRemaining} days</div>
      <div class="metric-tag">until CascadiaJS!</div>
      <div class="metric">2</div>
      <div class="metric-tag">scholarships funded!</div>
    </section>
    <section class="filler">
      <img src="${static}/images/filler-photo-02.jpg" alt="Speaker at CascadiaJS 2018"/>
    </section>
    <section id="designed-by">
      <h2>Made in Cascadia</h2>
      <p>This site designed with ❤ by <a href="https://carrie.rabasa.com">Carrie Rabasa</a></p>
    </section>
  </div>

</div>
`
}
