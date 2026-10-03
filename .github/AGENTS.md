# geeks0n-byte.github.io

This file lives in `.github/` so GitHub Pages does not serve it (the site publishes the repo root; `.github/` is not published).

Giga's GitHub Pages site for his games. Static HTML, CSS, and JS. No build step: a push to `main` publishes the repo root (Pages: branch `main`, folder `/`).

## Layout

- `index.html` — home. `about/`, `contact/`, `privacy-policy/`, `devlog/` (index + one folder per post). `site.css` — shared styles for every page, including the header, nav, footer, skip link and focus ring; fonts are self-hosted in `assets/fonts/`. `spaceblox/shared.css` only adds the Spaceblox game theme on top of `/site.css`.
- `ga.js` — GA4 with Consent Mode v2 (defaults denied), the footer "Privacy settings" link, and the Spaceblox web game bridge. Every page loads it before the AdSense tag. Consent is handled by Google's CMP (AdSense > Privacy & messaging); there is no home-made banner.
- `app-ads.txt` and `ads.txt` — AdMob and AdSense authorization. Site root only.
- `spaceblox/` — game guide and landing; `spaceblox/privacy-policy.html` mirrors `/privacy-policy/` (canonical) because the app links to it. `spaceblox/play/` — exported Godot web build.
- Icons: `favicon.ico`, `favicon.svg` (pixel "G" studio mark), `apple-touch-icon.png`, `assets/icon-192.png`, `assets/icon-512.png`, listed in `site.webmanifest`. Social cards (1200×630): `assets/og-image.png` (studio pages) and `spaceblox/og-image.png` (Spaceblox and devlog posts).
- `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll`.

## Run

Open `index.html` in a browser, or serve the repo root. There is no package manager, test runner, or export script here.

Live: https://geeks0n-byte.github.io/

## Working rules

Small readable changes. Subtract before adding. Prove it works before claiming done. Land on `main` via a short-lived PR. Never commit secrets or API keys.

## Gotchas

- `spaceblox/play/` is a Godot web export. Never hand-edit `index.pck` or `index.wasm`. Replace them only by copying a fresh non-Mono web export from the spaceblox repo.
- `spaceblox/play/index.service.worker.js` is network-first for `index.pck` and `index.wasm`, but cache-first for `index.html`. If you hand-edit `spaceblox/play/index.html`, change `CACHE_VERSION` too, or returning players keep the old page. Mirror any such edit in the spaceblox repo's `web/shell.html`, because the next export overwrites `index.html`.
- Analytics config lives in root `/ga.js` only. Keep `app-ads.txt` at the site root, not under a game folder.
- Every page needs the same head (title as "Page – geeks0n-byte", description, canonical, `google-adsense-account` meta, `/ga.js`, then `adsbygoogle.js`, og/twitter tags with 1200×630 image size, the icon links and `site.webmanifest`), the skip link, the site header nav (Home, Spaceblox, Devlog, About, Contact) and the footer with the "Privacy settings" link. Copy an existing page when adding one, and add it to `sitemap.xml`.
- The play export shell (spaceblox repo `web/shell.html`) must not load `/consent.js` (removed). The game has no in-game consent screen on web; Google's consent message handles it, and `/ga.js` only adds the AdSense tag with the 30 s ad cadence on the play page.
- The play export keeps cross-origin isolation off so AdSense and Analytics can load.
