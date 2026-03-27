// Heng Kimjuy Energy - Main initialization

document.addEventListener('DOMContentLoaded', function () {
  renderFromConfig();
  initI18n();
  initNavigation();
  initGallery();
  updateOpenStatus();
  setInterval(updateOpenStatus, 60000);
});

function renderFromConfig() {
  var c = SITE_CONFIG;

  // Brand
  var logos = document.querySelectorAll('[data-config="logo"]');
  logos.forEach(function (el) { el.src = c.brand.logo; });
  var heroImg = document.querySelector('[data-config="heroBg"]');
  if (heroImg) heroImg.src = c.brand.heroBg;
  var heroTitle = document.querySelector('[data-config="heroTitle"]');
  if (heroTitle) heroTitle.innerHTML = c.brand.heroTitle;

  // Language switcher
  renderLanguages(c.languages);

  // Services
  var servicesGrid = document.getElementById('services-grid');
  if (servicesGrid) {
    servicesGrid.innerHTML = c.services.map(function (s) {
      return '<div class="group bg-gray-50 hover:bg-primary rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 cursor-default">'
        + '<div class="w-14 h-14 bg-primary/10 group-hover:bg-white rounded-xl flex items-center justify-center mb-6 transition-colors">'
        + '<img src="' + s.icon + '" alt="' + s.alt + '" class="w-14 h-14">'
        + '</div>'
        + '<h3 class="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors" data-i18n="' + s.titleKey + '">' + s.titleDefault + '</h3>'
        + '<p class="text-gray-500 group-hover:text-white/80 transition-colors leading-relaxed" data-i18n="' + s.descKey + '">' + s.descDefault + '</p>'
        + '</div>';
    }).join('');
  }

  // Gallery
  var galleryGrid = document.getElementById('gallery-grid');
  if (galleryGrid) {
    galleryGrid.innerHTML = c.gallery.photos.map(function (p) {
      return '<div class="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer" onclick="openLightbox(this.querySelector(\'img\').src, this.querySelector(\'img\').alt)">'
        + '<img src="' + p.src + '" alt="' + p.alt + '" data-i18n-alt="' + p.altKey + '" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">'
        + '<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>'
        + '</div>';
    }).join('');
  }
  var galleryLink = document.querySelector('[data-config="galleryLink"]');
  if (galleryLink) galleryLink.href = c.gallery.facebookPhotosUrl;

  // Branches
  var branchesGrid = document.getElementById('branches-grid');
  if (branchesGrid) {
    branchesGrid.innerHTML = c.branches.map(function (b, i) {
      return '<div class="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">'
        + '<div class="aspect-video">'
        + '<iframe src="' + b.mapEmbed + '" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Branch ' + (i+1) + ' Map" class="w-full h-full"></iframe>'
        + '</div>'
        + '<div class="p-6">'
        + '<h3 class="text-xl font-bold mb-2 text-gray-900" data-i18n="' + b.nameKey + '">' + b.nameDefault + '</h3>'
        + '<p class="text-gray-500 mb-1" data-i18n="' + b.addressKey + '">' + b.addressDefault + '</p>'
        + '<p class="text-gray-400 text-sm mb-4" data-i18n="' + b.hoursKey + '">' + b.hoursDefault + '</p>'
        + '<a href="' + b.directionsUrl + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors min-h-[44px]">'
        + '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'
        + '<span data-i18n="branches.getDirections">นำทาง</span>'
        + '</a></div></div>';
    }).join('');
  }

  // Contact
  var contactGrid = document.getElementById('contact-grid');
  if (contactGrid) {
    var phone = c.contact.phone;
    var line = c.contact.line;
    var fb = c.contact.facebook;
    contactGrid.innerHTML =
      '<a href="tel:' + phone.number + '" class="group bg-white/5 backdrop-blur-sm hover:bg-primary border border-white/10 hover:border-primary rounded-2xl p-6 transition-all duration-300 min-h-[48px] flex flex-col items-center justify-center gap-3">'
      + '<img src="' + phone.icon + '" alt="Contact" class="w-16 h-16">'
      + '<span class="text-white font-semibold" data-i18n="' + phone.displayKey + '">' + phone.displayDefault + '</span>'
      + '<span class="text-gray-400 group-hover:text-white/70 text-sm transition-colors" data-i18n="' + phone.labelKey + '">' + phone.labelDefault + '</span></a>'
      + '<a href="' + line.url + '" class="group bg-white/5 backdrop-blur-sm hover:bg-green-500 border border-white/10 hover:border-green-500 rounded-2xl p-6 transition-all duration-300 min-h-[48px] flex flex-col items-center justify-center gap-3">'
      + '<img src="' + line.icon + '" alt="LINE" class="w-16 h-16">'
      + '<span class="text-white font-semibold" data-i18n="' + line.displayKey + '">' + line.displayDefault + '</span>'
      + '<span class="text-gray-400 group-hover:text-white/70 text-sm transition-colors" data-i18n="' + line.labelKey + '">' + line.labelDefault + '</span></a>'
      + '<a href="' + fb.url + '" target="_blank" rel="noopener noreferrer" class="group bg-white/5 backdrop-blur-sm hover:bg-blue-600 border border-white/10 hover:border-blue-600 rounded-2xl p-6 transition-all duration-300 min-h-[48px] flex flex-col items-center justify-center gap-3">'
      + '<img src="' + fb.icon + '" alt="Facebook" class="w-16 h-16">'
      + '<span class="text-white font-semibold" data-i18n="' + fb.displayKey + '">' + fb.displayDefault + '</span>'
      + '<span class="text-gray-400 group-hover:text-white/70 text-sm transition-colors" data-i18n="' + fb.labelKey + '">' + fb.labelDefault + '</span></a>';
  }

  // Reviews
  renderReviews(c);

  // Footer social links
  var footerFb = document.querySelector('[data-config="footer-facebook"]');
  var footerLine = document.querySelector('[data-config="footer-line"]');
  var footerPhone = document.querySelector('[data-config="footer-phone"]');
  if (footerFb) footerFb.href = c.social.facebook;
  if (footerLine) footerLine.href = c.social.line;
  if (footerPhone) footerPhone.href = 'tel:' + c.social.phone;
}

function renderLanguages(langs) {
  var currentImg = document.getElementById('lang-current-img');
  var dropdown = document.getElementById('lang-dropdown');
  if (!dropdown) return;
  var stored = localStorage.getItem('lang') || 'th';
  var match = langs.find(function (l) { return l.code === stored; }) || langs[0];
  if (currentImg) { currentImg.src = match.icon; currentImg.alt = match.alt; }
  dropdown.innerHTML = langs.map(function (l) {
    return '<button data-lang="' + l.code + '" class="lang-btn flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 w-full transition-colors whitespace-nowrap">'
      + '<img src="' + l.icon + '" alt="' + l.alt + '" class="w-6 h-6 rounded-sm">'
      + '<span class="text-sm text-gray-700">' + l.label + '</span></button>';
  }).join('');
}

function updateOpenStatus() {
  var wh = SITE_CONFIG.workingHours;
  var now = new Date();
  var day = now.getDay();
  var currentTime = now.getHours() * 60 + now.getMinutes();
  var parts = wh.openTime.split(':');
  var openTime = parseInt(parts[0]) * 60 + parseInt(parts[1]);
  parts = wh.closeTime.split(':');
  var closeTime = parseInt(parts[0]) * 60 + parseInt(parts[1]);
  var isClosed = wh.closedDays.indexOf(day) !== -1;
  var isOpen = !isClosed && currentTime >= openTime && currentTime < closeTime;

  var dot = document.getElementById('status-dot');
  var text = document.getElementById('status-text');
  if (dot) {
    dot.className = isOpen
      ? 'w-2 h-2 bg-green-400 rounded-full animate-pulse'
      : 'w-2 h-2 bg-red-400 rounded-full';
  }
  if (text) {
    var lang = document.documentElement.lang || 'th';
    var labels = wh.statusLabels[lang] || wh.statusLabels.th;
    text.textContent = isOpen ? labels[0] : labels[1];
  }
}

function renderReviews(c) {
  var scroll = document.getElementById('reviews-scroll');
  var link = document.getElementById('reviews-link');
  if (!scroll) return;

  var items = c.reviews.items || [];
  scroll.innerHTML = items.map(function (r) {
    var stars = '';
    for (var i = 0; i < 5; i++) {
      stars += i < r.rating
        ? '<svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'
        : '<svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    }

    var avatarHtml = r.avatar
      ? '<img src="' + r.avatar + '" alt="' + r.name + '" class="w-11 h-11 rounded-full object-cover bg-gray-100">'
      : '<div class="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center">'
        + '<span class="text-primary font-bold text-sm">' + r.name.charAt(0) + '</span></div>';

    var photoHtml = r.photo
      ? '<div class="mt-3 rounded-xl overflow-hidden">'
        + '<img src="' + r.photo + '" alt="รีวิวจาก ' + r.name + '" class="w-full h-40 object-cover rounded-xl">'
        + '</div>'
      : '';

    return '<div class="w-[280px] bg-gray-50 rounded-2xl p-5 hover:shadow-lg transition-shadow flex flex-col">'
      + '<div class="flex items-center gap-3 mb-3">'
      + avatarHtml
      + '<div><p class="font-semibold text-gray-900 text-sm">' + r.name + '</p>'
      + '<p class="text-gray-400 text-xs">' + r.date + '</p></div></div>'
      + '<div class="flex gap-0.5 mb-2">' + stars + '</div>'
      + '<p class="text-gray-600 text-sm leading-relaxed mb-3 flex-1">"' + r.text + '"</p>'
      + photoHtml
      + '<div class="mt-auto"><span class="inline-block bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">' + r.service + '</span></div>'
      + '</div>';
  }).join('');

  if (link) link.href = c.reviews.facebookMentionsUrl;

  // Arrow button scroll
  var prevBtn = document.getElementById('reviews-prev');
  var nextBtn = document.getElementById('reviews-next');
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      scroll.scrollBy({ left: -320, behavior: 'smooth' });
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      scroll.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }
}
