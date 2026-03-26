// Heng Kimjuy Energy - i18n logic

/**
 * Reads the stored language preference from localStorage.
 * Defaults to 'th' if not found or if localStorage is unavailable.
 * @returns {string} Language code ('th', 'en', or 'zh')
 */
function getStoredLanguage() {
  try {
    return localStorage.getItem('lang') || 'th';
  } catch (e) {
    return 'th';
  }
}

/**
 * Persists the language preference to localStorage.
 * Silently fails if localStorage is unavailable.
 * @param {string} langCode - Language code to store
 */
function persistLanguage(langCode) {
  try {
    localStorage.setItem('lang', langCode);
  } catch (e) {
    // silently fail — language works for current session
  }
}

/**
 * Applies translations to all elements with data-i18n and data-i18n-alt attributes.
 * @param {string} langCode - Language code ('th', 'en', or 'zh')
 */
function applyTranslations(langCode) {
  var langData = translations[langCode];
  if (!langData) return;

  // Update textContent for elements with data-i18n
  var elements = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < elements.length; i++) {
    var key = elements[i].getAttribute('data-i18n');
    if (langData[key] !== undefined) {
      elements[i].textContent = langData[key];
    }
  }

  // Update alt attribute for elements with data-i18n-alt
  var altElements = document.querySelectorAll('[data-i18n-alt]');
  for (var j = 0; j < altElements.length; j++) {
    var altKey = altElements[j].getAttribute('data-i18n-alt');
    if (langData[altKey] !== undefined) {
      altElements[j].setAttribute('alt', langData[altKey]);
    }
  }
}

/**
 * Sets the appropriate font class on the body based on the language.
 * Removes all language font classes and adds the correct one.
 * @param {string} langCode - Language code ('th', 'en', or 'zh')
 */
function setFontForLanguage(langCode) {
  document.body.classList.remove('font-thai', 'font-latin', 'font-chinese');
  var fontMap = { th: 'font-thai', en: 'font-latin', zh: 'font-chinese' };
  if (fontMap[langCode]) {
    document.body.classList.add(fontMap[langCode]);
  }
}

/**
 * Orchestrates a full language switch:
 * applies translations, updates html lang attribute, persists preference, sets font.
 * @param {string} langCode - Language code ('th', 'en', or 'zh')
 */
function setLanguage(langCode) {
  applyTranslations(langCode);
  document.documentElement.lang = langCode;
  persistLanguage(langCode);
  setFontForLanguage(langCode);
}

/**
 * Initializes the i18n system on page load.
 * Reads stored language, applies it, sets the switcher value,
 * and attaches a change listener to the language switcher.
 */
function initI18n() {
  var lang = getStoredLanguage();
  setLanguage(lang);

  var langImages = { th: 'images/icons/thailand.png', en: 'images/icons/english.png', zh: 'images/icons/china.png' };
  var currentBtn = document.getElementById('lang-current');
  var currentImg = document.getElementById('lang-current-img');
  var dropdown = document.getElementById('lang-dropdown');

  if (currentImg) {
    currentImg.src = langImages[lang] || langImages.th;
  }

  if (currentBtn && dropdown) {
    currentBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', function () {
      dropdown.classList.add('hidden');
    });

    var buttons = dropdown.querySelectorAll('.lang-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var btnLang = btn.getAttribute('data-lang');
        setLanguage(btnLang);
        currentImg.src = langImages[btnLang] || langImages.th;
        dropdown.classList.add('hidden');
      });
    });
  }
}
