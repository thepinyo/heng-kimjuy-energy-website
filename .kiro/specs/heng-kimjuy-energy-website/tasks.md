# Implementation Plan: Heng Kimjuy Energy Website

## Overview

Build a fully static, single-page website for Heng Kimjuy Energy using vanilla HTML, CSS (Tailwind via Play CDN), and JavaScript. Implementation proceeds incrementally: project structure and config first, then HTML skeleton, then each JS module, then wiring and integration. Tests use Vitest with jsdom and fast-check.

## Tasks

- [x] 1. Set up project structure and configuration
  - [x] 1.1 Create directory structure and base files
    - Create `index.html`, `css/custom.css`, `js/translations.js`, `js/i18n.js`, `js/navigation.js`, `js/gallery.js`, `js/main.js`
    - Create `images/` directory with `gallery/` and `services/` subdirectories
    - Create placeholder images (logo.webp, hero-bg.webp, logo.ico) or empty placeholder files
    - _Requirements: 1.4_

  - [x] 1.2 Set up test configuration
    - Initialize `package.json` with Vitest, jsdom, fast-check, and @testing-library/dom as dev dependencies
    - Create `vitest.config.js` with jsdom environment
    - _Requirements: 1.4_

- [x] 2. Build the HTML page with Tailwind CDN and all sections
  - [x] 2.1 Create the `<head>` with meta tags, Tailwind CDN, inline Tailwind config, Google Fonts, and custom CSS link
    - Include viewport meta, description, OG tags, favicon
    - Define Tailwind config with `primary: '#5FB3F9'`, `secondary: '#FFFFFF'`, and font families (thai, latin, chinese)
    - Link Google Fonts: Noto Sans Thai, Inter, Noto Sans SC
    - Link `css/custom.css`
    - _Requirements: 2.1, 2.5, 3.7, 11.1, 11.2, 11.4, 13.9_

  - [x] 2.2 Create the Navigation Bar with hamburger menu and language switcher
    - Fixed/sticky header with `bg-primary text-white`
    - Nav links (Home, Services, Gallery, Branches, Contact) with `data-i18n` attributes
    - Hamburger button visible below `md` breakpoint with `aria-label` and `aria-expanded`
    - Language switcher `<select>` with options for `th`, `en`, `zh`
    - All touch targets minimum 44x44px
    - _Requirements: 2.2, 5.1, 5.3, 5.4, 3.8, 13.3, 13.10_

  - [x] 2.3 Create the Hero Section
    - Full-viewport section with `bg-primary text-white`
    - Logo image, brand name "Heng Kimjuy Energy", tagline with `data-i18n`
    - _Requirements: 2.3, 4.1, 4.3_

  - [x] 2.4 Create the Services Section
    - Section with `data-i18n` title
    - Responsive grid: single-column on mobile, multi-column on desktop
    - Service cards with icon/image, title, and description — all with `data-i18n` attributes
    - _Requirements: 6.1, 6.2, 6.3_

  - [x] 2.5 Create the Gallery Section
    - Responsive grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
    - Images with `loading="lazy"`, alt text via `data-i18n`, click handlers for lightbox
    - _Requirements: 7.1, 7.3, 7.4, 7.5, 12.2_

  - [x] 2.6 Create the Branches Section
    - Two branch cards in responsive grid (`grid-cols-1 md:grid-cols-2`)
    - Each card: branch name, address (with `data-i18n`), Google Maps embed iframe, "Get Directions" link with `target="_blank"`
    - Branch 1 directions: https://share.google/uA5EzS20EZJndoAkN
    - Branch 2 directions: https://share.google/aCAlHKOSAX6s9cGd7
    - _Requirements: 8.1, 8.2, 8.3_

  - [x] 2.7 Create the Contact Section
    - Phone link with `tel:0867016532`, display "086 701 6532"
    - LINE link to `https://line.me/R/ti/p/@364hgjpk`
    - Facebook link to `https://www.facebook.com/hengkimjuy` with `target="_blank" rel="noopener noreferrer"`
    - Mobile: full-width tappable buttons with `min-h-[48px]`; Desktop: inline buttons
    - All with `data-i18n` attributes
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

  - [x] 2.8 Create the Footer
    - Copyright with brand name and current year
    - Facebook and LINE links
    - Phone number display
    - _Requirements: 10.1, 10.2, 10.3_

  - [x] 2.9 Create the Lightbox overlay markup
    - Hidden `div#lightbox` with `role="dialog"`, `aria-label="Image viewer"`
    - Close button, prev/next buttons, image element
    - All buttons with `min-w-[44px] min-h-[44px]` and `aria-label`
    - _Requirements: 7.2, 12.3_

  - [x] 2.10 Add script tags for all JS modules at end of body
    - Load order: `translations.js`, `i18n.js`, `navigation.js`, `gallery.js`, `main.js`
    - _Requirements: 1.1_

- [x] 3. Implement custom CSS
  - [x] 3.1 Write `css/custom.css` with lightbox animations and smooth scroll
    - `html { scroll-behavior: smooth; }`
    - Lightbox fade-in/fade-out keyframe animations
    - _Requirements: 5.2_

- [x] 4. Implement the i18n system
  - [x] 4.1 Create `js/translations.js` with full translation data
    - Define `translations` object with `th`, `en`, `zh` keys
    - Include all translatable strings: nav labels, hero tagline, services titles/descriptions, gallery alt texts, branch names/addresses, contact labels, footer text
    - Use dot-notation keys matching `data-i18n` attributes in HTML
    - _Requirements: 13.1, 13.6_

  - [x] 4.2 Implement `js/i18n.js` with language switching logic
    - `getStoredLanguage()` — reads from localStorage with try/catch, defaults to `'th'`
    - `persistLanguage(langCode)` — writes to localStorage with try/catch
    - `applyTranslations(langCode)` — iterates `[data-i18n]` elements, sets `textContent`
    - `setFontForLanguage(langCode)` — toggles `font-thai`/`font-latin`/`font-chinese` on body
    - `setLanguage(langCode)` — orchestrates: apply translations, update `html lang`, persist, set font
    - `initI18n()` — reads stored language, applies it, attaches change listener to `#lang-switcher`
    - _Requirements: 13.2, 13.4, 13.5, 13.7, 13.8, 13.9_

  - [ ]* 4.3 Write property test for i18n content update (Property 11)
    - **Property 11: Language switch updates all translatable content**
    - For any language code (th, en, zh), after `setLanguage()`, every `[data-i18n]` element's textContent equals the corresponding translation value
    - **Validates: Requirements 13.4**

  - [ ]* 4.4 Write property test for lang attribute and localStorage (Property 12)
    - **Property 12: Language switch updates lang attribute and localStorage**
    - For any language code, after `setLanguage()`, `document.documentElement.lang` equals the code and `localStorage.getItem('lang')` equals the code
    - **Validates: Requirements 13.5, 13.7**

  - [ ]* 4.5 Write property test for language persistence round-trip (Property 13)
    - **Property 13: Language preference round-trip persistence**
    - For any language code, `setLanguage(code)` then `getStoredLanguage()` returns the same code
    - **Validates: Requirements 13.8**

- [x] 5. Checkpoint - Verify i18n system
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Implement navigation module
  - [x] 6.1 Implement `js/navigation.js`
    - `initNavigation()` — sets up hamburger toggle, smooth scroll click handlers, active section highlighting on scroll
    - Hamburger toggle: flip `aria-expanded`, show/hide nav links
    - Nav link click: smooth scroll to target section, collapse hamburger menu on mobile
    - _Requirements: 5.1, 5.2, 5.4, 5.5_

  - [ ]* 6.2 Write property test for navigation scroll (Property 3)
    - **Property 3: Navigation scrolls to target section**
    - For any nav link, clicking it scrolls the corresponding section into the viewport
    - **Validates: Requirements 5.2**

  - [ ]* 6.3 Write property test for hamburger collapse (Property 4)
    - **Property 4: Hamburger menu collapses after selection**
    - For any nav link selected from the expanded hamburger menu (viewport < 768px), `aria-expanded` is set to `"false"` after activation
    - **Validates: Requirements 5.5**

- [x] 7. Implement gallery and lightbox module
  - [x] 7.1 Implement `js/gallery.js`
    - `initGallery()` — attaches click handlers to gallery images
    - `openLightbox(imageSrc, altText)` — shows lightbox overlay with the clicked image
    - `closeLightbox()` — hides overlay, returns focus
    - `navigateLightbox(direction)` — next/prev image cycling
    - Touch swipe detection for left/right navigation
    - Escape key and click-outside to close
    - Focus trapping inside lightbox when open
    - _Requirements: 7.2, 12.3_

  - [ ]* 7.2 Write property test for gallery lazy loading (Property 6)
    - **Property 6: Gallery images rendered with lazy loading**
    - For any image in gallery data, a corresponding `<img>` with `loading="lazy"` exists
    - **Validates: Requirements 7.1, 7.4**

  - [ ]* 7.3 Write property test for lightbox opens on click (Property 7)
    - **Property 7: Gallery lightbox opens on image click**
    - For any gallery image, clicking it opens the lightbox displaying that image's source
    - **Validates: Requirements 7.2**

- [x] 8. Implement main.js orchestration
  - [x] 8.1 Implement `js/main.js`
    - On `DOMContentLoaded`: call `initI18n()`, `initNavigation()`, `initGallery()`
    - Wire everything together so all modules initialize in correct order
    - _Requirements: 1.1_

- [x] 9. Checkpoint - Verify all modules work together
  - Ensure all tests pass, ask the user if questions arise.

- [x] 10. Write remaining property and unit tests
  - [ ]* 10.1 Write property test for text contrast on primary background (Property 1)
    - **Property 1: Text contrast on primary background**
    - For any element with `bg-primary` (#5FB3F9) background, text color is white (#FFFFFF)
    - **Validates: Requirements 2.6**

  - [ ]* 10.2 Write property test for minimum touch target size (Property 2)
    - **Property 2: Minimum touch target size**
    - For any interactive element (button, link, input), computed width and height are ≥ 44px
    - **Validates: Requirements 3.8**

  - [ ]* 10.3 Write property test for service cards (Property 5)
    - **Property 5: Service cards contain required information**
    - For any service in services data, the rendered card contains a non-empty title, icon/image, and description
    - **Validates: Requirements 6.1, 6.2**

  - [ ]* 10.4 Write property test for branch cards (Property 8)
    - **Property 8: Branch cards contain complete information**
    - For any branch in branch data, the card contains name, address, map iframe, and directions link with `target="_blank"`
    - **Validates: Requirements 8.2, 8.3**

  - [ ]* 10.5 Write property test for image alt text (Property 9)
    - **Property 9: All images have alt text**
    - For any `<img>` element on the page, `alt` attribute is present and non-empty
    - **Validates: Requirements 12.2**

  - [ ]* 10.6 Write property test for keyboard accessibility (Property 10)
    - **Property 10: Interactive elements are keyboard accessible**
    - For any interactive element, it is focusable via Tab and activatable via Enter/Space
    - **Validates: Requirements 12.3**

  - [ ]* 10.7 Write unit tests for SEO, semantic HTML, and default language
    - Verify meta description, OG tags, viewport meta, favicon link exist
    - Verify semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
    - Verify default language is Thai with empty localStorage
    - Verify exactly 2 branches rendered
    - Verify contact links (tel:, LINE, Facebook with target="_blank")
    - Verify footer has copyright with current year
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 13.2, 8.1, 9.1, 9.3, 9.4, 10.1, 10.2, 10.3_

- [x] 11. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- All code is vanilla HTML/CSS/JS — no build tools required
- Testing uses Vitest with jsdom environment and fast-check for property-based tests
