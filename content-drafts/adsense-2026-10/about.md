---
title: "About Spaceblox and Giga Sichinava"
description: "About Giga Sichinava (gix0n) and Spaceblox: a calm color-logic puzzle made in Godot, how it is tested, translated, funded, and how to get in touch."
path: /spaceblox/about/
---

# About

I am Giga Sichinava. On Google Play my developer name is gix0n. Spaceblox is my game. I designed it, programmed it, directed the art, tested it, wrote the store pages, published it, and built this website. I do that work myself.

Spaceblox is a calm color-logic puzzle for Android and the browser. It is not a match-3. You fill a grid with yellow, blue, and green tiles so that a handful of rules all hold at once. Later levels add purple tiles that hop, locks, and "=" and "×" links. I released it on Google Play on 1 September 2026. The press page lists the current public version as 1.1.0, dated 5 October 2026.

You can get it on [Google Play](https://play.google.com/store/apps/details?id=com.spaceblox.game) or play the [browser version](/spaceblox/play/). Both are free. The Play listing contains ads. A short overview of the campaign and the feature list lives on the [Spaceblox page](/spaceblox/). The rules, with examples, are in the [guide](/spaceblox/guide/).

## How I make it

The engine is Godot. The language I script it in is GDScript. The Android app and the browser build come from the same project. Features land in small steps, and I test a step before I keep it. I would rather remove something that does not work than stack another system on it. You can see that in the pacing. There is no energy meter, and a level never fails because a clock ran out. Time only decides an optional star. On some boards with purple tiles, that star is a limit on hops instead.

Campaign levels are checked before they ship. Automated logic tests cover puzzle validation and every campaign level, so a level that is in the game is a level that can be solved by the rules. I have not published how many levels that is, and I will not guess. The tutorial teaches one rule at a time on a small board, with a cell highlighted for you to try. If you need the rules again mid-level, How to Play opens the guide without ending the attempt. A mistake lights the involved cells in red while you still have Undo.

The browser build keeps progress in local storage on that device. From Android version 1.1.0, you can optionally sign in to Google Play Games and sync progress and achievements. I do not run my own save servers. In-progress levels are not uploaded with the cloud copy. You do not need an account to play.

## Accessibility and languages

Colorblind mode is optional. It adds patterns to the tiles and uses a palette adjusted for better separation, so the color rules do not depend on hue alone. Screen-reader labels cover the menus and the game screen. Those options are in the browser build. On Android they are in version 1.1.0, which lists TalkBack support alongside colorblind mode and cloud save. Achievements, with bronze, silver, and gold tiers plus hidden ones, followed the same split: browser first, Android in 1.1.0.

The game text is in seven languages: English, Spanish, German, French, Polish, Georgian, and Ukrainian. A wrong or awkward line is worth sending. Tell me the language, the screen, and the text you would use instead. The 1.2.0 notes, which are not yet what the live press page calls the current version, mention a pixel font with better accented letters and full Ukrainian support. Georgian keeps its own font.

## How the game is funded

Spaceblox is free to play. It is supported by advertising, and by players who leave a rating or tell someone else about it. The Android app uses Google AdMob. This website uses Google AdSense. I keep full-screen ads out of the middle of a puzzle. They appear between levels, and only after you have cleared several levels. If you want three extra hints, you can choose to watch an ad. You never have to. Where the law requires it, Google's certified consent tool asks before analytics or advertising cookies are used on the site. The [privacy policy](/spaceblox/privacy-policy.html) is the full description of what stays on your device and what Google processes. You can change cookie choices from the consent tool. Most game data is deleted by clearing app storage, using Reset profile in Options, or clearing this site's data in your browser.

## Other work, and how to reach me

Besides the game, I build websites. This site is one of them: the guide, the devlog, the press kit, and the privacy policy are part of shipping Spaceblox, not a separate product.

If you have a bug, a puzzle idea, a translation fix, a privacy request, or a press question, use the [contact page](/spaceblox/contact/). The email is giga.sichinava@gmail.com. I read every message and reply as soon as I can. I cannot promise a fixed response time. Bug reports are most useful when they say whether you were on Android or in the browser, and what the level did instead of what you expected.

For a logo, an icon, or screenshots, the [press kit](/spaceblox/press/) has a ZIP. You are welcome to use those files, and to stream the game, without asking first. If you want a review copy, name the outlet or the channel in the email.
