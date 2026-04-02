(function() {
  function initTabs(containerSelector) {
    var container = document.querySelector(containerSelector);
    if (!container) return;

    var tabBtns = container.querySelectorAll('[data-tab]');
    var tabPanels = container.querySelectorAll('[data-panel]');

    tabBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var target = this.dataset.tab;

        tabBtns.forEach(function(b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });

        tabPanels.forEach(function(p) {
          p.style.opacity = '0';
          setTimeout(function() {
            if (p.dataset.panel === target) {
              p.style.display = 'block';
              p.setAttribute('aria-hidden', 'false');
              requestAnimationFrame(function() {
                p.style.opacity = '1';
              });
            } else {
              p.style.display = 'none';
              p.setAttribute('aria-hidden', 'true');
            }
          }, 150);
        });

        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
      });
    });

    // Set initial ARIA attributes
    tabBtns.forEach(function(btn, i) {
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    });
    tabPanels.forEach(function(panel, i) {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-hidden', i === 0 ? 'false' : 'true');
    });
  }

  function initAll() {
    // Try both selectors — if they're the same element, initTabs handles it
    var containers = document.querySelectorAll('.dept-tabs, .tabs-container');
    var initialized = new Set();
    containers.forEach(function(c) {
      if (!initialized.has(c)) {
        initialized.add(c);
        // Use class-based init for each unique container
        if (c.classList.contains('dept-tabs')) {
          initTabsOnElement(c);
        } else {
          initTabsOnElement(c);
        }
      }
    });
  }

  function initTabsOnElement(container) {
    var tabBtns = container.querySelectorAll('[data-tab]');
    var tabPanels = container.querySelectorAll('[data-panel]');
    if (!tabBtns.length) return;

    tabBtns.forEach(function(btn) {
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', btn.classList.contains('active') ? 'true' : 'false');

      btn.addEventListener('click', function() {
        var target = this.dataset.tab;

        tabBtns.forEach(function(b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });

        tabPanels.forEach(function(p) {
          p.style.opacity = '0';
          var panel = p;
          var isTarget = panel.dataset.panel === target;
          setTimeout(function() {
            if (isTarget) {
              panel.style.display = 'block';
              panel.setAttribute('aria-hidden', 'false');
              requestAnimationFrame(function() {
                panel.style.opacity = '1';
              });
            } else {
              panel.style.display = 'none';
              panel.setAttribute('aria-hidden', 'true');
            }
          }, 150);
        });

        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
      });
    });

    tabPanels.forEach(function(panel) {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-hidden', panel.style.display === 'none' ? 'true' : 'false');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
