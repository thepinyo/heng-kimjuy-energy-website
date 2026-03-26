// Heng Kimjuy Energy - Navigation module

/**
 * Initializes navigation: hamburger toggle, smooth scroll, active section highlighting.
 * Called from main.js on DOMContentLoaded.
 */
function initNavigation() {
  var hamburgerBtn = document.getElementById('hamburger-btn');
  var mobileNav = document.getElementById('mobile-nav');

  // --- Hamburger toggle ---
  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener('click', function () {
      mobileNav.classList.toggle('hidden');
      var expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // --- Nav link click: smooth scroll + collapse mobile menu ---
  var desktopLinks = document.querySelectorAll('#nav-links a[href^="#"]');
  var mobileLinks = mobileNav
    ? mobileNav.querySelectorAll('a[href^="#"]')
    : [];

  function handleNavClick(e) {
    var href = this.getAttribute('href');
    if (!href || href.charAt(0) !== '#') return;

    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }

    // Collapse mobile menu after selection
    if (mobileNav && hamburgerBtn) {
      mobileNav.classList.add('hidden');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  }

  desktopLinks.forEach(function (link) {
    link.addEventListener('click', handleNavClick);
  });

  Array.prototype.forEach.call(mobileLinks, function (link) {
    link.addEventListener('click', handleNavClick);
  });

  // --- Active section highlighting on scroll ---
  var sections = document.querySelectorAll('main section[id]');
  var allNavLinks = document.querySelectorAll(
    '#nav-links a[href^="#"], #mobile-nav a[href^="#"]'
  );

  function highlightActiveSection() {
    var scrollY = window.scrollY || window.pageYOffset;
    var offset = 120; // account for fixed header height

    var currentId = '';
    sections.forEach(function (section) {
      var top = section.offsetTop - offset;
      if (scrollY >= top) {
        currentId = section.getAttribute('id');
      }
    });

    allNavLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === '#' + currentId) {
        link.classList.add('font-bold', 'underline');
      } else {
        link.classList.remove('font-bold', 'underline');
      }
    });
  }

  window.addEventListener('scroll', highlightActiveSection, { passive: true });
  // Run once on init to set initial state
  highlightActiveSection();
}
