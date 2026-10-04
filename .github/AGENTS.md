# geeks0n-byte.github.io

This file lives in `.github/` so GitHub Pages does not serve it (the site publishes the repo root; `.github/` is not published).

The Spaceblox website. The site is only about the game: no studio name or location in the copy, and Giga Sichinava appears only as the creator ("Made by Giga Sichinava"). The header brand is "Spaceblox". The privacy-policy text is the exception: its controller details must match the Play listing, so change it only on Giga's say-so. Static HTML, CSS, and JS. No build step: a push to `main` publishes the repo root (Pages: branch `main`, folder `/`).

## Layout

- `index.html` — home. `about/`, `contact/`, `privacy-policy/`, `devlog/` (index + one folder per post). `site.css` — the "soft pixel space" design (tokens, header/menu, footer, buttons, cards, ad bands, home, reading pages, privacy, 404); Inter (body) is self-hosted in `assets/fonts/`, PressStart2P (headings, buttons) is `spaceblox/assets/PressStart2P.ttf`. `spaceblox/shared.css` adds the /spaceblox/ page layout on top of `/site.css`. `site.js` — mobile menu, screenshot carousel (manual only), click-to-load trailer. `space-bg.js` + `space-bg.css` — animated space background (the game's bg_1..bg_4 layers drifting, plus occasional comets, shooting stars and asteroids) on home, /spaceblox/, devlog, about, contact and 404. It sits behind everything (fixed, z-index -1), uses CSS transform/opacity animations only, freezes when the tab is hidden, is static under prefers-reduced-motion or Save-Data, and uses 2 layers and shooting stars only on small screens. Reading pages get a dimmer 2-layer sky with no effects. Not loaded on the privacy pages (kept unchanged) or the play page (the game draws its own sky). Design spec: Mira's STYLE-SPEC (one breakpoint at 720px).
- `ga.js` — GA4 with Consent Mode v2 (defaults denied), the footer "Privacy settings" link, the Spaceblox web game bridge, and the display ad bands: every `.ad-band` ships `hidden` and stays hidden while `ADS_LIVE = false`; after AdSense approval, add each band's `data-ad-slot` and flip `ADS_LIVE`. Bands with no slot id, unfilled, or not filled within 5 s stay hidden. Every page loads it before the AdSense tag. Consent is handled by Google's CMP (AdSense > Privacy & messaging); there is no home-made banner.
- `app-ads.txt` and `ads.txt` — AdMob and AdSense authorization. Site root only.
- `spaceblox/` — game guide and landing; `spaceblox/privacy-policy.html` mirrors `/privacy-policy/` (canonical) because the app links to it. `spaceblox/play/` — exported Godot web build.
- Icons: `favicon.ico`, `favicon.svg` (four Spaceblox tiles, drawn from `spaceblox/assets/icon_512.png`; the PNG icons are scaled from it), `apple-touch-icon.png`, `assets/icon-192.png`, `assets/icon-512.png`, listed in `site.webmanifest`. Social card (1200×630): `spaceblox/og-image.png` on every page.
- `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll`.
- Home is the game's landing page (hero, "What is Spaceblox?", "Why Spaceblox feels calm" design notes, devlog and release notes, "Made by Giga Sichinava" band). `/spaceblox/` is the guide (How to play, rules, tips, FAQ, trailer), labelled "Guide" in the nav.
- Ad placements (bands, hidden until live): home between "Why Spaceblox feels calm" and "From the devlog"; /spaceblox/ after Rules and before FAQ; each devlog post after the article; play shell right rail only at ≥1280px with room beside the canvas. No ads on privacy pages, about, contact, 404, or over the game canvas.

## Run

Open `index.html` in a browser, or serve the repo root. There is no package manager, test runner, or export script here.

Live: https://geeks0n-byte.github.io/

## Working rules

Small readable changes. Subtract before adding. Prove it works before claiming done. Land on `main` via a short-lived PR. Never commit secrets or API keys.

## Gotchas

- `spaceblox/play/` is a Godot web export. Never hand-edit `index.pck` or `index.wasm`. Replace them only by copying a fresh non-Mono web export from the spaceblox repo.
- `spaceblox/play/index.service.worker.js` is network-first for `index.pck` and `index.wasm`, but cache-first for `index.html`. If you hand-edit `spaceblox/play/index.html`, change `CACHE_VERSION` too, or returning players keep the old page. Mirror any such edit in the spaceblox repo's `web/shell.html`, because the next export overwrites `index.html`.
- Analytics config lives in root `/ga.js` only. Keep `app-ads.txt` at the site root, not under a game folder.
- Every page needs the same head (title as "Page – Spaceblox", og:site_name "Spaceblox", description, canonical, `google-adsense-account` meta, `/ga.js`, then `adsbygoogle.js`, og/twitter tags with 1200×630 image size, the icon links and `site.webmanifest`), the skip link, the site header nav (Home, Guide → `/spaceblox/`, Devlog, About, Contact) and the footer with the "Privacy settings" link. Copy an existing page when adding one, and add it to `sitemap.xml`.
- The play export shell (spaceblox repo `web/shell.html`) must not load `/consent.js` (removed). The game has no in-game consent screen on web; Google's consent message handles it, and `/ga.js` only adds the AdSense tag with the 30 s ad cadence on the play page.
- The play export keeps cross-origin isolation off so AdSense and Analytics can load.
- The play shell has a site top bar (56px, 44px on mobile) above the canvas; `fitPlayCanvas` subtracts its height. Keep nothing on top of the canvas (the game's own pause button sits top-left).
- WebP screenshots (`spaceblox/assets/shot_*.webp`, 600px wide) are derived from the PNGs; regenerate both if a screenshot changes.
