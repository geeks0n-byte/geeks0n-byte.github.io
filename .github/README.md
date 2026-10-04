# geeks0n-byte.github.io

This file lives in `.github/` so the repository page still shows it. Pages publishes `main` as-is because `.nojekyll` is present. The readme is not at the repo root, so the site does not serve `/README.md`. Agent and maintainer notes are in `.github/AGENTS.md` for the same reason.

GitHub Pages site for Spaceblox, a calm color-logic puzzle made by Giga Sichinava:

| URL | Purpose |
| --- | --- |
| https://geeks0n-byte.github.io/ | Home (Spaceblox landing page) |
| https://geeks0n-byte.github.io/about/ , /contact/ , /privacy-policy/ | About, contact, site privacy policy |
| https://geeks0n-byte.github.io/devlog/ | Devlog index and posts |
| https://geeks0n-byte.github.io/app-ads.txt | AdMob authorization (**site root**) |
| https://geeks0n-byte.github.io/ads.txt | AdSense authorization (**site root**) |
| https://geeks0n-byte.github.io/spaceblox/ | Spaceblox guide and landing |
| https://geeks0n-byte.github.io/spaceblox/play/ | Spaceblox web (HTML5) build |
| https://geeks0n-byte.github.io/spaceblox/privacy-policy.html | Copy of /privacy-policy/ (the app links here) |

AdMob crawls `app-ads.txt` at the **root** of the Play Console developer website
(`https://geeks0n-byte.github.io/app-ads.txt`). Keep only that root file — not under game folders.

## Publish

1. Public repository named exactly `geeks0n-byte.github.io`.
2. Push to `main`.
3. **Settings → Pages**: Deploy from branch `main`, folder `/ (root)`.
4. Confirm root `app-ads.txt`, home page and `/spaceblox/`.
5. In Play Console, set the developer **website** to `https://geeks0n-byte.github.io`.

## Local layout

```
/
  index.html           ← home
  site.css             ← shared styles (fonts in assets/fonts/)
  ga.js                ← GA4 + Consent Mode v2, Privacy settings link, game bridge
  about/ contact/ privacy-policy/ devlog/
  app-ads.txt / ads.txt
  robots.txt / sitemap.xml
  google03499aee60edbd13.html
  spaceblox/
    index.html, privacy-policy.html, play/, assets/, …
```

## Notes

- Play export keeps **cross-origin isolation off** (`ensure_cross_origin_isolation_headers=false` in the Web preset) so AdSense and Analytics can load. The custom shell loads `/ga.js`, which adds AdSense with the H5 games cadence.
- Consent: Google's certified CMP from AdSense **Privacy & messaging**. Every page loads `adsbygoogle.js` directly; GA4 runs with Consent Mode v2 defaults denied. The footer "Privacy settings" link reopens the consent message.
- Analytics config lives in root `/ga.js` only.
