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
    var BASE = 680;        // overall drift amount (px) at full traversal
    var CLAMP = 170;       // max upward drift in px
    var EASE = 0.07;       // lower = more lag / floatier
    var enabled = window.innerWidth > 760;

    var items = nodes.map(function (el) {
      return { el: el, speed: parseFloat(el.getAttribute('data-speed')) || 0.1, cur: 0, target: 0 };
    });

    function measure() {
      var vh = window.innerHeight;
      items.forEach(function (s) {
        var r = s.el.getBoundingClientRect();
        if (r.bottom < -400 || r.top > vh + 400) return;  // skip far off-screen
        // progress 0 (entering from bottom) -> 1 (leaving past top)
        var p = (vh - r.top) / (vh + r.height);
        if (p < 0) p = 0; else if (p > 1) p = 1;
        var t = -p * s.speed * BASE;                      // ALWAYS upward (<= 0)
        s.target = t < -CLAMP ? -CLAMP : t;
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

  /* -------------------------------------------------------
     Residence sliders — auto-rotate with square indicators
     that also change the image when clicked.
  ------------------------------------------------------- */
  [].slice.call(document.querySelectorAll('.res-slider')).forEach(function (slider) {
    var slides = slider.querySelectorAll('.slide');
    var dots = slider.querySelectorAll('.dot');
    if (slides.length < 2) return;
    var idx = 0;
    var interval = parseInt(slider.getAttribute('data-interval'), 10) || 4500;
    var timer = null;

    function go(n) {
      slides[idx].classList.remove('is-active');
      if (dots[idx]) dots[idx].classList.remove('is-active');
      idx = (n + slides.length) % slides.length;
      slides[idx].classList.add('is-active');
      if (dots[idx]) dots[idx].classList.add('is-active');
    }
    function start() { stop(); timer = setInterval(function () { go(idx + 1); }, interval); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    [].slice.call(dots).forEach(function (d, i) {
      d.addEventListener('click', function () { go(i); start(); });
    });
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);
    start();
  });
})();
