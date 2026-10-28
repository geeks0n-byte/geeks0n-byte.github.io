# geeks0n-byte.github.io

This file lives in `.github/` so the repository page still shows it. Pages publishes `main` as-is because `.nojekyll` is present. The readme is not at the repo root, so the site does not serve `/README.md`. Agent and maintainer notes are in `.github/AGENTS.md` for the same reason.

GitHub Pages site for Spaceblox, a calm color-logic puzzle made by Giga Sichinava:

| URL | Purpose |
| --- | --- |
| https://geeks0n-byte.github.io/ | Redirect to the Spaceblox home |
| https://geeks0n-byte.github.io/spaceblox/ | Home |
| https://geeks0n-byte.github.io/spaceblox/guide/ | Guide |
| https://geeks0n-byte.github.io/spaceblox/about/ | About |
| https://geeks0n-byte.github.io/spaceblox/contact/ | Contact |
| https://geeks0n-byte.github.io/spaceblox/devlog/ | Devlog |
| https://geeks0n-byte.github.io/app-ads.txt | AdMob authorization (**site root**) |
| https://geeks0n-byte.github.io/ads.txt | AdSense authorization (**site root**) |
| https://geeks0n-byte.github.io/spaceblox/play/ | Spaceblox web (HTML5) build |
| https://geeks0n-byte.github.io/spaceblox/press/ | Press kit (ZIP download) |
| https://geeks0n-byte.github.io/spaceblox/privacy-policy.html | Privacy policy (Play/AdSense and the app link here) |

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
  index.html           ← redirect into /spaceblox/
  ga.js                ← GA4 + Consent Mode v2
  app-ads.txt / ads.txt
  robots.txt / sitemap.xml
  google03499aee60edbd13.html
  spaceblox/
    index.html, about/, contact/, devlog/, privacy-policy.html, play/, assets/, …
```

## Notes

- Play export keeps **cross-origin isolation off** (`ensure_cross_origin_isolation_headers=false` in the Web preset) so Analytics can load. The player page loads `/ga.js` for analytics and does not load the AdSense library.
- Consent: Google's certified CMP from AdSense **Privacy & messaging**. Content pages load `adsbygoogle.js`. The player, the privacy policy, and 404 pages do not. GA4 runs with Consent Mode v2 defaults denied. Consent choices are managed by Google's CMP message when it is shown.
- Analytics config lives in root `/ga.js` only.
