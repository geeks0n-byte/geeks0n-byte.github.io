# AdSense content drafts (October 2026)

Copy only. These Markdown files are drafts for new or refreshed pages. They do not change any live HTML, layout, or code. Do not merge this pull request into the site.

Every Google Play link uses the URL already in the repo and in the site-copy files:

`https://play.google.com/store/apps/details?id=com.spaceblox.game`

The browser version is `/spaceblox/play/` (`https://geeks0n-byte.github.io/spaceblox/play/`). Where both are linked, Google Play comes first.

Facts are taken from the live pages in this repository and from the approved site-copy, the 1.2.0 patch notes, and the press kit. No download numbers, ratings, reviews, or quotes were added. The creator's location is not mentioned. Word counts below are words in the body. YAML front matter is not included.

The live guide at `/spaceblox/guide/` already covers a shorter how-to-play, tips, and FAQ. The drafts below are separate, longer pages. About and contact are refreshes meant for the existing URLs.

## Files

| File | Words | Suggested URL |
| --- | ---: | --- |
| `spaceblox.md` | 1651 | https://geeks0n-byte.github.io/spaceblox/ |
| `spaceblox-how-to-play.md` | 2078 | https://geeks0n-byte.github.io/spaceblox/how-to-play/ |
| `spaceblox-tips.md` | 1873 | https://geeks0n-byte.github.io/spaceblox/tips/ |
| `spaceblox-faq.md` | 1828 | https://geeks0n-byte.github.io/spaceblox/faq/ |
| `spaceblox-changelog.md` | 1947 | https://geeks0n-byte.github.io/spaceblox/changelog/ |
| `binary-puzzles-and-spaceblox.md` | 2163 | https://geeks0n-byte.github.io/spaceblox/devlog/binary-puzzles-and-spaceblox/ |
| `why-odd-grids-need-a-wildcard.md` | 2038 | https://geeks0n-byte.github.io/spaceblox/devlog/why-odd-grids-need-a-wildcard/ |
| `making-a-puzzle-game-solo-in-godot.md` | 1930 | https://geeks0n-byte.github.io/spaceblox/devlog/making-spaceblox-solo-in-godot/ |
| `designing-accessible-color-puzzles.md` | 2040 | https://geeks0n-byte.github.io/spaceblox/devlog/designing-accessible-color-puzzles/ |
| `about.md` | 903 | https://geeks0n-byte.github.io/spaceblox/about/ |
| `contact.md` | 1086 | https://geeks0n-byte.github.io/spaceblox/contact/ |

`spaceblox.md`, the how-to-play, tips, FAQ, and changelog are each over 500 words. The four devlog articles are each over 700 words. About and contact are each over 300 words.

## [CONFIRM] markers

These are open questions. The drafts mark them in place instead of filling them in.

1. **Version string for the first release.** The live site calls 1 September 2026 the first Google Play release (a color-logic campaign, easy / medium / hard). It never prints "1.0". `spaceblox-changelog.md` uses 1.0 as the heading only. There is also no 1.0 what's-new blurb, build number, or bug-fix list, and no separate browser launch date.
2. **1.1.0 scope.** The home page lists achievements, cloud saves, colorblind mode, and TalkBack support (5 October 2026). The privacy policy adds Firebase Analytics and Crashlytics from 1.1.0 onward. There is no fuller 1.1.0 patch list. Browser already had achievements, colorblind patterns, and screen-reader labels; cloud save is Android-only.
3. **Whether 1.2.0 is public, and its date.** The patch notes and a Play "what's new" blurb describe 1.2.0. A closed-test note also exists. The live press page still says the current version is 1.1.0 (5 October 2026). No public ship date is on the live site. Marked in the changelog and the FAQ.
4. **Daily size and score pairing.** The 1.2.0 notes list easy, medium, or hard, then sizes (5–6, 7–8 or 9×9), then starting scores 10,000 / 20,000 / 30,000, in that order. They do not write "easy is a 5–6 board and starts at 10,000." Marked in the changelog and the FAQ. The other daily numbers (07:00 UTC, −10 per second, −50 per hopper slide, undo of a slide still counts, floor of 100, first clear only) are stated outright in the notes.
5. **What "cups" are.** The 1.2.0 notes name new achievements and cups screens and do not define a cup.
6. **Who the level editor is for.** The 1.2.0 notes say the level editor was redesigned. They do not say whether players can open it. Marked in the changelog and in `making-a-puzzle-game-solo-in-godot.md`.
7. **Green and purple on = / × links.** An older press-kit paragraph said green counts as a match either way, and purple only matches purple. The live guide and the live press page only say "=" is the same color and "×" is a different color. The how-to-play, tips, and binary-puzzle article teach the live wording and mark the older sentence. Do not publish the older sentence as a rule until it is confirmed.
8. **No 1.2.0 rule change is documented.** The patch notes do not add or remove a color rule. The changelog says so, and marks the absence rather than assuming the rules were frozen on purpose.
