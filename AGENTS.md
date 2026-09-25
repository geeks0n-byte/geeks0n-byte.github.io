# geeks0n-byte.github.io

Giga's GitHub Pages site for his games. Static HTML, CSS, and JS. No build step: a push to `main` publishes the repo root (Pages: branch `main`, folder `/`).

## Layout

- `index.html` — studio hub. `ga.js` and `consent.js` — GA4 and the consent banner.
- `app-ads.txt` and `ads.txt` — AdMob and AdSense authorization. Site root only.
- `spaceblox/` — marketing landing. `spaceblox/play/` — exported Godot web build.
- `shapes/` — Shapes marketing (work in progress).
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
- The play export keeps cross-origin isolation off so AdSense and Analytics can load.
