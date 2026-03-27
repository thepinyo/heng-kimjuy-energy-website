# Project Structure

```
├── index.html              # Single-page app entry point (all sections)
├── css/
│   └── custom.css          # Minimal custom CSS (lightbox animations, scroll hiding)
├── js/
│   ├── config.js           # SITE_CONFIG — all content, URLs, services, reviews, branches
│   ├── translations.js     # Translation strings for th/en/zh
│   ├── i18n.js             # Language switching logic (localStorage, DOM updates, fonts)
│   ├── navigation.js       # Hamburger menu, smooth scroll, active section highlighting
│   ├── gallery.js          # Lightbox overlay, keyboard/touch navigation, focus trapping
│   ├── main.js             # DOMContentLoaded init, renders config into DOM
│   └── i18n.test.js        # Vitest tests for i18n module
├── images/
│   ├── gallery/            # Local gallery photos
│   ├── icons/              # Service icons (GIF), language flags (PNG), social icons
│   ├── og-preview/         # Open Graph preview images
│   ├── services/           # Service images (placeholder)
│   ├── logo.webp           # Brand logo
│   └── hero-bg.webp        # Hero background (fallback; config uses Unsplash URL)
├── vercel.json             # Vercel routing config
├── vitest.config.js        # Vitest config (jsdom environment)
└── package.json            # Dev dependencies only (vitest, jsdom, fast-check)
```

## Architecture Diagram

```mermaid
graph TD
    subgraph Browser
        HTML[index.html<br>Single Page]
        CSS[custom.css]
        TW[Tailwind CDN]
    end

    subgraph "JS Modules (load order)"
        CFG[config.js<br>SITE_CONFIG] --> MAIN[main.js<br>renderFromConfig]
        TR[translations.js<br>th / en / zh] --> I18N[i18n.js<br>setLanguage]
        I18N --> MAIN
        NAV[navigation.js<br>initNavigation] --> MAIN
        GAL[gallery.js<br>lightbox] --> MAIN
    end

    subgraph Data Flow
        CFG -- services, reviews,<br>branches, contact --> MAIN
        TR -- translation keys --> I18N
        I18N -- data-i18n attrs --> HTML
        MAIN -- innerHTML --> HTML
    end

    subgraph Storage
        LS[localStorage<br>lang preference]
    end

    I18N <--> LS

    subgraph Assets
        IMG[images/]
        ICONS[icons/ & flags]
        GALLERY[gallery/ photos]
    end

    HTML --> CSS
    HTML --> TW
    HTML --> IMG
    HTML --> ICONS
    HTML --> GALLERY

    subgraph Hosting
        VERCEL[Vercel<br>static deploy]
    end

    HTML --> VERCEL
```

## Architecture Pattern
- Content-driven: all site data lives in `js/config.js` (`SITE_CONFIG` object). To update content (services, reviews, branches, contact info), edit config.js only.
- Translations live in `js/translations.js` as a flat key-value map per language.
- `main.js` reads `SITE_CONFIG` on load and renders HTML into placeholder containers via `innerHTML`.
- i18n uses `data-i18n` attributes for text and `data-i18n-alt` for image alt text.
- Script load order matters: config → translations → i18n → navigation → gallery → main.

## Conventions
- New content sections: add data to `config.js`, add translation keys to `translations.js`, add a `<section>` to `index.html`, render in `main.js`.
- Tests go alongside source files in `js/` with `.test.js` suffix.
- Images organized by purpose: `gallery/`, `icons/`, `og-preview/`, `services/`.
