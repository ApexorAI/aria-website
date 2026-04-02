(function() {
  function init() {
    var callsInput = document.getElementById('calc-calls');
    var valueInput = document.getElementById('calc-value');
    var missedEl = document.getElementById('calc-missed');
    var diffEl = document.getElementById('calc-diff');
    var callsValEl = document.getElementById('calc-calls-val');
    var valueValEl = document.getElementById('calc-value-val');

    if (!callsInput) return;

    function calculate() {
      var calls = parseInt(callsInput.value, 10);
      var value = parseInt(valueInput.value, 10);
      var conversionRate = 0.6; // 60% conversion
      var monthlyMissed = calls * 4 * value * conversionRate;
      var ariaCost = 199;
      var diff = monthlyMissed - ariaCost;

      if (missedEl) missedEl.textContent = '$' + monthlyMissed.toLocaleString('en-AU');
      if (diffEl) diffEl.textContent = '$' + Math.max(0, diff).toLocaleString('en-AU') + ' left on the table';
      if (callsValEl) callsValEl.textContent = calls;
      if (valueValEl) valueValEl.textContent = '$' + value;
    }

    callsInput.addEventListener('input', calculate);
    valueInput.addEventListener('input', calculate);
    calculate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
