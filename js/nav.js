(function() {
  var links = [
    { label: 'How it works', href: 'index.html#how-it-works' },
    { label: 'AI Workforce', href: 'workforce.html' },
    { label: 'Pricing', href: 'pricing.html' },
    { label: 'Jobs we replace', href: 'jobs.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Foundation', href: 'foundation.html' },
  ];

  function buildNav() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    if (path === '') path = 'index.html';

    var navHTML = '<nav id="site-nav" role="navigation" aria-label="Main navigation">' +
      '<div class="nav-inner container">' +
        '<a href="index.html" class="nav-logo" aria-label="Aria — Home">' +
          '<div class="nav-logo-icon" aria-hidden="true">A</div>' +
          '<span class="nav-logo-text">Aria</span>' +
        '</a>' +
        '<div class="nav-links" id="nav-links-desktop" role="menubar">' +
          links.map(function(l) {
            var isActive = l.href === path || l.href.startsWith(path + '#') || (path === 'index.html' && l.href === 'index.html#how-it-works');
            var pageMatch = l.href.split('#')[0] === path;
            return '<a href="' + l.href + '" class="nav-link' + (pageMatch ? ' active' : '') + '" role="menuitem">' + l.label + '</a>';
          }).join('') +
          '<a href="https://app.aria.com.au/login" class="btn-primary" style="padding:8px 18px;font-size:14px;" aria-label="Sign in to Aria">Sign in →</a>' +
        '</div>' +
        '<button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="nav-mobile">' +
          '<span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>' +
        '</button>' +
      '</div>' +
    '</nav>' +
    '<div class="nav-mobile-overlay" id="nav-mobile" aria-hidden="true" role="dialog" aria-label="Mobile navigation">' +
      '<button class="nav-mobile-close" id="nav-mobile-close" aria-label="Close menu">×</button>' +
      '<nav class="nav-mobile-links" aria-label="Mobile menu">' +
        links.map(function(l) {
          return '<a href="' + l.href + '" class="nav-mobile-link">' + l.label + '</a>';
        }).join('') +
        '<a href="https://app.aria.com.au/login" class="btn-primary btn-lg" style="margin-top:16px;display:inline-block;" aria-label="Sign in to Aria">Sign in →</a>' +
      '</nav>' +
    '</div>';

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    var hamburger = document.getElementById('nav-hamburger');
    var overlay = document.getElementById('nav-mobile');
    var closeBtn = document.getElementById('nav-mobile-close');

    function openMenu() {
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function closeMenu() {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      hamburger.focus();
    }

    hamburger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeMenu();
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeMenu();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildNav);
  } else {
    buildNav();
  }
})();
