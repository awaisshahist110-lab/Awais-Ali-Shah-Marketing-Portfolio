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

// Section rail: mark the case study currently in view. Without JS the rail is
// still a working set of anchor links, it just does not highlight.
(function () {
  var rail = document.querySelector('.rail');
  if (!rail || !('IntersectionObserver' in window)) return;

  var links = {};
  rail.querySelectorAll('a[href^="#"]').forEach(function (a) {
    links[a.getAttribute('href').slice(1)] = a;
  });
  var sections = Object.keys(links)
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  if (!sections.length) return;

  var visible = {};
  function paint() {
    var current = null;
    sections.forEach(function (s) { if (visible[s.id]) current = current || s.id; });
    Object.keys(links).forEach(function (id) {
      links[id].classList.toggle('is-current', id === current);
    });
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
    paint();
  }, { rootMargin: '-140px 0px -55% 0px' });

  sections.forEach(function (s) { io.observe(s); });
})();
