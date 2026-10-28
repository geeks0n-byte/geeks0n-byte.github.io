---
title: "Spaceblox changelog"
description: "Spaceblox version notes for v1.0 (1 September 2026) and 1.1.0 (5 October 2026). The current public version is 1.1.0."
path: /spaceblox/changelog/
---

# Spaceblox changelog

This is the player-facing history of Spaceblox. I am Giga Sichinava (gix0n on Google Play). It covers two published versions. **v1.0** is the Google Play launch on 1 September 2026. **1.1.0** is the current public version, dated 5 October 2026 on the live press page. The history stops there.

The Android app is on [Google Play](https://play.google.com/store/apps/details?id=com.spaceblox.game). The [browser version](/spaceblox/play/) is the same Godot project. The campaign, the tutorial, and the rules are in both. Cloud save is not. It arrived on Android with 1.1.0, and the browser build does not have it.

## v1.0, 1 September 2026

v1.0 is the first release on Google Play. The live site describes that day as the first release: a color-logic campaign with easy, medium, and hard levels. The privacy policy uses the same date as its effective date.

What you do in v1.0 is fill a grid. Some cells already hold tiles. A lock icon means that tile is fixed. An empty cell cycles Yellow, then Blue, then Green. Purple tiles, when a level has them, are already on the board. You tap one to hop it along its arrow. If another purple tile is on the destination, the hop is blocked until you move the blocker.

The rules in that first release are the rules the game still teaches:

- **Rule of Two.** No three tiles of the same color next to each other in a row or a column. Two of a color may touch. A third may not.
- **Equal Balance.** A finished row or column has the same number of yellow tiles and blue tiles.
- **Green.** For the Rule of Two, green counts as both yellow and blue. For Equal Balance, green counts as neither. It fills a cell and adds nothing to either count, which is what makes a line of 3, 5, or 7 cells possible to balance.
- **Rule of One.** A row or a column holds at most one green.
- **Purple.** A purple tile fills a cell and, like green, does not count toward Equal Balance. It hops between two linked cells.
- **Links.** "=" means the two cells are the same color. "×" means they are different colors.

The campaign introduces those ideas gradually. Early boards stay with yellow and blue. Later boards add green, then purple hoppers, locks, and links. I have not published a level count, so this note does not include one. Levels unlock as you go, from easy to medium to hard.

Around the rules, v1.0 already had the tools the guide describes. The first time you press Play, a tutorial teaches one rule at a time on a small board, with a highlighted cell to try. You can replay that tutorial from the main menu. How to Play opens the rule guide, with valid and invalid examples, during a level. A broken rule highlights the cells involved, in red, while you are still playing. Undo and Redo are unlimited on a campaign level. Press and hold clears one tile. In the browser, hold for about a second. Restart restores the starting layout.

Each campaign level has up to three star goals. One is for finishing a valid board. One is for finishing without a hint. One is for finishing inside the level's time limit, or, on some purple boards, within a set number of hops. The clock does not end the level. Missing the time, or the hop limit, leaves that star empty. Stars are optional. You can clear a level with one star and come back for the others.

A hint does not fill a cell. It reveals a helpful "=" or "×" on the board, and you still choose the color. Each level includes a small number of hints, more on harder levels. If you run out, you can watch an optional ad for three more. You do not have to.

Progress in v1.0 stays on the device, or in the browser if that is where you are playing. There is no account. I do not run a save server. An in-progress level is saved, so closing the game does not throw the board away. The game text is in English, Spanish, German, French, Polish, Georgian, and Ukrainian. Music and sound effects are separate. The space background can be dynamic or static.

The game is free. v1.0 is supported by ads: AdMob in the Android app, AdSense on this website. Full-screen ads are held until you have cleared several levels, and then they appear between levels, not in the middle of a puzzle. The privacy policy's summary for the app before 1.1.0 does not include Firebase. That arrives in the next version.

The browser build already had some of what Android received in 1.1.0. Achievements, colorblind tile patterns, and screen-reader labels were in the browser before they were on Android. v1.0 on Google Play is the campaign release. It is not the Android debut of those three options.

## 1.1.0, 5 October 2026

1.1.0 is the current public version on Google Play. The home page dates it 5 October 2026. The press page says the same. The what's-new lines are:

- Achievements
- Cloud saves
- Colorblind mode
- TalkBack support

A footnote on the home page says those items are on Android in 1.1.0, and also in the browser where they had already shipped. Read the split this way. Achievements, colorblind patterns, and screen-reader labels were already in the browser. 1.1.0 is when they arrived on Android. Cloud save is the exception. It is Android-only. The browser build does not have it.

**Achievements.** Bronze, silver, and gold tiers, plus hidden achievements. They reward milestones, star goals, and a few secret feats. You look them up on the Achievements screen. If you sign in to Google Play Games, achievements can sync. Signing in is optional, and it is never required to play.

**Cloud save.** Optional Google Play Games sign-in stores a cloud copy of your progress, settings, and achievements in your Play Games account, on Google's side. I do not keep that copy. In-progress levels are not uploaded. Browser progress stays in that browser on that device, and it does not move to the phone by itself. You can delete the on-device save from the system settings, by uninstalling, or with Reset profile in Options. You can delete the browser save by clearing site data for geeks0n-byte.github.io.

**Colorblind mode.** Optional. It adds patterns to the tiles and uses a palette adjusted for better separation, so a rule does not depend on hue alone. The setting sits with language, sound, and background. The patterns are in the browser build, and on Android from this version. I have not published the pattern shapes, so this note does not draw them.

**Screen reader.** Labels cover the menus and the game screen. The 1.1.0 Android line names TalkBack, Android's screen reader. The browser build already had the labels.

**Firebase, from 1.1.0 onward, Android only.** The privacy policy says this version adds Firebase Analytics and Firebase Crashlytics. Analytics records gameplay events such as a level started, a level completed, or a hint used, plus basic device and app information. Crashlytics collects crash reports: the device model, the operating system version, and the state of the app when it crashed. Earlier versions of the app do not include Firebase. I use those reports to fix bugs. They are not a switch inside a level.

After you clear campaign levels, the app may show Google Play's in-app review prompt. Any rating you leave is handled by Google Play. This history does not quote ratings, and it does not include a count of them.

The published 1.1.0 notes are the four home-page lines, the browser-versus-Android split, and the Firebase sentences in the privacy policy. The color rules did not change between v1.0 and 1.1.0. The Rule of Two, Equal Balance, green, purple hoppers, locks, and "=" / "×" links are the same rules the tutorial teaches.

## Where to play the current version

Install 1.1.0 from [Google Play](https://play.google.com/store/apps/details?id=com.spaceblox.game), or open the [browser version](/spaceblox/play/). Both play the campaign. If you want cloud save or TalkBack on Android, you want 1.1.0, not the v1.0 upload from 1 September 2026. If you only want to try a board, the browser build is enough, and its progress stays on that device.
