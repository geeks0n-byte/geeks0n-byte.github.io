# geeks0n-byte.github.io

Giga's GitHub Pages site for his games. Static HTML, CSS, and JS. No build step: a push to `main` publishes the repo root (Pages: branch `main`, folder `/`).

## Layout

- `index.html` — home. `about/`, `contact/`, `privacy-policy/`, `devlog/` (index + one folder per post). `site.css` — shared styles; fonts are self-hosted in `assets/fonts/`.
- `ga.js` — GA4 with Consent Mode v2 (defaults denied), the footer "Privacy settings" link, and the Spaceblox web game bridge. Every page loads it before the AdSense tag. Consent is handled by Google's CMP (AdSense > Privacy & messaging); there is no home-made banner.
- `app-ads.txt` and `ads.txt` — AdMob and AdSense authorization. Site root only.
- `spaceblox/` — game guide and landing; `spaceblox/privacy-policy.html` mirrors `/privacy-policy/` (canonical) because the app links to it. `spaceblox/play/` — exported Godot web build.
- `shapes/` — Shapes page (in development).
- `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll`.

## Run

Open `index.html` in a browser, or serve the repo root. There is no package manager, test runner, or export script here.

Live: https://geeks0n-byte.github.io/

## Working rules

Small readable changes. Subtract before adding. Prove it works before claiming done. Land on `main` via a short-lived PR. Never commit secrets or API keys.

## Gotchas

- `spaceblox/play/` is a Godot web export. Never hand-edit `index.pck` or `index.wasm`. Replace them only by copying a fresh non-Mono web export from the spaceblox repo.
- `spaceblox/play/index.service.worker.js` is network-first for `index.pck` and `index.wasm`.
- Analytics config lives in root `/ga.js` only. Keep `app-ads.txt` at the site root, not under a game folder.
- Every page needs the same head (title, description, canonical, `google-adsense-account` meta, `/ga.js`, then `adsbygoogle.js`), the site header nav and the footer with the "Privacy settings" link. Copy an existing page when adding one, and add it to `sitemap.xml`.
- The play export shell (spaceblox repo `web/shell.html`) must not load `/consent.js` (removed). The game's in-game Accept screen still uses `window.Geeks0nConsent` from `/ga.js`.
- The play export keeps cross-origin isolation off so AdSense and Analytics can load.
