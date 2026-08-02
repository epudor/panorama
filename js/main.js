/* ==========================================================================
   Panorama Padel Club — interactions
   ========================================================================== */
(function () {
  'use strict';

  /* ---- Header shadow on scroll ---- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var burger = document.querySelector('.nav__burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open);
    });
    document.querySelectorAll('.mobile-panel a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('menu-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- WhatsApp links (data-wa) ---- */
  function refreshWaLinks() {
    document.querySelectorAll('[data-wa]').forEach(function (el) {
      var type = el.getAttribute('data-wa') || 'general';
      el.setAttribute('href', window.PPC.waLink(type));
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    });
  }
  refreshWaLinks();
  document.addEventListener('ppc:langchange', refreshWaLinks);

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add('in'); });
  }

  /* ---- Gallery lightbox ---- */
  var galleryBtns = Array.prototype.slice.call(document.querySelectorAll('.gallery button'));
  var lb = document.querySelector('.lightbox');
  if (lb && galleryBtns.length) {
    var lbImg = lb.querySelector('img');
    var idx = 0;
    var srcs = galleryBtns.map(function (b) {
      var img = b.querySelector('img');
      return { src: img.getAttribute('src'), alt: img.getAttribute('alt') || '' };
    });
    function show(i) {
      idx = (i + srcs.length) % srcs.length;
      lbImg.setAttribute('src', srcs[idx].src);
      lbImg.setAttribute('alt', srcs[idx].alt);
    }
    function open(i) { show(i); lb.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function close() { lb.classList.remove('open'); document.body.style.overflow = ''; }
    galleryBtns.forEach(function (b, i) { b.addEventListener('click', function () { open(i); }); });
    lb.querySelector('.lightbox__close').addEventListener('click', close);
    lb.querySelector('.lightbox__nav.prev').addEventListener('click', function () { show(idx - 1); });
    lb.querySelector('.lightbox__nav.next').addEventListener('click', function () { show(idx + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });
  }

  /* ---- Contact form -> WhatsApp ---- */
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var reasonSel = form.querySelector('[name="reason"]');
      var data = {
        name: (form.querySelector('[name="name"]') || {}).value || '',
        phone: (form.querySelector('[name="phone"]') || {}).value || '',
        reason: reasonSel ? reasonSel.options[reasonSel.selectedIndex].text : '',
        message: (form.querySelector('[name="message"]') || {}).value || ''
      };
      window.open(window.PPC.waLink('form', data), '_blank', 'noopener');
    });
  }

  /* ---- Current year ---- */
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
