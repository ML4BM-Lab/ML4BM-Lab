window.initMobileNav = function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (!toggle || !nav) return;

  toggle.replaceWith(toggle.cloneNode(true));
  nav.replaceWith(nav.cloneNode(true));
  toggle = document.querySelector('.nav-toggle');
  nav = document.querySelector('.site-nav');

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    });
  });
};

if (document.querySelector('.site-header .nav-toggle')) {
  window.initMobileNav();
}
