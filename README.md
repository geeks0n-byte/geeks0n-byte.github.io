# geeks0n-byte.github.io

GitHub Pages site for geeks0n-byte games:

| URL | Purpose |
| --- | --- |
| https://geeks0n-byte.github.io/app-ads.txt | AdMob authorization (must stay at **site root**) |
| https://geeks0n-byte.github.io/ads.txt | AdSense authorization (must stay at **site root**) |
| https://geeks0n-byte.github.io/spaceblox/ | Spaceblox marketing landing |
| https://geeks0n-byte.github.io/spaceblox/play/ | Spaceblox web (HTML5) build |
| https://geeks0n-byte.github.io/spaceblox/privacy-policy.html | Spaceblox privacy policy |
| https://geeks0n-byte.github.io/shapes/ | Shapes marketing landing (WIP placeholder) |
| https://geeks0n-byte.github.io/shapes/privacy-policy.html | Shapes privacy placeholder |

AdMob crawls `app-ads.txt` at the **root** of the Play Console developer website
(`https://geeks0n-byte.github.io/app-ads.txt`). Keep only that root file — not under game folders.

## Publish

1. Public repository named exactly `geeks0n-byte.github.io`.
2. Push to `main`.
3. **Settings → Pages**: Deploy from branch `main`, folder `/ (root)`.
4. Confirm:
   - https://geeks0n-byte.github.io/app-ads.txt — one plain-text line
   - https://geeks0n-byte.github.io/spaceblox/ — Spaceblox landing
   - https://geeks0n-byte.github.io/shapes/ — Shapes placeholder
5. In Play Console, set the developer **website** to `https://geeks0n-byte.github.io`.

If AdMob lists extra `RESELLER` rows, paste those into the **root** `app-ads.txt` (one per line) and push again.

## Local layout

```
/
  app-ads.txt          ← AdMob (Play Console website root — required)
  ads.txt              ← AdSense (Sites verification — required)
  index.html           ← redirects to /spaceblox/
  robots.txt
  sitemap.xml
  google03499aee60edbd13.html  ← Search Console verification
  spaceblox/
    index.html         ← landing
    privacy-policy.html
    play/              ← Godot HTML5 export
    ga.js              ← shared GA4 config (also used by /shapes/)
    shared.css
    space-bg.css / space-bg.js
    assets/
  shapes/
    index.html         ← WIP placeholder landing
    privacy-policy.html
    shared.css
    shapes-bg.css
    icon.svg
    og.svg
```
