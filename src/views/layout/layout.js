module.exports = function mainLayout (props) {
  let {title, header, assetPath, content, attendees, organizers} = props
  attendees = attendees || 'ATTENDEES COMING SOON!'

  return /*html*/`
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CascadiaJS 2019 | ${title}</title>
    ${header ? header : ''}
    <link rel="stylesheet" href="${assetPath}/styles/normalize.css">
    <link rel="stylesheet" href="https://use.typekit.net/cnx1fnn.css">
    <script src="https://kit.fontawesome.com/439d39b111.js"></script>
    <link rel="stylesheet" href="${assetPath}/styles/styles.css">
    <link rel="apple-touch-icon" sizes="57x57" href="${assetPath}/favicons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="${assetPath}/favicons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="${assetPath}/favicons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="${assetPath}/favicons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="${assetPath}/favicons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="${assetPath}/favicons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="${assetPath}/favicons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="${assetPath}/favicons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="${assetPath}/favicons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="${assetPath}/favicons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="${assetPath}/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="${assetPath}/favicons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="${assetPath}/favicons/favicon-16x16.png">
    <link rel="manifest" href="${assetPath}/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="${assetPath}/favicons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
  </head>
  <body style="background-image:url('${assetPath}/images/plaid-pattern.svg');">
    <div id="root">
      <div class="corner-ribbon top-right sticky blue"><a href="https://2020.cascadiajs.com">Join us for CascadiaJS 2020!</a></div>
      <header>
        <nav>
          <a href="/"><i class="fas fa-home"></i>Home</a>
          <a href="/why-cascadiajs"><i class="fas fa-heart-square"></i>About</a>
          <!--a href="/tickets"><i class="fas fa-ticket-alt"></i>Tickets</a-->
          <!--a href="/schedule"><i class="fas fa-calendar"></i>Schedule</a-->
          <a href="/speakers"><i class="fas fa-microphone"></i>Speakers</a>
          <a href="/jobs"><i class="fas fa-briefcase"></i>Jobs</a>
          <a href="/getting-started"><i class="fas fa-laptop"></i>Learning</a>
          <!--a href="/seattle-guide"><i class="fas fa-map"></i>Directions</a-->
          <!--a href="/travel"><i class="fas fa-suitcase"></i>Travel</a-->
          <!--a href="/venue"><i class="fas fa-home"></i>Venue</a-->
          <!--a href="/scholarships"><i class="fas fa-user-graduate"></i>Scholarships</a-->
          <!--a href="/sponsor"><i class="fas fa-hand-holding-seedling"></i>Sponsor Us</a-->
          <a href="/accessibility"><i class="fab fa-accessible-icon"></i>Accessibility</a>
          <a href="/code-of-conduct"><i class="fas fa-dove"></i>Code of Conduct</a>
        </nav>
      </header>
      ${content}
      <footer>
        <section id="footer-sponsors">
          <section id="sponsors-platinum">
            <a href="https://www.amazon.jobs/en/jobs/920890/frontend-engineer"><img src="${assetPath}/images/sponsors/aws.svg" alt="aws logo"/></a>
          </section>
          <section id="sponsors-gold">
            <a href="https://fizbuz.com"><img src="${assetPath}/images/sponsors/fizbuz.svg" alt="Fizbuz logo"/></a>
            <a href="https://formidable.com"><img src="${assetPath}/images/sponsors/formidable.svg" alt="Formidable logo"/></a>
            <a href="/getting-started"><img src="${assetPath}/images/sponsors/heroku.svg" alt="heroku logo"/></a>
            <a href="https://opensource.facebook.com/"><img src="${assetPath}/images/sponsors/fboss.svg" alt="Facebook Open Source logo"/></a>
          </section>
          <section id="sponsors-silver">
            <a href="https://saucelabs.com"><img src="${assetPath}/images/sponsors/saucelabs.svg" alt="Sauce Labs logo"/></a>
            <a href="https://developer.microsoft.com/en-us/advocates/index.html"><img src="${assetPath}/images/sponsors/microsoft.svg" alt="Microsoft logo"/></a>
            <a href="https://www.moovweb.com"><img src="${assetPath}/images/sponsors/moovweb.svg" alt="moovweb logo"/></a>
            <a href="https://twilio.com"><img src="${assetPath}/images/sponsors/twilio.svg" alt="twilio logo"/></a>
            <a href="https://docusign.com"><img src="${assetPath}/images/sponsors/docusign.svg" alt="docusign logo"/></a>
            <a href="https://auth0.com"><img src="${assetPath}/images/sponsors/auth0.svg" alt="auth0 logo"/></a>
            <a href="https://www.zulily.com/careers"><img src="${assetPath}/images/sponsors/zulily.svg" alt="zulily logo"/></a>
            <a href="/spaces"><img src="${assetPath}/images/sponsors/spaces.svg" alt="spaces logo"/></a>
          </section>
        </section>
        <section id="footer-community">    
          <a href="https://egghead.io"><img src="${assetPath}/images/sponsors/eggheadio.svg" alt="Egghead.io logo"/></a>
          <a href="https://stripe.com/jobs"><img src="${assetPath}/images/sponsors/stripe.svg" alt="stripe logo"/></a>
          <a href="https://mozilla.com"><img src="${assetPath}/images/sponsors/mozilla.svg" alt="mozilla logo"/></a>
          <a href="https://www.codezilla.nl"><img src="${assetPath}/images/sponsors/codezilla.svg" alt="codezilla logo"/></a>
          <a href="http://begin.com/"><img src="${assetPath}/images/sponsors/begin.svg" alt="Begin logo"/></a>
          <a href="https://surge.sh"><img src="${assetPath}/images/sponsors/surge.svg" alt="surge logo"/></a>
          <a href="http://seattlejs.com/"><img src="${assetPath}/images/sponsors/seattlejs.svg" alt="SeattleJS logo"/></a>
          <a href="https://stackshare.io"><img src="${assetPath}/images/sponsors/stackshare.svg" alt="StackShare logo"/></a>
          <a href="https://www.meetup.com/ReactJS-Vancouver-Meetup/"><img src="${assetPath}/images/sponsors/react-vancouver.png" alt="React Vancouver logo"/></a>
        </section>
        <section id="organizers">
          <h2>Organizers</h2>
          <div id="organizer-list">
            ${organizers}
          </div>
        </section>
        <section id="attendees">
          <h2>Who's Coming?</h2>
          <div id="attendee-list">
            ${attendees}
          </div>
          <p><a href="/directory">Conference Directory FAQ</a></p>
        </section>
        <section id="footer-info">
            <section id="footer-core-info">
                <div>CascadiaJS</div>
                <div>Nov 7-8, 2019</div>
                <div>Seattle, WA</div>
              </section>
              <section id="footer-stay-connected">
                <h2>Stay Connected</h2>
                <ul id="connect-list">
                  <li><a href="http://eepurl.com/dPmCkT">Sign-up for our Newsletter</a></li>
                  <li><a href="https://join.slack.com/t/cascadiajs/shared_invite/enQtNzYzMzYxMTc0OTc5LWM0ZDZiZDc5MDgwMmFkODdlZTdiMGE3NjFhYTZmNWVkMWEwMDcxNWE0Nzg5YTcwOGQzZDk0Y2M3ZWRmN2QwNzU">Join us on Slack</a></li>
                  <li><a href="https://twitter.com/cascadiajs">Follow us on Twitter</a></li>
                  <li><a href="https://github.com/cascadiajs/cascadiajs-2019/">Send us a PR on Github</a></li>
                </ul>
              </section>
              <section id="footer-past-events">
                <h2>Past Events</h2>
                <ul id="past-confs">
                  <li><a href="https://2018.cascadiajs.com">2018</a></li>
                  <li><a href="https://2016.cascadiafest.org">2016</a></li>
                  <li><a href="https://2015.cascadiajs.com">2015</a></li>
                  <li><a href="https://2014.cascadiajs.com">2014</a></li>
                  <li><a href="https://2013.cascadiajs.com">2013</a></li>
                  <li><a href="https://2012.cascadiajs.com">2012</a></li>
                </ul>
              </section>
        </section>
      </footer>
    </div>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <!--script async src="https://www.googletagmanager.com/gtag/js?id=UA-75426-17"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-75426-17');
    </script-->
    <script>
        var googleUA = 'UA-75426-17';

        var googleDomainList = ['2019.cascadiajs.com', 'ti.to'];

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', googleUA, 'auto', {'allowLinker': true});
        ga('require', 'linker');
        ga('linker:autoLink', googleDomainList);
        ga('send', 'pageview');
      </script>
  </body>
</html>
`
}