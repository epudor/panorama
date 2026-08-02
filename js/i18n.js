/* ==========================================================================
   Panorama Padel Club — i18n engine
   Spanish is the source of truth in the HTML (crawlable default).
   This file provides English overrides + the ES/EN toggle.
   ========================================================================== */
(function () {
  'use strict';

  var STORE = 'ppc_lang';
  var WA_NUMBER = '34608160186';

  /* English overrides, keyed by data-i18n / data-i18n-* values.
     If a key is missing, the original Spanish DOM text is kept. */
  var EN = {
    /* ---- Meta (per page, only the relevant keys exist on each page) ---- */
    'meta.home.title': 'Panorama Padel Club | Panoramic Padel Courts in La Nucía, Alicante',
    'meta.home.desc': 'Panorama Padel Club in La Nucía — next-generation panoramic courts, a professional academy, tournaments and a bar with the best views on the Costa Blanca. Book via WhatsApp.',
    'meta.club.title': 'The Club | Panorama Padel Club — La Nucía',
    'meta.club.desc': 'Discover Panorama Padel Club: modern facilities, super-panoramic courts and a bar with panoramic views, ideally located between Altea, Benidorm, Alfaz del Pi and La Nucía.',
    'meta.academy.title': 'Academy & Coaching | Panorama Padel Club',
    'meta.academy.desc': 'Padel academy for every level at Panorama Padel Club. Beginner to high-performance programmes, kids classes and qualified coaches. Book your class via WhatsApp.',
    'meta.tournaments.title': 'Tournaments & Leagues | Panorama Padel Club',
    'meta.tournaments.desc': 'Weekly leagues, express and mixed tournaments and a ranking system all year round at Panorama Padel Club, La Nucía. Sign up via WhatsApp.',
    'meta.contact.title': 'Contact | Panorama Padel Club — La Nucía, Alicante',
    'meta.contact.desc': 'Contact Panorama Padel Club in La Nucía: address, opening hours, phone and WhatsApp booking. Carrer San Marino, 2, 03530 La Nucía, Alicante.',

    /* ---- Navigation ---- */
    'nav.home': 'Home',
    'nav.club': 'The Club',
    'nav.academy': 'Academy',
    'nav.tournaments': 'Tournaments',
    'nav.contact': 'Contact',

    /* ---- Global CTAs ---- */
    'cta.book': 'Book',
    'cta.book_wa': 'Book via WhatsApp',
    'cta.contact_wa': 'Message us on WhatsApp',
    'cta.ask_wa': 'Ask via WhatsApp',
    'cta.menu': 'Menu',

    /* ---- Hero (home) ---- */
    'hero.eyebrow': '360° Padel Zone · La Nucía',
    'hero.title': 'Train, compete<br>and <span class="hl">enjoy</span>',
    'hero.sub': 'Next-generation panoramic courts, a professional academy and a bar with the best views on the Costa Blanca.',
    'hero.cta_club': 'Discover the club',
    'hero.stat1': 'Panoramic views',
    'hero.stat2': 'Open all week',
    'hero.stat3': 'Coaching',

    /* ---- Benefits (home) ---- */
    'benefits.eyebrow': 'Why Panorama',
    'benefits.title': 'A padel club with a 360° view',
    'benefits.sub': 'Everything you need to train, compete and enjoy — under one panoramic roof.',
    'benefit1.t': 'Panoramic courts',
    'benefit1.d': 'Latest-generation courts with 360° views of the sea and the mountains.',
    'benefit2.t': 'Professional academy',
    'benefit2.d': 'Classes for every level with qualified coaches and personalised plans.',
    'benefit3.t': 'Tournaments & leagues',
    'benefit3.d': 'Weekly leagues, express and mixed tournaments all year round.',
    'benefit4.t': 'Bar with a view',
    'benefit4.d': 'Relax in our bar and terrace with the best panoramic views around.',
    'benefit5.t': 'Padel shop',
    'benefit5.d': 'Professional gear and the best brands to raise your game.',
    'benefit6.t': 'Fitness & wellness',
    'benefit6.d': 'Physical prep, functional training, pilates and indoor cycling.',

    /* ---- Split feature (home) ---- */
    'split.eyebrow': 'The founder',
    'split.title': "Giorgio Aresu's new padel club",
    'split.p': 'Strategically located between Altea, Benidorm, Alfaz del Pi and La Nucía, Giorgio Aresu has created a club to experience padel differently: modern facilities, a warm atmosphere and the best views on the Costa Blanca.',
    'split.li1': 'Easy booking by WhatsApp or phone',
    'split.li2': 'Modern, accessible facilities',
    'split.li3': 'An active community and social events',
    'split.li4': 'A prime location on the Costa Blanca',
    'split.cta': 'Discover the club',

    /* ---- Stat band ---- */
    'band.s1': 'Panoramic views',
    'band.s2': 'Academy & coaches',
    'band.s3': 'Days open',
    'band.s4': 'Member experience',

    /* ---- Tournaments teaser (home) ---- */
    'thome.eyebrow': 'Compete',
    'thome.title': 'Tournaments & leagues',
    'thome.sub': 'Join the action — weekly leagues, express tournaments and mixed formats for every level.',
    'thome.c1.badge': 'Weekly league',
    'thome.c1.t': 'Panorama League',
    'thome.c1.d': 'Play every week, climb the ranking and improve match after match.',
    'thome.c2.badge': 'Express',
    'thome.c2.t': 'Express & mixed tournaments',
    'thome.c2.d': 'One-day tournaments with a great atmosphere and prizes.',
    'thome.cta': 'See all tournaments',

    /* ---- Testimonials ---- */
    'tst.eyebrow': 'Community',
    'tst.title': 'What our players say',
    'tst.sub': 'Sample reviews — replace with your real customer testimonials.',
    'tst1.q': 'The best courts in the area and unbeatable views. Booking by WhatsApp takes seconds.',
    'tst1.n': 'Carlos M.',
    'tst1.r': 'Club member',
    'tst2.q': 'The academy has taken my game to another level. The coaches are fantastic with all levels.',
    'tst2.n': 'Laura G.',
    'tst2.r': 'Academy student',
    'tst3.q': 'Great atmosphere, modern facilities and a bar with amazing views. My favourite plan every week.',
    'tst3.n': 'David R.',
    'tst3.r': 'League player',

    /* ---- CTA band (shared) ---- */
    'ctaband.title': 'Ready to hit the court?',
    'ctaband.p': 'Book your court in seconds — message us on WhatsApp and we\'ll sort out availability, classes or tournaments for you.',

    /* ---- Footer ---- */
    'footer.tagline': 'Panoramic courts, professional academy and the best views on the Costa Blanca. Your padel club in La Nucía.',
    'footer.explore': 'Explore',
    'footer.contact_h': 'Contact',
    'footer.follow': 'Follow us',
    'footer.hours_h': 'Opening hours',
    'footer.hours_week': 'Mon–Sat: 8:00–14:00 & 17:00–23:00',
    'footer.hours_sun': 'Sun: 8:00–14:00',
    'footer.summer': 'Summer schedule (Jun–Aug)',
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Website redesigned concept.',

    /* ---- Floating / aria ---- */
    'aria.wa_float': 'Book via WhatsApp',
    'aria.open_menu': 'Open menu',
    'aria.lang': 'Language',
    'aria.gallery': 'Open image',

    /* ==================== EL CLUB ==================== */
    'club.hero.eyebrow': 'The Club',
    'club.hero.title': 'Panorama Padel Club',
    'club.hero.sub': 'Modern facilities and a bar with panoramic views for your best moments on and off the court.',
    'club.crumb': 'The Club',
    'club.story.eyebrow': 'Our story',
    'club.story.title': 'Welcome to Giorgio Aresu\'s new padel club',
    'club.story.p1': 'At Panorama Padel Club you\'ll find modern facilities and a bar with panoramic views for your best entertainment.',
    'club.story.p2': 'Strategically located between Altea, Benidorm, Alfaz del Pi and La Nucía, our mission is to deliver a first-class sporting experience for players of every level.',
    'club.story.li1': 'Super-panoramic, latest-generation courts',
    'club.story.li2': 'Comfortable, welcoming common areas',
    'club.story.li3': 'Bar and terrace with panoramic views',
    'club.fac.eyebrow': 'Facilities',
    'club.fac.title': 'Everything under one panoramic roof',
    'club.fac1.t': 'Panoramic courts',
    'club.fac1.d': 'Latest-generation courts built with advanced materials and technology.',
    'club.fac2.t': 'Bar & terrace',
    'club.fac2.d': 'A Panorama bar with panoramic views to relax before and after playing.',
    'club.fac3.t': 'Common areas',
    'club.fac3.d': 'Comfortable, welcoming spaces designed for the whole padel community.',
    'club.fac4.t': 'Coming soon',
    'club.fac4.d': 'A multifunctional building with offices, shop, changing rooms and a bar with sea views.',
    'club.gallery.eyebrow': 'Gallery',
    'club.gallery.title': 'A look inside the club',
    'club.gallery.sub': 'Panoramic courts, community and the Costa Blanca atmosphere.',

    /* ==================== ACADEMIA ==================== */
    'ac.hero.eyebrow': 'Academy',
    'ac.hero.title': 'Academy & Coaching',
    'ac.hero.sub': 'Classes for every level with qualified coaches. Whatever your goal, we build the plan that gets you there.',
    'ac.crumb': 'Academy',
    'ac.intro.eyebrow': 'Programmes',
    'ac.intro.title': 'Find your programme',
    'ac.intro.sub': 'From your very first steps to competition level — choose the path that fits you and book your spot via WhatsApp.',
    'ac.p1.t': 'Beginner',
    'ac.p1.d': 'Your first steps in padel: technique, rules and lots of fun.',
    'ac.p1.f1': 'Groups by level',
    'ac.p1.f2': 'Basic technique & positioning',
    'ac.p1.f3': 'Loan equipment available',
    'ac.p2.t': 'Improvement',
    'ac.p2.d': 'Refine your strokes, tactics and match play with structured sessions.',
    'ac.p2.f1': 'Stroke & tactics work',
    'ac.p2.f2': 'Match situations',
    'ac.p2.f3': 'Video feedback',
    'ac.p2.tag': 'Most popular',
    'ac.p3.t': 'High performance',
    'ac.p3.d': 'Competition-focused training with physical preparation and strategy.',
    'ac.p3.f1': 'Advanced tactics',
    'ac.p3.f2': 'Physical preparation',
    'ac.p3.f3': 'Competition planning',
    'ac.p4.t': 'Kids',
    'ac.p4.d': 'Fun, safe classes that build coordination and a love for the game.',
    'ac.p4.f1': 'Age-appropriate groups',
    'ac.p4.f2': 'Games & fundamentals',
    'ac.p4.f3': 'Certified coaches',
    'ac.price.ask': 'Ask for prices',
    'ac.more.eyebrow': 'More activities',
    'ac.more.title': 'Beyond the court',
    'ac.more.sub': 'Complete your training with our fitness and wellness activities.',
    'ac.m1': 'Physical preparation',
    'ac.m2': 'Functional training',
    'ac.m3': 'Pilates',
    'ac.m4': 'Indoor cycling',
    'ac.coach.eyebrow': 'The team',
    'ac.coach.title': 'Meet our coaches',
    'ac.coach.sub': 'Qualified professionals dedicated to helping you improve.',
    'ac.c1.role': 'Head coach · Former pro player',
    'ac.c2.role': 'Padel coach',
    'ac.c3.role': 'Padel coach',

    /* ==================== CAMPEONATOS ==================== */
    'to.hero.eyebrow': 'Compete',
    'to.hero.title': 'Tournaments & Leagues',
    'to.hero.sub': 'Weekly leagues, express and mixed tournaments and a ranking system all year round. Whatever your level, there\'s a competition for you.',
    'to.crumb': 'Tournaments',
    'to.fmt.eyebrow': 'Formats',
    'to.fmt.title': 'Ways to compete',
    'to.f1.t': 'Weekly leagues',
    'to.f1.d': 'Play every week, add up points and climb the club ranking.',
    'to.f2.t': 'Express tournaments',
    'to.f3.t': 'Mixed tournaments',
    'to.f2.d': 'One-day tournaments with a great atmosphere and prizes.',
    'to.f3.d': 'Mixed pairs formats to play and meet new people.',
    'to.f4.t': 'Ranking system',
    'to.f4.d': 'A club ranking that rewards your progress and consistency.',
    'to.up.eyebrow': 'Calendar',
    'to.up.title': 'Upcoming events',
    'to.up.sub': 'Check the latest tournaments. Message us on WhatsApp to confirm dates and sign up.',
    'to.e1.badge': 'Open',
    'to.e1.t': 'Express Tournament',
    'to.e1.d': 'A one-day tournament for every level, with a great atmosphere and prizes.',
    'to.e1.meta': 'Panorama Padel Club · La Nucía',
    'to.e2.badge': 'League',
    'to.e2.t': 'Panorama Weekly League',
    'to.e2.d': 'Sign up with your partner and compete every week to top the ranking.',
    'to.e2.meta': 'Panorama Padel Club · La Nucía',
    'to.join': 'Sign up via WhatsApp',
    'to.how.title': 'How to sign up',
    'to.how.p': 'Signing up is easy: message us on WhatsApp with your name, your level and the format you\'re interested in, and we\'ll take care of the rest.',

    /* ==================== CONTACTO ==================== */
    'co.hero.eyebrow': 'Contact',
    'co.hero.title': 'Get in touch',
    'co.hero.sub': 'Book a court, ask about classes or come and enjoy the views. We\'re here to help.',
    'co.crumb': 'Contact',
    'co.info.eyebrow': 'Contact details',
    'co.info.title': 'We\'d love to hear from you',
    'co.info.sub': 'The fastest way to book is WhatsApp — we usually reply within minutes during opening hours.',
    'co.addr.h': 'Address',
    'co.phone.h': 'Phone',
    'co.wa.h': 'WhatsApp',
    'co.wa.v': 'Chat with us now',
    'co.email.h': 'Email',
    'co.hours.h': 'Opening hours',
    'co.form.title': 'Send us a message',
    'co.form.sub': 'Fill in the form and we\'ll open WhatsApp with your message ready to send.',
    'co.form.name': 'Name',
    'co.form.name_ph': 'Your name',
    'co.form.phone': 'Phone (optional)',
    'co.form.phone_ph': 'Your phone number',
    'co.form.reason': 'Reason',
    'co.form.r1': 'Book a court',
    'co.form.r2': 'Academy / classes',
    'co.form.r3': 'Tournaments & leagues',
    'co.form.r4': 'Other enquiry',
    'co.form.msg': 'Message',
    'co.form.msg_ph': 'Tell us what you need...',
    'co.form.send': 'Send via WhatsApp',
    'co.form.note': 'This opens WhatsApp with your message pre-filled. No data is stored on this site.',
    'co.map.title': 'How to find us',
    'co.hours.mon': 'Monday', 'co.hours.tue': 'Tuesday', 'co.hours.wed': 'Wednesday',
    'co.hours.thu': 'Thursday', 'co.hours.fri': 'Friday', 'co.hours.sat': 'Saturday', 'co.hours.sun': 'Sunday',
    'co.hours.wknd_note': 'Summer schedule (June–August)'
  };

  /* ---- WhatsApp message templates ---- */
  var WA_MSG = {
    es: {
      booking: '¡Hola Panorama Padel Club! 👋 Me gustaría reservar una pista. ¿Me podéis indicar la disponibilidad?',
      academy: '¡Hola! Estoy interesado/a en las clases de la academia. ¿Me dais más información?',
      tournament: '¡Hola! Quiero apuntarme a un torneo / liga. ¿Me contáis los próximos?',
      general: '¡Hola Panorama Padel Club! 👋 Me gustaría más información.',
      form: function (d) {
        return '¡Hola Panorama Padel Club! 👋\n\n' +
          'Nombre: ' + d.name + '\n' +
          (d.phone ? 'Teléfono: ' + d.phone + '\n' : '') +
          'Motivo: ' + d.reason + '\n\n' +
          d.message;
      }
    },
    en: {
      booking: 'Hi Panorama Padel Club! 👋 I\'d like to book a court. Could you let me know your availability?',
      academy: 'Hi! I\'m interested in the academy classes. Could you send me more information?',
      tournament: 'Hi! I\'d like to sign up for a tournament / league. What\'s coming up?',
      general: 'Hi Panorama Padel Club! 👋 I\'d like some more information.',
      form: function (d) {
        return 'Hi Panorama Padel Club! 👋\n\n' +
          'Name: ' + d.name + '\n' +
          (d.phone ? 'Phone: ' + d.phone + '\n' : '') +
          'Reason: ' + d.reason + '\n\n' +
          d.message;
      }
    }
  };

  var originals = new Map();
  function remember(el, prop, val) {
    if (!originals.has(el)) originals.set(el, {});
    var o = originals.get(el);
    if (!(prop in o)) o[prop] = val;
  }
  function original(el, prop) {
    var o = originals.get(el);
    return o ? o[prop] : undefined;
  }

  function getLang() {
    var l = localStorage.getItem(STORE);
    return l === 'en' ? 'en' : 'es';
  }

  function apply(lang) {
    var en = lang === 'en';
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      remember(el, 'text', el.textContent);
      var k = el.getAttribute('data-i18n');
      el.textContent = (en && EN[k] != null) ? EN[k] : original(el, 'text');
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      remember(el, 'html', el.innerHTML);
      var k = el.getAttribute('data-i18n-html');
      el.innerHTML = (en && EN[k] != null) ? EN[k] : original(el, 'html');
    });
    [['data-i18n-placeholder', 'placeholder'],
     ['data-i18n-aria', 'aria-label'],
     ['data-i18n-content', 'content']].forEach(function (pair) {
      var sel = pair[0], attr = pair[1];
      document.querySelectorAll('[' + sel + ']').forEach(function (el) {
        remember(el, attr, el.getAttribute(attr) || '');
        var k = el.getAttribute(sel);
        var v = (en && EN[k] != null) ? EN[k] : original(el, attr);
        if (v != null) el.setAttribute(attr, v);
      });
    });

    // keep <title> in sync (its data-i18n textContent update already sets it, but be safe)
    var t = document.querySelector('title[data-i18n]');
    if (t) document.title = t.textContent;

    // toggle button state
    document.querySelectorAll('.lang-toggle button[data-lang]').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang);
    });

    document.dispatchEvent(new CustomEvent('ppc:langchange', { detail: { lang: lang } }));
  }

  function setLang(lang) {
    lang = lang === 'en' ? 'en' : 'es';
    localStorage.setItem(STORE, lang);
    apply(lang);
  }

  function waLink(type, data) {
    var lang = getLang();
    var pack = WA_MSG[lang] || WA_MSG.es;
    var msg = (type === 'form') ? pack.form(data || {}) : (pack[type] || pack.general);
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
  }

  // Expose
  window.PPC = {
    WA_NUMBER: WA_NUMBER,
    getLang: getLang,
    setLang: setLang,
    waLink: waLink
  };

  // Wire toggle buttons + apply saved language ASAP
  function init() {
    document.querySelectorAll('.lang-toggle button[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });
    apply(getLang());
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
