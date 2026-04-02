(function() {
  function buildFooter() {
    var footerHTML = '<footer id="site-footer" role="contentinfo">' +
      '<div class="container">' +
        '<div class="footer-grid">' +

          '<div class="footer-col">' +
            '<p class="footer-col-title">Product</p>' +
            '<a href="index.html#how-it-works">How it works</a>' +
            '<a href="workforce.html">AI Workforce</a>' +
            '<a href="pricing.html">Pricing</a>' +
            '<a href="jobs.html">Jobs we replace</a>' +
            '<a href="index.html#demo">Demo</a>' +
          '</div>' +

          '<div class="footer-col">' +
            '<p class="footer-col-title">Company</p>' +
            '<a href="about.html">About</a>' +
            '<a href="foundation.html">The Aria Foundation</a>' +
            '<span class="muted-link" aria-label="Insights — coming soon">Insights <em style="font-size:11px;">(coming soon)</em></span>' +
            '<a href="mailto:hello@aria.com.au">Contact</a>' +
          '</div>' +

          '<div class="footer-col">' +
            '<p class="footer-col-title">For displaced workers</p>' +
            '<a href="displacement-options.html">Displacement Program</a>' +
            '<span class="muted-link" aria-label="Aria Academy — coming soon">Aria Academy <em style="font-size:11px;">(Coming Soon)</em></span>' +
            '<a href="mailto:cayde@aria.com.au">Contact Cayde</a>' +
          '</div>' +

          '<div class="footer-col">' +
            '<p class="footer-col-title">Legal</p>' +
            '<a href="#">Privacy Policy</a>' +
            '<a href="#">Terms of Service</a>' +
            '<a href="mailto:hello@aria.com.au">hello@aria.com.au</a>' +
          '</div>' +

        '</div>' +

        '<div class="footer-bottom">' +
          '<span>© 2026 Aria — Ballarat, Victoria</span>' +
          '<a href="jobs.html">We take jobs. Here is the list →</a>' +
        '</div>' +

      '</div>' +
    '</footer>';

    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildFooter);
  } else {
    buildFooter();
  }
})();
