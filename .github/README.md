# geeks0n-byte.github.io

This file lives in `.github/` so the repository page still shows it. Pages publishes `main` as-is because `.nojekyll` is present. The readme is not at the repo root, so the site does not serve `/README.md`.

GitHub Pages site for geeks0n-byte games:

| URL | Purpose |
| --- | --- |
| https://geeks0n-byte.github.io/ | Studio hub (Spaceblox + Shapes) |
| https://geeks0n-byte.github.io/app-ads.txt | AdMob authorization (**site root**) |
| https://geeks0n-byte.github.io/ads.txt | AdSense authorization (**site root**) |
| https://geeks0n-byte.github.io/spaceblox/ | Spaceblox marketing landing |
| https://geeks0n-byte.github.io/spaceblox/play/ | Spaceblox web (HTML5) build |
| https://geeks0n-byte.github.io/spaceblox/privacy-policy.html | Spaceblox + site privacy |
| https://geeks0n-byte.github.io/shapes/ | Shapes marketing (WIP) |
| https://geeks0n-byte.github.io/shapes/privacy-policy.html | Shapes site privacy |

AdMob crawls `app-ads.txt` at the **root** of the Play Console developer website
(`https://geeks0n-byte.github.io/app-ads.txt`). Keep only that root file — not under game folders.

## Publish

1. Public repository named exactly `geeks0n-byte.github.io`.
2. Push to `main`.
3. **Settings → Pages**: Deploy from branch `main`, folder `/ (root)`.
4. Confirm root `app-ads.txt`, studio hub, `/spaceblox/`, `/shapes/`.
5. In Play Console, set the developer **website** to `https://geeks0n-byte.github.io`.

## Local layout

```
/
  index.html           ← studio hub
  ga.js                ← GA4 + AdSense, injected only after Accept
  consent.js           ← Accept / Reject banner
  app-ads.txt / ads.txt
  robots.txt / sitemap.xml
  google03499aee60edbd13.html
  spaceblox/
    index.html, privacy-policy.html, play/, assets/, …
  shapes/
    index.html, privacy-policy.html, shared.css, assets/
```

## Notes

- Play export keeps **cross-origin isolation off** (`ensure_cross_origin_isolation_headers=false` in the Web preset) so AdSense and Analytics can load. The custom shell loads `/ga.js` and `/consent.js`. Google tags are injected only after Accept.
- Analytics config lives in root `/ga.js` only.
