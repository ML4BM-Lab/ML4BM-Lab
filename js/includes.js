(function () {
  var script = document.currentScript;
  var inject = script && script.dataset.inject;
  var base = script && script.dataset.base !== undefined ? script.dataset.base : '';
  var page = script && script.dataset.page ? script.dataset.page : '';
  var layout = window.ML4BM_LAYOUT;

  if (!layout || !inject) return;

  function applyBase(html, b) {
    return html.replace(/\{\{BASE\}\}/g, b);
  }

  function setActiveNav(navPage) {
    if (!navPage) return;
    var link = document.querySelector('[data-nav="' + navPage + '"]');
    if (link) link.classList.add('active');
  }

  if (inject === 'header') {
    document.write(applyBase(layout.header, base));
    setActiveNav(page);
  } else if (inject === 'footer') {
    var footerEl = document.getElementById('site-footer');
    if (footerEl) {
      footerEl.outerHTML = applyBase(layout.footer, base);
    }
    if (window.initMobileNav) window.initMobileNav();
  }
})();
