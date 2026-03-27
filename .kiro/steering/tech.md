# Tech Stack & Build

## Stack
- Vanilla HTML/CSS/JavaScript — no build step, no bundler, no framework
- Tailwind CSS via Play CDN (`cdn.tailwindcss.com`) — configured inline in `index.html`
- Lucide Icons via CDN (`unpkg.com/lucide`)
- Google Fonts: Inter, Noto Sans Thai, Noto Sans SC

## Hosting
- Deployed on Vercel as a static site
- `vercel.json` rewrites all non-asset routes to `index.html`

## Testing
- Vitest with jsdom environment
- fast-check for property-based testing
- @testing-library/dom for DOM queries in tests

## Key Commands
- `npm test` — runs tests once via `vitest --run`

## JavaScript Style
- ES5-compatible `var` and `function` declarations in production code (config, main, navigation, gallery, i18n)
- ES6 modules (`import`/`export`, `const`) used only in test files
- No module bundler — scripts loaded via `<script>` tags in order
- Global functions and variables (e.g., `SITE_CONFIG`, `translations`, `initI18n`, `openLightbox`)

## Tailwind Configuration
Custom theme defined inline in `index.html`:
- Colors: `primary` (#5FB3F9), `primary-dark` (#3A95E0), `secondary` (#FFFFFF)
- Font families: `font-thai`, `font-latin`, `font-chinese`

## Dev Dependencies
- vitest ^3.2.1
- jsdom ^26.1.0
- fast-check ^4.1.1
- @testing-library/dom ^10.4.0
