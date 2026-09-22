# geeks0n-byte.github.io

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
  ga.js                ← GA4 + Consent Mode defaults
  consent.js           ← Accept / Reject banner
  app-ads.txt / ads.txt
  robots.txt / sitemap.xml
  google03499aee60edbd13.html
  spaceblox/
    index.html, privacy-policy.html, play/, assets/, …
    ga.js              ← same logic as /ga.js (legacy path)
  shapes/
    index.html, privacy-policy.html, shared.css, assets/
```

## Notes

- Play PWA service worker keeps **COEP injection off** so AdSense/gtag can load on static hosts.
- After changing play SW cache version, hard-refresh or clear the Spaceblox SW once.
