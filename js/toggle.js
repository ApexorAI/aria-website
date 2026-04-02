(function() {
  function init() {
    var toggleBtn = document.getElementById('toggle-btn');
    var withoutEl = document.getElementById('toggle-without');
    var withEl = document.getElementById('toggle-with');
    if (!toggleBtn) return;

    var showingWith = false;

    toggleBtn.addEventListener('click', function() {
      showingWith = !showingWith;
      if (showingWith) {
        withoutEl.style.display = 'none';
        withEl.style.display = 'block';
        toggleBtn.textContent = 'With Aria';
        toggleBtn.style.background = 'var(--teal)';
        toggleBtn.setAttribute('aria-label', 'Currently showing: With Aria. Click to toggle.');
      } else {
        withoutEl.style.display = 'block';
        withEl.style.display = 'none';
        toggleBtn.textContent = 'Without Aria';
        toggleBtn.style.background = '#dc2626';
        toggleBtn.setAttribute('aria-label', 'Currently showing: Without Aria. Click to toggle.');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
