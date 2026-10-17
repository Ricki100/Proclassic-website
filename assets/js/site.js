/* Proclassic Tyres – shared header, footer, consent and tracking.
   Edit the header/footer HERE once and every page updates. */
(function () {
  var WA = '263716194485';
  var BASE = (document.currentScript && document.currentScript.src || '/assets/js/site.js').replace(/assets\/js\/site\.js.*$/, '');
  var GTM_ID = 'GTM-KHQWBWCC';

  var icons = {
    fb: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8V6.2c0-.8.2-1.2 1.4-1.2H17V2h-2.6C11.5 2 10.5 3.4 10.5 5.9V8H8v3h2.5v11H14V11h2.6l.4-3H14z"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.8 2H21l-7 8 8.2 12h-6.4l-5-7.3L4.9 22H1.7l7.5-8.6L1.3 2h6.6l4.5 6.6L17.8 2zm-1.1 18h1.8L7.4 3.9H5.5L16.7 20z"/></svg>',
    li: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4V9.5z"/></svg>'
  };
  var social = [
    ['https://www.facebook.com/RadialAndCrossPlyTyres', 'Facebook', 'fb', 'Fb'],
    ['https://twitter.com/GroupProclassic', 'X (Twitter)', 'x', 'X'],
    ['https://www.linkedin.com/company/proclassic-group/', 'LinkedIn', 'li', 'in']
  ];
  var cats = [
    ['/mining-tyres/', 'MINING TYRES'],
    ['/engineering-tyres/', 'ENGINEERING TYRES'],
    ['/agricultural-tyres/', 'AGRICULTURAL TYRES'],
    ['/bus-tyres/', 'BUS TYRES'],
    ['/truck-tyres/', 'TRUCK TYRES'],
    ['/passenger-tyres/', 'PASSENGER TYRES']
  ];
  var here = location.pathname.replace(/index\.html$/, '');

  var header =
    '<header class="site-header">' +
      '<div class="topbar">' +
        '<a class="topbar__logo" href="/" aria-label="Proclassic Tyres home"><img src="' + BASE + 'assets/images/logo.webp" alt="Proclassic Tyres" width="120" height="40"></a>' +
        '<div class="topbar__right">' +
          '<a class="pill" href="/branch-locator/">BRANCH LOCATOR</a>' +
          '<a class="pill topbar__quote" href="' + (here === '/' ? '' : '/') + '#quote" data-cta="header_quote">GET A QUOTE</a>' +
          '<div class="socials">' + social.map(function (s) { return '<a href="' + s[0] + '" target="_blank" rel="noopener" aria-label="' + s[1] + '">' + icons[s[2]] + '</a>'; }).join('') + '</div>' +
          '<button class="menu-toggle" aria-expanded="false" aria-controls="catnav">Tyres &#9776;</button>' +
        '</div>' +
      '</div>' +
      '<nav class="catnav" id="catnav" aria-label="Tyre categories"><ul>' +
        cats.map(function (c) { return '<li><a href="' + c[0] + '"' + (here === c[0] ? ' aria-current="page"' : '') + '>' + c[1] + '</a></li>'; }).join('') +
      '</ul></nav>' +
    '</header>';

  var year = new Date().getFullYear();
  var footer =
    '<footer class="site-footer">' +
      '<div class="wrap footer__grid">' +
        '<div class="footer__brand">' +
          '<img src="' + BASE + 'assets/images/logo.webp" alt="Proclassic Tyres" width="140" height="46" loading="lazy">' +
          '<p>Zimbabwe&rsquo;s tyre supplier since 1996. Passenger, truck, bus, mining, engineering and agricultural tyres &mdash; stocked in Harare and Mutare, delivered nationwide.</p>' +
          '<a class="btn btn--sm" href="https://wa.me/' + WA + '?text=Hi%20Proclassic%2C%20I%20would%20like%20a%20tyre%20price." target="_blank" rel="noopener">Get a price on WhatsApp</a>' +
          '<div class="footer__socials">' + social.map(function (s) { return '<a href="' + s[0] + '" target="_blank" rel="noopener" aria-label="' + s[1] + '">' + s[3] + '</a>'; }).join('') + '</div>' +
        '</div>' +
        '<div><h5>TYRES</h5><ul>' +
          '<li><a href="/passenger-tyres/">Passenger &amp; SUV</a></li>' +
          '<li><a href="/truck-tyres/">Truck</a></li>' +
          '<li><a href="/bus-tyres/">Bus</a></li>' +
          '<li><a href="/agricultural-tyres/">Agricultural &amp; Forestry</a></li>' +
          '<li><a href="/mining-tyres/">Mining &amp; OTR</a></li>' +
          '<li><a href="/engineering-tyres/">Engineering</a></li>' +
        '</ul></div>' +
        '<div><h5>COMPANY</h5><ul>' +
          '<li><a href="/">Home</a></li>' +
          '<li><a href="/branch-locator/">Branch locator</a></li>' +
          '<li><a href="/proclassic-tyres-harare-reliable-tyres-and-expert-services/">Tyres in Harare</a></li>' +
          '<li><a href="/#quote" data-cta="footer_quote">Request a quote</a></li>' +
        '</ul></div>' +
        '<div><h5>BRANCHES</h5><ul>' +
          '<li class="branch"><strong>Harare</strong>1&ndash;2 K.K. Ilford Road, Ardbennie</li>' +
          '<li class="branch"><strong>Mutare</strong>14 Glasgow Road, Industrial Site</li>' +
          '<li class="branch"><strong>Call or WhatsApp</strong><a href="tel:+263716194485">+263 716 194 485</a></li>' +
          '<li><a href="mailto:info@proclassicgroup.com">info@proclassicgroup.com</a></li>' +
        '</ul></div>' +
      '</div>' +
      '<div class="wrap footer__bottom">' +
        '<span>&copy; ' + year + ' Proclassic Tyres. All rights reserved.</span>' +
        '<nav><a href="/privacy-policy/">Privacy Policy</a><a href="/cookie-policy/">Cookie Policy</a><a href="/branch-locator/">Find us</a></nav>' +
      '</div>' +
    '</footer>';

  var cookie =
    '<div id="pc-cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">' +
      '<p>We use cookies and similar technologies (including Google Analytics, Google Ads, and Google Tag Manager) to understand site traffic. These only load if you click Accept. See our <a href="/privacy-policy/">Privacy Policy</a>.</p>' +
      '<div class="btns"><button type="button" class="decline">Decline</button><button type="button" class="accept">Accept</button></div>' +
    '</div>';

  function inject(id, html) { var el = document.getElementById(id); if (el) el.outerHTML = html; }
  inject('site-header', header);
  inject('site-footer', footer);
  /* Sticky quick-quote bar: injected on every page (desktop) */
  var qbarHtml = '<form class="qbar" id="quote-bar" data-lead-form="quote_bar" novalidate aria-label="Quick tyre quote">' +
    '  <input type="hidden" name="access_key" value="6850bd7c-b5d3-41d8-9640-e234cdcae2fe">' +
    '  <input type="hidden" name="subject" value="New tyre quote request (quick bar) — Proclassic website">' +
    '  <input type="hidden" name="from_name" value="Proclassic Tyres Website">' +
    '  <input type="hidden" name="consent-recorded" value="">' +
    '  <input type="hidden" name="page" value="">' +
    '  <input type="checkbox" name="botcheck" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">' +
    '  <p class="qbar__title"><strong>Get stock &amp; price</strong><span>Reply on WhatsApp</span></p>' +
    '  <label class="qbar__f"><span class="sr">Tyre type</span>' +
    '    <select name="tyre-category" required>' +
    '      <option value="">Tyre type…</option><option>Passenger / SUV</option><option>Truck &amp; Bus</option><option>Agricultural / Tractor</option><option>Mining / OTR</option><option>Engineering / Industrial</option><option>Aviation</option>' +
    '    </select></label>' +
    '  <label class="qbar__f"><span class="sr">Tyre size</span><input type="text" name="tyre-size" placeholder="Tyre size (optional)" autocomplete="off"></label>' +
    '  <label class="qbar__f"><span class="sr">Your name</span><input type="text" name="name" placeholder="Your name" required autocomplete="name"></label>' +
    '  <label class="qbar__f"><span class="sr">WhatsApp number</span><input type="tel" name="phone" placeholder="+263 77 000 0000" required inputmode="tel" autocomplete="tel" data-phone></label>' +
    '  <label class="qbar__consent"><input type="checkbox" name="data-consent" required><span>OK to contact me about this quote (<a href="/privacy-policy/">privacy</a>)</span></label>' +
    '  <button type="submit" class="btn" data-submit-button><span class="wa-ico" aria-hidden="true"></span>Get price</button>' +
    '  <button type="button" class="qbar__x" aria-label="Hide quick quote">&times;</button>' +
    '  <p class="form-status qbar__status" data-form-status role="status" aria-live="polite"></p>' +
    '</form>';
  if (!document.getElementById('quote-bar')) document.body.insertAdjacentHTML('beforeend', qbarHtml);
  document.body.insertAdjacentHTML('beforeend', cookie);

  /* Lazy background images: add .is-visible shortly before a section scrolls into view */
  var lazy = document.querySelectorAll('.lazy-bg');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { rootMargin: '400px 0px' });
    lazy.forEach(function (el) { io.observe(el); });
  } else { lazy.forEach(function (el) { el.classList.add('is-visible'); }); }

  /* Mobile menu */
  var toggle = document.querySelector('.menu-toggle'), nav = document.getElementById('catnav');
  if (toggle && nav) toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open);
  });

  /* Consent + GTM gate (same behaviour as WPCode 3223/3229) */
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function loadGTM() {
    if (window.__pcGtm) return; window.__pcGtm = true;
    (function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0], j = d.createElement(s); j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', GTM_ID);
  }
  var banner = document.getElementById('pc-cookie-banner');
  var status = read('pc_consent_status');
  if (status === 'granted') loadGTM();
  else if (status !== 'denied') banner.classList.add('show');
  banner.querySelector('.accept').addEventListener('click', function () {
    store('pc_consent_status', 'granted');
    if (window.gtag) gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted' });
    loadGTM(); banner.classList.remove('show');
  });
  banner.querySelector('.decline').addEventListener('click', function () {
    store('pc_consent_status', 'denied'); banner.classList.remove('show');
  });

  /* Click tracking: whatsapp_click, phone_click, email_click */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]'); if (!a || !window.gtag) return;
    var href = a.getAttribute('href'), ev = null;
    if (/wa\.me|whatsapp\.com/i.test(href)) ev = 'whatsapp_click';
    else if (/^tel:/i.test(href)) ev = 'phone_click';
    else if (/^mailto:/i.test(href)) ev = 'email_click';
    if (!ev) return;
    var label = (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 100);
    var sec = a.closest('section,header,footer');
    gtag('event', ev, { link_text: label, link_url: href.split('?')[0], page_location: location.href, section: sec ? (sec.className || sec.tagName).toString().split(' ')[0] : '' });
  });


  /* LEAD FORMS ([data-lead-form]): Web3Forms (email record) -> generate_lead -> WhatsApp with the request.
     Same pattern as the Kredibility application form. Used by the main #quote form and the sticky quick-quote bar. */
  var qf = document.getElementById('quote-form');
  document.querySelectorAll('[data-quote-category]').forEach(function (a) {
    a.addEventListener('click', function () {
      var r = qf && qf.querySelector('input[name="tyre-category"][value="' + a.getAttribute('data-quote-category') + '"]');
      if (r) r.checked = true;
    });
  });
  /* Links from other pages (e.g. the 404 page) can pre-select a tyre type on the homepage form */
  document.querySelectorAll('[data-quote-link]').forEach(function (a) {
    a.addEventListener('click', function () { try { sessionStorage.setItem('pc_quote_cat', a.getAttribute('data-quote-link')); } catch (x) {} });
  });
  try {
    var pre = sessionStorage.getItem('pc_quote_cat');
    if (pre && qf) { var pr = qf.querySelector('input[name="tyre-category"][value="' + pre + '"]'); if (pr) pr.checked = true; sessionStorage.removeItem('pc_quote_cat'); }
  } catch (x) {}
  document.querySelectorAll('[data-phone]').forEach(function (input) {
    input.addEventListener('input', function () {
      var d = this.value.replace(/\D/g, '');
      if (d.indexOf('263') === 0) d = d.slice(3);
      if (d.charAt(0) === '0') d = d.slice(1);
      d = d.slice(0, 9);
      this.value = d ? '+263 ' + d.slice(0, 2) + (d.length > 2 ? ' ' + d.slice(2, 5) : '') + (d.length > 5 ? ' ' + d.slice(5) : '') : '';
    });
  });
  var LABELS = [['tyre-category', 'Tyres'], ['tyre-size', 'Size'], ['quantity', 'Quantity'], ['vehicle', 'Vehicle / machine'], ['branch', 'Branch'], ['', ''], ['name', 'Name'], ['company', 'Company'], ['phone', 'WhatsApp']];
  document.querySelectorAll('form[data-lead-form]').forEach(function (form) {
    var kind = form.getAttribute('data-lead-form');
    var btn = form.querySelector('[data-submit-button]'), btnHtml = btn.innerHTML, st = form.querySelector('[data-form-status]');
    var consent = form.querySelector('[name="data-consent"]'), stamp = form.querySelector('[name="consent-recorded"]'), page = form.querySelector('[name="page"]');
    var started = false;
    function val(n) { var el = form.elements.namedItem(n); return el && typeof el.value === 'string' ? el.value.trim() : ''; }
    function setSt(m, t) { st.textContent = m; if (t) st.setAttribute('data-type', t); else st.removeAttribute('data-type'); }
    function waText() {
      var out = ['PROCLASSIC TYRE QUOTE REQUEST', ''];
      LABELS.forEach(function (l) {
        if (!l[0]) { out.push(''); return; }
        if (!form.elements.namedItem(l[0])) return;
        out.push(l[1] + ': ' + (val(l[0]) || (l[0] === 'tyre-size' ? 'Not sure' : 'Not provided')));
      });
      out.push('', 'Please confirm stock and price. Thank you.');
      return out.join('\n');
    }
    form.addEventListener('focusin', function () { if (!started && window.gtag) { started = true; gtag('event', 'form_start', { form_name: kind }); } });
    function clearErr() { if (st.getAttribute('data-type') === 'error' && form.checkValidity()) setSt(''); }
    form.addEventListener('input', clearErr); form.addEventListener('change', clearErr);
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      form.classList.add('was-validated');
      if (!form.checkValidity()) {
        var bad = form.querySelector(':invalid'); if (bad) bad.focus();
        setSt('Please complete the highlighted fields.', 'error'); return;
      }
      if (consent && consent.checked && stamp) stamp.value = 'Quote contact consent given at ' + new Date().toISOString();
      if (page) page.value = location.href;
      btn.disabled = true; btn.textContent = 'Sending…'; setSt('Saving your request before opening WhatsApp…');
      var key = val('access_key');
      try {
        if (key && key.indexOf('YOUR_') !== 0) {
          var res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(form) });
          var out = await res.json();
          if (!res.ok || !out.success) throw new Error(out.message || 'Submission failed');
        }
        try { if (window.gtag) gtag('event', 'generate_lead', { form_name: kind, method: 'whatsapp_quote', tyre_category: val('tyre-category'), quantity: val('quantity'), branch: val('branch') }); } catch (x) {}
        try { if (window.fbq) fbq('track', 'Lead', { content_name: 'Tyre quote', content_category: val('tyre-category') }); } catch (x) {}
        setSt('Request saved. Opening WhatsApp — just press send…', 'success');
        var url = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(waText());
        setTimeout(function () { window.location.assign(url); }, 350);
        setTimeout(function () { btn.disabled = false; btn.innerHTML = btnHtml; }, 4000);
      } catch (err) {
        console.error(err); btn.disabled = false; btn.innerHTML = btnHtml;
        setSt('We could not save your request. Check your connection and try again, or call +263 716 194 485.', 'error');
      }
    });
  });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-cta]');
    if (a && window.gtag) gtag('event', 'cta_click', { cta: a.getAttribute('data-cta') });
  });

  /* Sticky quick-quote bar (desktop, >=1100px): always visible from hero to footer on every page.
     The x hides it for the rest of the visit. */
  var bar = document.getElementById('quote-bar');
  if (bar) {
    var mq = matchMedia('(min-width:1100px)'), closed = false;
    try { closed = sessionStorage.getItem('pc_qbar_closed') === '1'; } catch (x) {}
    function sync() {
      var show = mq.matches && !closed;
      bar.classList.toggle('is-on', show);
      document.body.classList.toggle('qbar-on', show);
      bar.setAttribute('aria-hidden', show ? 'false' : 'true');
      bar.inert = !show;
    }
    bar.querySelector('.qbar__x').addEventListener('click', function () {
      closed = true; try { sessionStorage.setItem('pc_qbar_closed', '1'); } catch (x) {} sync();
      if (window.gtag) gtag('event', 'cta_click', { cta: 'quote_bar_close' });
    });
    if (mq.addEventListener) mq.addEventListener('change', sync);
    requestAnimationFrame(function () { setTimeout(sync, 600); });
  }

  /* Scroll reveal: same data-aos attributes and timing as the SAPC site (AOS: 650ms, ease-out-cubic, once, offset 60)
     in ~1 KB instead of the 40 KB library. Respects reduced-motion. */
  var aos = document.querySelectorAll('[data-aos]');
  if (aos.length) {
    if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var rio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('aos-animate'); rio.unobserve(en.target); } });
      }, { rootMargin: '0px 0px -60px 0px' });
      aos.forEach(function (el) {
        var d = el.getAttribute('data-aos-delay'); if (d) el.style.setProperty('--aos-d', d + 'ms');
        rio.observe(el);
      });
    } else { aos.forEach(function (el) { el.classList.add('aos-animate'); }); }
  }

  /* Gallery lightbox: click a photo, then arrows / keys / swipe to browse */
  var gImgs = [].slice.call(document.querySelectorAll('.gallery img'));
  if (gImgs.length) {
    document.body.insertAdjacentHTML('beforeend',
      '<div class="lb" role="dialog" aria-modal="true" aria-label="Photo gallery">' +
        '<button class="lb__btn lb__close" type="button" aria-label="Close">&#10005;</button>' +
        '<button class="lb__btn lb__prev" type="button" aria-label="Previous photo">&#8249;</button>' +
        '<img class="lb__img" alt="">' +
        '<button class="lb__btn lb__next" type="button" aria-label="Next photo">&#8250;</button>' +
        '<div class="lb__count" aria-live="polite"></div>' +
      '</div>');
    var lb = document.querySelector('.lb'), lbImg = lb.querySelector('.lb__img'), lbCount = lb.querySelector('.lb__count'), cur = 0, lastFocus = null;
    function show(i) {
      cur = (i + gImgs.length) % gImgs.length;
      lbImg.src = gImgs[cur].getAttribute('data-full') || gImgs[cur].currentSrc || gImgs[cur].src; lbImg.alt = gImgs[cur].alt;
      lbCount.textContent = (cur + 1) + ' / ' + gImgs.length;
      [cur + 1, cur - 1].forEach(function (n) { var g = gImgs[(n + gImgs.length) % gImgs.length]; new Image().src = g.getAttribute('data-full') || g.src; });
    }
    function openLb(i) { lastFocus = document.activeElement; show(i); lb.classList.add('open'); document.body.classList.add('lb-lock'); lb.querySelector('.lb__close').focus(); }
    function closeLb() { lb.classList.remove('open'); document.body.classList.remove('lb-lock'); if (lastFocus) lastFocus.focus(); }
    gImgs.forEach(function (img, i) {
      img.setAttribute('tabindex', '0'); img.setAttribute('role', 'button');
      img.addEventListener('click', function () { openLb(i); });
      img.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(i); } });
    });
    lb.querySelector('.lb__prev').addEventListener('click', function (e) { e.stopPropagation(); show(cur - 1); });
    lb.querySelector('.lb__next').addEventListener('click', function (e) { e.stopPropagation(); show(cur + 1); });
    lb.querySelector('.lb__close').addEventListener('click', closeLb);
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLb(); else if (e.key === 'ArrowRight') show(cur + 1); else if (e.key === 'ArrowLeft') show(cur - 1);
    });
    var x0 = null;
    lb.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1)); x0 = null; });
  }

  /* YouTube background on the video banner – desktop only, after load.
     referrerpolicy + origin stop YouTube "Error 153"; the iframe stays hidden
     until the player reports it is playing, so a failure just leaves the photo. */
  window.addEventListener('load', function () {
    var vb = document.querySelector('.video-banner[data-youtube]');
    if (!vb || window.innerWidth < 768 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!/^https?:$/.test(location.protocol)) return;
    var id = vb.getAttribute('data-youtube');
    var src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&mute=1&loop=1&playlist=' + id +
      '&controls=0&disablekb=1&fs=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&enablejsapi=1' +
      '&origin=' + encodeURIComponent(location.origin) + '&widget_referrer=' + encodeURIComponent(location.href);
    var f = document.createElement('iframe');
    f.src = src; f.title = 'Proclassic Tyres video'; f.tabIndex = -1;
    f.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
    f.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    f.setAttribute('aria-hidden', 'true');
    vb.appendChild(f);
    function onMsg(e) {
      if (!/youtube\.com$/.test((e.origin || '').replace(/^https?:\/\//, ''))) return;
      var d; try { d = typeof e.data === 'string' ? JSON.parse(e.data) : e.data; } catch (x) { return; }
      if (!d) return;
      if (d.event === 'onReady' || d.event === 'initialDelivery') f.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*');
      var st = d.info && d.info.playerState;
      if ((d.event === 'onStateChange' && d.info === 1) || st === 1) { f.classList.add('is-playing'); }
      if (d.event === 'onError') { f.remove(); window.removeEventListener('message', onMsg); }
    }
    window.addEventListener('message', onMsg);
    f.addEventListener('load', function () { f.contentWindow.postMessage(JSON.stringify({ event: 'listening', id: 1, channel: 'widget' }), '*'); });
  });
})();
