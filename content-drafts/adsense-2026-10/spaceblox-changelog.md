---
title: "Spaceblox changelog"
description: "Spaceblox version notes for the first Play release, 1.1.0, and 1.2.0, with [CONFIRM] marks where a detail is not in the sources."
path: /spaceblox/changelog/
---

# Spaceblox changelog

This is a player-facing history of Spaceblox, taken from the live site and from the 1.2.0 patch notes. I am Giga Sichinava (gix0n on Google Play). Where a version number, a date, or a screen name is not actually written down in those sources, the line is marked **[CONFIRM]** instead of filled in.

The Android app is on [Google Play](https://play.google.com/store/apps/details?id=com.spaceblox.game). The [browser version](/spaceblox/play/) is the same Godot project, with a shorter feature list. Daily puzzle, Practice, and leaderboards are mobile-app only. On the web they show as **APP ONLY**.

## 1 September 2026: first release on Google Play

[CONFIRM] The live site calls this "Spaceblox released on Google Play" and describes it as the first release: a color-logic campaign with easy, medium, and hard levels. It does not print the version string **1.0**. This page uses 1.0 as the heading for that first release. Confirm the version string before this page is published. I also do not have a separate launch date for the browser build. The press page lists Android and the browser as the platforms, and 1 September 2026 as the release date.

What the first release already was, based on how later notes talk about it:

The campaign, the tutorial, and the rule set were the game. You fill a grid with yellow, blue, and green. The Rule of Two forbids three of the same color in a row or column. Equal Balance asks a finished line to hold the same number of yellow and blue. Green counts as both colors for the Rule of Two and as neither color for Equal Balance, with at most one green per line. Purple hoppers, locks, and "=" / "×" links are part of that same rule set, taught one at a time. I do not have a note that says any of those rules arrived in a later version, so I am not assigning them to 1.1.0 or 1.2.0.

Around that ruleset, the pages describe tools that were already part of play before the 1.1.0 Android list: a guided tutorial you can replay from the main menu, an in-game How to Play guide, hints that reveal an "=" or "×" link, unlimited undo and redo, restart, hold-to-clear, and three optional star goals. A level does not fail when a timer runs out. Mid-level progress is stored on the device. The browser stores it in that browser. The game text is in English, Spanish, German, French, Polish, Georgian, and Ukrainian. Music and sound effects are separate settings, and the space background can be dynamic or static.

Ads were part of the free game from the privacy policy's first effective date, which is the same day, 1 September 2026. The Android app uses AdMob. The site uses AdSense. Full-screen ads are kept to the gap between levels, after several wins. An ad for extra hints is optional.

[CONFIRM] I do not have a 1.0 "what's new" blurb, a build number, or a list of bug fixes for that first upload. Anything finer than the paragraph above would be a guess.

## 1.1.0 on Google Play, 5 October 2026

The home page's release list dates **Spaceblox 1.1.0** to 5 October 2026. The press page says the current public version is 1.1.0 on Google Play, with that same date. The what's-new lines on the home page are:

- Achievements
- Cloud saves
- Colorblind mode
- TalkBack support

A footnote on the home page says those items are on Android in 1.1.0, and also in the browser where they had already shipped. Read that split this way. Achievements, colorblind patterns, and screen-reader labels were already in the browser build. 1.1.0 is when they arrived on Android. Cloud save is the exception: it is Android-only, and it was not in the browser.

More detail from the game pages and the privacy policy, still about this version:

**Achievements.** Bronze, silver, and gold tiers, plus hidden achievements. They reward milestones, star goals, and a few secret feats. The Achievements screen is where you look them up. If you sign in to Google Play Games, achievements can sync. Signing in is optional, and it is never required to play.

**Cloud save.** Optional Google Play Games sign-in stores a cloud copy of progress, settings, and achievements in your Google Play Games account, on Google's side. I do not run a save server. In-progress levels are not uploaded. The browser version still has no cloud save.

**Colorblind mode.** Optional. It adds patterns to the tiles and uses a palette adjusted for better separation. The setting sits with language, sound, and background. The live guide's answer is that the patterns are there so no rule depends on telling colors apart by hue alone.

**Screen reader.** The feature is described as screen-reader labels for the menus and the game screen. The 1.1.0 Android line names TalkBack, which is Android's screen reader. The browser build already had the labels.

**Firebase, Android only, from 1.1.0 onward.** The privacy policy says this version of the app adds Firebase Analytics and Firebase Crashlytics. Analytics records gameplay events such as a level started, a level completed, or a hint used, plus basic device and app information. Crashlytics collects crash reports, including the device model, the operating system version, and the state of the app when it crashed. Earlier versions of the app do not include Firebase. The policy says this is how I find bugs. It is not a gameplay feature you turn on inside a level.

The same policy says that after you clear campaign levels, the app may show Google Play's in-app review prompt. Any rating you leave is handled by Google Play. I am not quoting ratings here, and I do not have a public count of them.

[CONFIRM] I do not have a full 1.1.0 patch list beyond the four home-page bullets, the browser-versus-Android split, and the Firebase sentences in the privacy policy. I am not adding bug fixes, level changes, or art changes to 1.1.0 that those sources do not name.

## 1.2.0, from the patch notes

[CONFIRM] The live press page still calls 1.1.0 the current public version. The 1.2.0 texts I have are a Play "what's new" blurb that begins "Spaceblox 1.2.0 is here!", a website release note, and a closed-test note that thanks testers and asks them to check daily, practice, notifications, and the new menus. I do not have a public release date for 1.2.0 on the live site. Confirm that 1.2.0 is on the public Play listing, and confirm the date, before this section is presented as shipped history.

The Play blurb's own summary is: a daily puzzle, with a new board every day, the same for everyone, in easy, medium, or hard; daily leaderboards in Play Games; Practice mode, with unlimited random puzzles and hints on; a new Stats screen; a fresh look (new tiles, menus, How to Play, and a pixel font); optional notifications when the daily puzzle is ready; and fixes for purple tile alignment and error highlights.

The website notes expand each of those. This is the longer list.

### Daily puzzle (mobile app)

A new puzzle every day at 07:00 UTC. Every player gets the same board. You pick easy, medium, or hard. Board sizes vary (5–6, 7–8, or 9×9). Undo is allowed. Hints are not. The score starts at 10,000 / 20,000 / 30,000, then loses 10 points per second and 50 points per hopper slide. Undoing a slide still counts. The score has a floor of 100. Higher is better. Only the first clear counts.

[CONFIRM] The notes put easy, medium, or hard, then the size bands (5–6, 7–8 or 9×9), then the three starting scores, in that order. They do not write "easy starts at 10,000 and uses a 5 or 6 board" as its own sentence. I read each triple as paired left to right. Confirm that pairing before it is turned into a table.

### Daily leaderboards (mobile app)

Three leaderboards in Google Play Games, one per difficulty. The browser does not host them.

### Practice mode (mobile app)

Unlimited random puzzles. You pick easy, medium, or hard. Hints are allowed, unlike the daily puzzle. The closed-test note asked testers whether the random boards feel fair and whether hints work. That is a test question, not a published result, so I am not reporting an answer.

### Stats

A Stats screen for the campaign, daily puzzles, and practice. The notes do not list the individual numbers on that screen. I am not inventing win counts or averages.

### Notifications

Opt-in. A ping when the daily puzzle is ready, or when an update lands. Promo notifications are off by default. The closed-test note asked testers to opt in and check that the daily-ready ping arrives.

### A fresh look

The website notes list the visual and menu work as:

- New tiles and purple hoppers, with padlocks now centred.
- A redesigned main menu, with Campaign, Daily, and Practice up front.
- A new Options screen, with icons and a language row.
- New How to Play, Level Select, Stats, achievements, and cups screens.
- A redesigned level editor.
- A refreshed pause menu, toasts, loading screen, close buttons, splash screen, and app icon.
- Widescreen backgrounds.
- A new pixel font, with better accented letters and full Ukrainian support. Georgian keeps its own font.
- A new credits and licenses screen.

[CONFIRM] The notes name "cups screens" and do not say what a cup is. I will not describe cups as trophies, leagues, or anything else until that word is defined.

[CONFIRM] The notes say the level editor was redesigned. They do not say whether players can open it, or whether it is a tool I use to build campaign levels. I am not describing an editor UI.

### Fixes

- The purple tile mask lines up correctly.
- Error highlights look even on every cell.
- Background asteroids no longer look like tiles.

The Play blurb shortens the first two of those to "fixes for purple tile alignment and error highlights." The asteroid line is in the website notes.

### Browser version of 1.2.0

Daily, Practice, and leaderboards stay in the mobile app. On the web they show as **APP ONLY**, with a short note explaining why. The patch notes tell the reader to get Spaceblox on Google Play to play those modes. I do not have the wording of the in-page "why" note in the sources I used, so I am not paraphrasing it.

[CONFIRM] I do not have a 1.2.0 note that says the campaign rules changed. Nothing in the patch notes adds or removes a color rule. If a later build does change a rule, these notes do not say so.

## How to read the gaps

If you are checking this history against the store, use the live press page for what is public today: version 1.1.0, dated 5 October 2026, on [Google Play](https://play.google.com/store/apps/details?id=com.spaceblox.game). Use this page for the 1.2.0 text that already exists in the patch notes, with the **[CONFIRM]** lines still open. The [browser version](/spaceblox/play/) remains the place to play a campaign level without installing the app, and it remains the place that does not run the daily puzzle.
