// Before / after comparison. Drag the frame or use the slider (keyboard accessible).
document.querySelectorAll('.ba').forEach(function (ba) {
  var frame = ba.querySelector('.ba-frame');
  var top = ba.querySelector('.ba-top');
  var handle = ba.querySelector('.ba-handle');
  var range = ba.querySelector('.ba-range');
  if (!frame || !top || !range) return;

  function set(pct) {
    pct = Math.max(0, Math.min(100, pct));
    top.style.clipPath = 'inset(0 ' + (100 - pct) + '% 0 0)';
    handle.style.left = pct + '%';
    if (range.value != pct) range.value = pct;
  }

  range.addEventListener('input', function () { set(parseFloat(range.value)); });

  var dragging = false;
  function fromEvent(e) {
    var r = frame.getBoundingClientRect();
    var x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
    set((x / r.width) * 100);
  }
  frame.addEventListener('mousedown', function (e) { dragging = true; fromEvent(e); e.preventDefault(); });
  window.addEventListener('mousemove', function (e) { if (dragging) fromEvent(e); });
  window.addEventListener('mouseup', function () { dragging = false; });
  frame.addEventListener('touchstart', function (e) { fromEvent(e); }, { passive: true });
  frame.addEventListener('touchmove', function (e) { fromEvent(e); }, { passive: true });

  set(parseFloat(range.value));
});
