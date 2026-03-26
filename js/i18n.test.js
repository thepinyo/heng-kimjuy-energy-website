import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

// Load source files as strings
const translationsCode = fs.readFileSync(path.resolve(__dirname, 'translations.js'), 'utf-8');
const i18nCode = fs.readFileSync(path.resolve(__dirname, 'i18n.js'), 'utf-8');

function setupDOM() {
  const dom = new JSDOM(`
    <!DOCTYPE html>
    <html lang="th">
    <body class="font-thai">
      <select id="lang-switcher">
        <option value="th">ไทย</option>
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
      <span data-i18n="nav.home">หน้าแรก</span>
      <span data-i18n="hero.tagline">ศูนย์บริการรถยนต์ครบวงจร</span>
      <img data-i18n-alt="gallery.photo1.alt" alt="ผลงานซ่อมรถยนต์" src="test.webp">
    </body>
    </html>
  `, { url: 'http://localhost', runScripts: 'dangerously' });

  // Use script element injection so const declarations become window globals
  const scriptEl = dom.window.document.createElement('script');
  scriptEl.textContent = translationsCode + '\n' + i18nCode;
  dom.window.document.body.appendChild(scriptEl);

  return dom;
}

describe('i18n module', () => {
  let dom;
  let win;

  beforeEach(() => {
    dom = setupDOM();
    win = dom.window;
    win.localStorage.clear();
  });

  describe('getStoredLanguage()', () => {
    it('returns "th" when localStorage is empty', () => {
      expect(win.getStoredLanguage()).toBe('th');
    });

    it('returns stored language from localStorage', () => {
      win.localStorage.setItem('lang', 'en');
      expect(win.getStoredLanguage()).toBe('en');
    });
  });

  describe('persistLanguage()', () => {
    it('stores language code in localStorage', () => {
      win.persistLanguage('zh');
      expect(win.localStorage.getItem('lang')).toBe('zh');
    });
  });

  describe('applyTranslations()', () => {
    it('updates textContent of data-i18n elements', () => {
      win.applyTranslations('en');
      const el = win.document.querySelector('[data-i18n="nav.home"]');
      expect(el.textContent).toBe('Home');
    });

    it('updates alt attribute of data-i18n-alt elements', () => {
      win.applyTranslations('en');
      const img = win.document.querySelector('[data-i18n-alt="gallery.photo1.alt"]');
      expect(img.getAttribute('alt')).toBe('Car repair work');
    });
  });

  describe('setFontForLanguage()', () => {
    it('sets font-latin for English', () => {
      win.setFontForLanguage('en');
      expect(win.document.body.classList.contains('font-latin')).toBe(true);
      expect(win.document.body.classList.contains('font-thai')).toBe(false);
      expect(win.document.body.classList.contains('font-chinese')).toBe(false);
    });

    it('sets font-chinese for Chinese', () => {
      win.setFontForLanguage('zh');
      expect(win.document.body.classList.contains('font-chinese')).toBe(true);
      expect(win.document.body.classList.contains('font-thai')).toBe(false);
    });

    it('sets font-thai for Thai', () => {
      win.setFontForLanguage('th');
      expect(win.document.body.classList.contains('font-thai')).toBe(true);
    });
  });

  describe('setLanguage()', () => {
    it('updates translations, html lang, localStorage, and font', () => {
      win.setLanguage('en');
      const el = win.document.querySelector('[data-i18n="hero.tagline"]');
      expect(el.textContent).toBe('Full-Service Auto Care Center, Theparak Rd. Km.7, Samut Prakan');
      expect(win.document.documentElement.lang).toBe('en');
      expect(win.localStorage.getItem('lang')).toBe('en');
      expect(win.document.body.classList.contains('font-latin')).toBe(true);
    });
  });

  describe('initI18n()', () => {
    it('applies default Thai language and sets switcher value', () => {
      win.initI18n();
      const switcher = win.document.getElementById('lang-switcher');
      expect(switcher.value).toBe('th');
      expect(win.document.documentElement.lang).toBe('th');
    });

    it('applies stored language preference on init', () => {
      win.localStorage.setItem('lang', 'zh');
      win.initI18n();
      const switcher = win.document.getElementById('lang-switcher');
      expect(switcher.value).toBe('zh');
      expect(win.document.documentElement.lang).toBe('zh');
    });

    it('attaches change listener to lang-switcher', () => {
      win.initI18n();
      const switcher = win.document.getElementById('lang-switcher');
      switcher.value = 'en';
      switcher.dispatchEvent(new win.Event('change'));
      expect(win.document.documentElement.lang).toBe('en');
      expect(win.document.querySelector('[data-i18n="nav.home"]').textContent).toBe('Home');
    });
  });
});
