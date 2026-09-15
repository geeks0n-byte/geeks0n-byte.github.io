# geeks0n-byte.github.io

Hosts **app-ads.txt** for Spaceblox (AdMob), at:

https://geeks0n-byte.github.io/app-ads.txt

AdMob only accepts this file at the **root** of the Play Console developer website. Do not put it under a game subpath (e.g. `/spaceblox/`).

## Publish

1. On GitHub, create a **public** repository named exactly `geeks0n-byte.github.io`.
2. From this folder:

```powershell
git init
git add app-ads.txt README.md
git commit -m "Add app-ads.txt for AdMob"
git branch -M main
git remote add origin https://github.com/geeks0n-byte/geeks0n-byte.github.io.git
git push -u origin main
```

3. Repo **Settings → Pages**: Deploy from branch `main`, folder `/ (root)`.
4. Open https://geeks0n-byte.github.io/app-ads.txt and confirm you see one line of plain text.
5. In Play Console, set the developer **website** to `https://geeks0n-byte.github.io`.

If AdMob lists extra `RESELLER` rows, paste those into `app-ads.txt` (one per line) and push again.
