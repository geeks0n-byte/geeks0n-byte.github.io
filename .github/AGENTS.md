# geeks0n-byte.github.io

## URL layout (2026-10)

Public marketing site lives under `/spaceblox/` (home, guide, about, contact, devlog, assets, CSS/JS, 404). Root `https://geeks0n-byte.github.io/` keeps Google files (`ads.txt`, `app-ads.txt`, `google03499aee60edbd13.html`, `robots.txt`, `ga.js`) and redirects visitors to `/spaceblox/`. Old `/about/`, `/contact/`, `/devlog/` paths are redirect stubs. Guide is `/spaceblox/guide/`; play stays `/spaceblox/play/`. The published privacy policy is only at `/spaceblox/privacy-policy.html` (Play/AdSense URL); root `/privacy-policy/` no longer exists.

Background: parallax drifts left+up (game `base_scroll_speed` −15,−5); FX spawn on the right and travel left/down (game `SpaceBackgroundFx`).

This file lives in `.github/` so GitHub Pages does not serve it (the site publishes the repo root; `.github/` is not published).

The Spaceblox website. The site is only about the game: no studio name or location in the copy, and Giga Sichinava appears only as the creator ("Made by Giga Sichinava"). The header brand is "Spaceblox". The privacy-policy text is the exception: its controller details must match the Play listing, so change it only on Giga's say-so. Static HTML, CSS, and JS. No build step: a push to `main` publishes the repo root (Pages: branch `main`, folder `/`).

## Layout

- `index.html` — home. `about/`, `contact/`, `devlog/` (index + one folder per post). `site.css` — the "soft pixel space" design (tokens, header/menu, footer, buttons, cards, ad bands, home, reading pages, privacy, 404); Inter (body) is self-hosted in `assets/fonts/`, PressStart2P (headings, buttons) is `spaceblox/assets/PressStart2P.ttf`. `spaceblox/shared.css` adds the /spaceblox/ page layout on top of `/site.css`. `site.js` — mobile menu, screenshot carousel (manual only), click-to-load trailer. `space-bg.js` + `space-bg.css` — animated space background (the game's bg_1..bg_4 layers drifting, plus occasional comets, shooting stars and asteroids) on home, /spaceblox/, devlog, about, contact and 404. It sits behind everything (fixed, z-index -1), uses CSS transform/opacity animations only, freezes when the tab is hidden, is static under prefers-reduced-motion or Save-Data, and uses 2 layers and shooting stars only on small screens. Reading pages get a dimmer 2-layer sky with no effects. Not loaded on the privacy page (kept unchanged) or the play page (the game draws its own sky). Design spec: Mira's STYLE-SPEC (one breakpoint at 720px).
- `ga.js` — GA4 with Consent Mode v2 (defaults denied), the Spaceblox web game bridge, and the display ad bands: every `.ad-band` ships `hidden` and stays hidden while `ADS_LIVE = false`; after AdSense approval, add each band's `data-ad-slot` and flip `ADS_LIVE`. Bands with no slot id, unfilled, or not filled within 5 s stay hidden. Every page loads it before the AdSense tag. Consent is handled by Google's CMP (AdSense > Privacy & messaging); there is no home-made banner.
- `app-ads.txt` and `ads.txt` — AdMob and AdSense authorization. Site root only.
- `spaceblox/` — game guide and landing; `spaceblox/privacy-policy.html` is the only privacy policy page (Play/AdSense and the app link here). `spaceblox/play/` — exported Godot web build.
- Icons: the Spaceblox app icon from the spaceblox repo (`resources/icons/app_icon_cosmos_256.png`, 64×64 pixel art at 4×). `assets/icon-64.png` is the native 64×64 art (header and footer logo, shown at 32 px, pixelated); `favicon.ico` (16/32/48), `assets/icon-192.png` (3×), `assets/icon-512.png` (8×) and `apple-touch-icon.png` (180, corners filled with void) are nearest-neighbour scales of it. Regenerate them all if the app icon changes. Social card (1200×630): `spaceblox/og-image.png` on every page.
- `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll`.
- Home is the game's landing page (hero, "What is Spaceblox?", Features, devlog and release notes, "Made by" band). `/spaceblox/` is the guide (How to play, rules, stars and hints, controls, tips, FAQ, trailer), labelled "Guide" in the nav.
- One home per fact, links elsewhere: pitch, feature list, platforms, languages, accessibility and release notes live on home; rules, controls, stars/hints, tips and gameplay FAQ on the Guide; creator, how it is built and tested, privacy approach and funding on About; design reasoning in the devlog posts. Don't copy a fact to a second page; link to its home.
- No "The creator" panel or section (Giga removed it). The creator credit lives in the footer, short "Made by…" lines, the structured-data author and the About intro.
- Footer Legal column: Privacy policy only (one link to `/spaceblox/privacy-policy.html`). `ads.txt`, `app-ads.txt` and the Search Console file are not linked from pages (the files stay at their URLs).
- Background events (`/space-bg.js`): comets, shooting stars and asteroids spawn at random times (3.8–8.2 s on desktop, 9–16 s on phones and reading pages, at most 3 or 2 at once) on a random line through a random on-screen point, cross the screen and are removed. No fixed comet or asteroid art anywhere. Still under reduced motion and Save-Data, paused in hidden tabs, not loaded on the privacy page or the play page.
- The play page loader matches the in-game `LoadingOverlay` (spaceblox `scenes/loading_overlay.tscn`): 35% black dim, white Press Start "LOADING" with 1-2-3-blank dots every 0.45 s, no progress bar. Keep it that way in `web/shell.html`.
- Ad placements (bands, hidden until live): home between Features and "From the devlog"; /spaceblox/ after Rules and before FAQ; each devlog post after the article; play shell right rail only at ≥1280px with room beside the canvas. No ads on the privacy page, about, contact, 404, or over the game canvas.

## Run

Open `index.html` in a browser, or serve the repo root. There is no package manager, test runner, or export script here.

Live: https://geeks0n-byte.github.io/

## Working rules

Small readable changes. Subtract before adding. Prove it works before claiming done. Land on `main` via a short-lived PR. Never commit secrets or API keys.

## Gotchas

- `spaceblox/play/` is a Godot web export. Never hand-edit `index.pck` or `index.wasm`. Replace them only by copying a fresh non-Mono web export from the spaceblox repo.
- `spaceblox/play/index.service.worker.js` is network-first for `index.pck` and `index.wasm`, but cache-first for `index.html`. If you hand-edit `spaceblox/play/index.html`, change `CACHE_VERSION` too, or returning players keep the old page. Mirror any such edit in the spaceblox repo's `web/shell.html`, because the next export overwrites `index.html`.
- Analytics config lives in root `/ga.js` only. Keep `app-ads.txt` at the site root, not under a game folder.
- Every page needs the same head (title as "Page – Spaceblox", og:site_name "Spaceblox", description, canonical, `google-adsense-account` meta, `/ga.js`, then `adsbygoogle.js`, og/twitter tags with 1200×630 image size, the icon links and `site.webmanifest`), the skip link, the site header nav (Home, Guide → `/spaceblox/`, Devlog, About, Contact) and the footer with the Privacy policy link. Copy an existing page when adding one, and add it to `sitemap.xml`.
- The play export shell (spaceblox repo `web/shell.html`) must not load `/consent.js` (removed). The game has no in-game consent screen on web; Google's consent message handles it, and `/ga.js` only adds the AdSense tag with the 30 s ad cadence on the play page.
- The play export keeps cross-origin isolation off so AdSense and Analytics can load.
- The play shell has a site top bar (56px, 44px on mobile) above the canvas; `fitPlayCanvas` subtracts its height. Keep nothing on top of the canvas (the game's own pause button sits top-left).
- WebP screenshots (`spaceblox/assets/shot_*.webp`, 600px wide) are derived from the PNGs; regenerate both if a screenshot changes.
