# Panorama Padel Club — Website (redesign)

A modern, bilingual (ES/EN), fully responsive multi-page website for **Panorama Padel Club**
(La Nucía, Alicante), rebuilt from the content of the original panoramapadelclub.com.

Static site — **no build step, no dependencies**. Just open `index.html` or deploy the folder to any host.

## Features

- **5 pages:** Inicio (`index.html`), El Club (`el-club.html`), Academia (`academia.html`),
  Campeonatos (`campeonatos.html`), Contacto (`contacto.html`).
- **Bilingual ES/EN** with a header toggle. Spanish is the default and is the crawlable text
  in the HTML; English is applied client-side and the choice is remembered (`localStorage`).
- **WhatsApp integration** everywhere: every "Reservar / Book" button, the floating button,
  and the contact form open WhatsApp (`wa.me/34608160186`) with a context-aware pre-filled
  message (booking / academy / tournament / general / form).
- **Mobile version:** mobile-first responsive layout with a hamburger menu, a floating
  WhatsApp button, and touch-friendly targets. Breakpoints at 1024 / 860 / 520 px.
- **SEO:** unique title + meta description per page, Open Graph + Twitter cards, canonical URLs,
  `hreflang`, JSON-LD structured data (`SportsActivityLocation` + `BreadcrumbList`), semantic
  HTML, descriptive `alt` text, `sitemap.xml`, `robots.txt`, favicons.
- **Interactions:** sticky header, scroll-reveal animations, gallery lightbox (keyboard + swipe
  arrows), Google Maps embed on the contact page. Respects `prefers-reduced-motion`.

## Structure

```
index.html  el-club.html  academia.html  campeonatos.html  contacto.html
css/styles.css        — design system + responsive styles
js/i18n.js            — ES/EN engine + English dictionary + WhatsApp message templates
js/main.js            — header, mobile menu, WhatsApp links, lightbox, reveal, contact form
assets/img/           — logos, court/gallery photos, tournament flyers (downloaded from the club)
assets/favicon/       — favicon set
sitemap.xml  robots.txt
```

## Business data used

- **Phone / WhatsApp:** +34 608 16 01 86 · `wa.me/34608160186`
- **Email:** info@panoramapadelclub.com
- **Address:** Carrer San Marino, 2, 03530 La Nucía, Alicante
- **Hours (summer):** Mon–Sat 8:00–14:00 & 17:00–23:00 · Sun 8:00–14:00
- **Facebook:** facebook.com/people/Panorama-Padel-Club/61579267795845/
- **Coaches:** Ariel Fernández López, Helena Novillo, Ale Novillo

## Notes for the client (placeholders to replace)

- **Testimonials** on the home page are sample examples — replace with real reviews.
- **Coach photos** use monogram avatars (the original site had no coach photos) — drop in real photos when available.
- **Academy pricing** shows "Consultar precios" (Ask for prices) → WhatsApp, since the original site listed no prices. Add prices to `academia.html` + `js/i18n.js` if desired.
- **Tournament events** reference the two flyer images from the club; confirm/update dates via the copy in `campeonatos.html` + `js/i18n.js`.
- The canonical/OG URLs assume the site is served at `https://panoramapadelclub.com/`. Update them if deployed elsewhere.

## Editing text / translations

Spanish text lives directly in the HTML. To change an English string, edit the matching key in
the `EN` object in `js/i18n.js` (keys map to the `data-i18n*` attributes in the HTML). To change
the WhatsApp phone number or pre-filled messages, edit `WA_NUMBER` / `WA_MSG` in the same file.
