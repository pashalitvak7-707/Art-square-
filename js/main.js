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
})();
