# geeks0n-byte.github.io

GitHub Pages site for **Spaceblox**:

| URL | Purpose |
| --- | --- |
| https://geeks0n-byte.github.io/app-ads.txt | AdMob authorization (must stay at **site root**) |
| https://geeks0n-byte.github.io/spaceblox/ | Game marketing landing page |
| https://geeks0n-byte.github.io/spaceblox/privacy-policy.html | Privacy policy (Play Store) |
| https://geeks0n-byte.github.io/spaceblox/motion.html | Experimental motion lab (`noindex`) |

AdMob crawls `app-ads.txt` at the **root** of the Play Console developer website
(`https://geeks0n-byte.github.io/app-ads.txt`). Keep only that root file — not under `/spaceblox/`.

## Publish

1. Public repository named exactly `geeks0n-byte.github.io`.
2. Push to `main` (this repo already includes the Spaceblox site + root `app-ads.txt`).
3. **Settings → Pages**: Deploy from branch `main`, folder `/ (root)`.
4. Confirm:
   - https://geeks0n-byte.github.io/app-ads.txt — one plain-text line
   - https://geeks0n-byte.github.io/spaceblox/ — landing page
5. In Play Console, set the developer **website** to `https://geeks0n-byte.github.io`.

If AdMob lists extra `RESELLER` rows, paste those into the **root** `app-ads.txt` (one per line) and push again.

## Local layout

```
/
  app-ads.txt          ← AdMob (Play Console website root — required)
  index.html           ← redirects to /spaceblox/
  robots.txt
  sitemap.xml
  spaceblox/
    index.html         ← landing
    privacy-policy.html
    motion.html
    shared.css         ← shared chrome / tokens
    assets/
```
