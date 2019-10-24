module.exports = function IndexTemplate (props) {
  let {events, speakers, assetPath, daysRemaining} = props

  return /*html*/`
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
        <a class="cta" href="/tickets">Buy Tickets</a>
      </p>
    </section>
    <section id="metrics">
      <div class="metric">${daysRemaining} days</div>
      <div class="metric-tag">until CascadiaJS!</div>
      <div class="metric">19</div>
      <div class="metric-tag">scholarships funded!</div>
    </section>
    <section class="filler">
      <img src="${assetPath}/images/filler-photo-01.jpg" alt="Speaker at CascadiaJS 2018"/>
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
        CascadiaJS 2019 will be held at the historic and newly renovated
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
    <section id="hero" style="background-image: url(${assetPath}/images/family-photo.jpg);">
      <img src="${assetPath}/images/logo-round.svg" alt="CascadiaJS 2019 logo"/>
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
      <div id="week-schedule">
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
          <p><a title="professional mixer before the conference" href="/mentor-mixer">Mentor Mixer</a></p>
        </div>
        <div class="item">
          <h3>Nov 7-8</h3>
          <p>CascadiaJS Conference</p>
        </div>
        <div class="item">
          <h3>Nov 9-10</h3>
          <p><a title="kids coding with Seattle Coder Dojo" href="/kids-coding">Kids Coding</a></p>
          <p><a title="weekend fun times after the conference" href="/weekend">Weekend Fun Times</a></p>
        </div>
      </div>
    </section>
    <section id="speakers">
      <h2>Speakers</h2>
      <div id="speaker-list">
        ${speakers}
      </div>
    </section>
  </div>
  <div id="right">
    <section id="events">
      <h2>Upcoming JS Events</h2>
      <table id="events-list">
        <tbody>
          ${events}
        </tbody>
      </table>
    </section>
    <section class="filler">
      <img src="${assetPath}/images/filler-photo-02.jpg" alt="Speaker at CascadiaJS 2018"/>
    </section>
    <section id="designed-by">
      <h2>Made in Cascadia</h2>
      <p>This site designed with ❤ by <a href="https://carrie.rabasa.com">Carrie Rabasa</a></p>
    </section>
  </div>
</div>
`
}
