# Proclassic Tyres – static website

Static HTML rebuild of proclassicgroup.com (moving off WordPress/Elementor).
Same structure as the SAPC and Kredibility sites: plain HTML + one CSS file + one shared JS file.

## Structure

```
index.html              Homepage
assets/css/style.css    All styles (brand red #D92400, DM Sans)
assets/js/site.js       Shared header, footer, cookie banner, GA click tracking
assets/images/          WebP images, resized (see "Speed rules" below)
assets/fonts/           DM Sans, self-hosted (no Google Fonts request)
_originals/             Full-size source images (git-ignored, not deployed)
robots.txt, sitemap.xml
```

The **header and footer live only in `assets/js/site.js`**. Change a phone number,
link or social icon there once and every page picks it up.

## Preview

Open the folder in VS Code and use Live Server (or `npx serve .`).
Category links like `/mining-tyres/` use root paths, so they only resolve on a server.

## Tracking (carried over from WordPress)

- Consent Mode defaults are set in `<head>` **before** the Google tag (fixes the order bug on WP).
- Google tag `GT-WVRVHQGM` (currently sends to GA4 `G-HE9T9N013C`).
  If we switch to the `G-01BDQ5DF87` property, change the ID in the `<head>` of each page.
- GTM `GTM-KHQWBWCC` only loads after the visitor clicks **Accept** (`pc_consent_status` in localStorage).
- GA4 events: `generate_lead`, `form_start`, `cta_click`, `whatsapp_click`, `phone_click`, `email_click`.

## Lead capture (same pattern as Kredibility)

- Quote form `#quote` on the homepage: tyre type, size, quantity, vehicle, name, WhatsApp number, branch, consent.
- On submit (code in `assets/js/site.js`):
  1. POST to Web3Forms → emailed to sales (set the real key in the `access_key` hidden input in `index.html`;
     while it says `YOUR_WEB3FORMS_ACCESS_KEY` the form skips this step).
  2. `generate_lead` to GA4 (+ Meta `Lead` if the pixel is on the page).
  3. Opens WhatsApp (+263 716 194 485) with the full request pre-typed.
- Floating WhatsApp button on desktop, Call / WhatsApp / Get a Quote bar on mobile.
- Prices are never shown on the site; price searches are captured by the quote form.

## Adding a page

Copy `index.html` to `slug/index.html`, change the `<title>`, description, canonical and `<main>`,
and fix relative asset paths (`../assets/...`). Keep every existing WordPress URL
(e.g. `/mining-tyres/`, `/branch-locator/`) so rankings carry over, then add it to `sitemap.xml`.

## Pages still to build (homepage links to these)

/mining-tyres/ · /engineering-tyres/ · /agricultural-tyres/ · /bus-tyres/ · /truck-tyres/ ·
/passenger-tyres/ · /branch-locator/ · /proclassic-tyres-harare-reliable-tyres-and-expert-services/ ·
/privacy-policy/ · /cookie-policy/

## Speed rules (homepage: ~215 KB first view, LCP ~1.1 s on slow 4G)

- Images are WebP only: backgrounds 900–1920px wide, gallery thumbs 640px + `-full` 1600px for the lightbox.
  Convert new images the same way before adding them; keep the originals in `_originals/`.
- Background photos use the `lazy-bg` class and only load when scrolled near (site.js adds `.is-visible`).
- Gallery `<img>` tags need `width`, `height`, `loading="lazy"` and a `data-full` path for the lightbox.
- The Google tag loads after the page finishes (Consent Mode defaults still run first in `<head>`).
- The YouTube banner only loads on desktop, after page load, and stays hidden unless it actually plays.

## SEO

Keyword map lives in the Proclassic project (`claude/proclassic-keyword-map.md`).
Homepage targets: "tyres zimbabwe", "tyres for sale in harare", "tyres harare". Schema type: TireShop.
