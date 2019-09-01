<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${HEADER}
    <link rel="stylesheet" href="https://unpkg.com/normalize.css@^7.0.0">
    <link rel="stylesheet" href="https://use.typekit.net/cnx1fnn.css">
    <script src="https://kit.fontawesome.com/439d39b111.js"></script>
    <link rel="stylesheet" href="${STATIC}/styles/styles.css">
    <link rel="apple-touch-icon" sizes="57x57" href="${STATIC}/favicons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="${STATIC}/favicons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="${STATIC}/favicons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="${STATIC}/favicons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="${STATIC}/favicons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="${STATIC}/favicons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="${STATIC}/favicons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="${STATIC}/favicons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="${STATIC}/favicons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="${STATIC}/favicons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="${STATIC}/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="${STATIC}/favicons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="${STATIC}/favicons/favicon-16x16.png">
    <link rel="manifest" href="${STATIC}/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="${STATIC}/favicons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
  </head>
  <body style="background-image:url('${STATIC}/images/plaid-pattern.svg');">
    <div id="root">
      <header>
        <nav>
          <a href="/"><i class="fas fa-home"></i>Home</a>
          <a href="/why-cascadiajs"><i class="fas fa-heart-square"></i>Why CascadiaJS?</a>
          <a href="/scholarships"><i class="fas fa-user-graduate"></i>Scholarships</a>
          <a href="/sponsor"><i class="fas fa-hand-holding-seedling"></i>Sponsor Us</a>
          <a href="/travel"><i class="fas fa-suitcase"></i>Travel Info</a>
          <a href="/accessibility"><i class="fab fa-accessible-icon"></i>Accessibility</a>
          <a href="/code-of-conduct"><i class="fas fa-dove"></i>Code of Conduct</a>
        </nav>
      </header>
      ${CONTENT}
      <footer>
        <section id="footer-sponsors">
          <section id="sponsors-gold">
            <a href="https://fizbuz.com"><img src="${STATIC}/images/sponsors/fizbuz.svg" alt="Fizbuz logo"/></a>
          </section>
          <section id="sponsors-silver">
            <a href="https://saucelabs.com"><img src="${STATIC}/images/sponsors/sauce-labs.png" alt="Sauce Labs logo"/></a>
            <a href="https://formidable.com"><img src="${STATIC}/images/sponsors/formidable.svg" alt="Formidable logo"/></a>
          </section>
          <section id="sponsors-community">
            <a href="https://egghead.io"><img src="${STATIC}/images/sponsors/egghead.png" alt="Egghead.io logo"/></a>
            <a href="https://stackshare.io"><img src="${STATIC}/images/sponsors/stackshare.svg" alt="StackShare logo"/></a>
            <div id="stackshare"></div>
            <a href="https://www.meetup.com/ReactJS-Vancouver-Meetup/"><img src="${STATIC}/images/sponsors/react-vancouver.png" alt="React Vancouver logo"/></a>
            <a href="http://seattlejs.com/"><img src="${STATIC}/images/sponsors/seattlejs.svg" alt="SeattleJS logo"/></a>
          </section>
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
                  <li><a href="https://join.slack.com/t/cascadiajs/shared_invite/enQtMzcyMjkzMDk0NjQwLTc3YmJiMTk0NTZjNDBjMzg2YTMxNDA4Njk3YTgyZWY0MGM4NjVhZTI0YTUzYTRmYzRlNThhNTIxOGNkMDU1ZGU">Join us on Slack</a></li>
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