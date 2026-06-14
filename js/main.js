// ARTSQR — interactions
(function () {
  // Header background on scroll
  var header = document.getElementById('header');
  if (header && !header.classList.contains('scrolled')) {
    var onScroll = function () {
      if (window.scrollY > window.innerHeight * 0.7) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile nav
  var toggle = document.getElementById('navToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('open');
    });
  }

  // Accordion (Choose your rhythm)
  var items = document.querySelectorAll('.accordion__item');
  function setBody(item, open) {
    var body = item.querySelector('.accordion__body');
    if (open) body.style.maxHeight = body.scrollHeight + 'px';
    else body.style.maxHeight = null;
  }
  items.forEach(function (item) {
    if (item.classList.contains('open')) setBody(item, true);
    var head = item.querySelector('.accordion__head');
    head.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      items.forEach(function (o) { o.classList.remove('open'); setBody(o, false); });
      if (!isOpen) { item.classList.add('open'); setBody(item, true); }
    });
  });

  // Keep open accordion sized correctly on resize
  window.addEventListener('resize', function () {
    document.querySelectorAll('.accordion__item.open').forEach(function (i) { setBody(i, true); });
  });

  /* -------------------------------------------------------
     Parallax — images in the blue stat sections drift
     relative to the background, with a lerp "lag" so they
     trail the scroll and feel like they are flying.
  ------------------------------------------------------- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var nodes = [].slice.call(document.querySelectorAll('.parallax'));
  if (!reduceMotion && nodes.length) {
    var CLAMP = 90;        // max px of drift in either direction
    var EASE = 0.075;      // lower = more lag / floatier
    var enabled = window.innerWidth > 760;

    var items = nodes.map(function (el) {
      return { el: el, speed: parseFloat(el.getAttribute('data-speed')) || 0.1, cur: 0, target: 0 };
    });

    function measure() {
      var vh = window.innerHeight, vc = vh / 2;
      items.forEach(function (s) {
        var r = s.el.getBoundingClientRect();
        if (r.bottom < -300 || r.top > vh + 300) return; // skip far off-screen
        var fromCenter = (r.top + r.height / 2) - vc;     // +below / -above centre
        var t = -fromCenter * s.speed;                    // float up while rising
        s.target = t > CLAMP ? CLAMP : (t < -CLAMP ? -CLAMP : t);
      });
    }

    function frame() {
      items.forEach(function (s) {
        s.cur += (s.target - s.cur) * EASE;               // smoothing = the "lag"
        s.el.style.transform = 'translate3d(0,' + s.cur.toFixed(2) + 'px,0)';
      });
      requestAnimationFrame(frame);
    }

    window.addEventListener('scroll', function () { if (enabled) measure(); }, { passive: true });
    window.addEventListener('resize', function () {
      enabled = window.innerWidth > 760;
      if (!enabled) items.forEach(function (s) { s.target = 0; });
      measure();
    });

    if (enabled) measure();
    requestAnimationFrame(frame);
  }
})();
