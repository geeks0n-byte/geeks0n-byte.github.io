---
title: "Making Spaceblox solo in Godot"
description: "How Spaceblox is built by one person in Godot: one project for Android and the browser, tested levels, seven languages, and no save server."
path: /spaceblox/devlog/making-spaceblox-solo-in-godot/
---

# Making Spaceblox solo in Godot

Spaceblox is the first game I have released. I am Giga Sichinava. On Google Play the developer name is gix0n. I designed it, programmed it, and published it. The engine is Godot. The scripts are GDScript. The Android app and the browser build come from the same Godot project. This page is what that means in practice, using the facts I have actually published. Where I describe a step that any solo puzzle game has to take, I say so. I do not have a diary of late nights or of a particular bug, and I will not write a fake one.

You can play the game on [Google Play](https://play.google.com/store/apps/details?id=com.spaceblox.game) or in the [browser version](/spaceblox/play/). The [about page](/spaceblox/about/) is the short version of who made it. This is the longer one.

## One person, and the list of jobs

The approved about copy names the work as one person's: game design, programming, art direction, testing, the store pages, and this website. The live about page says the same thing in fewer words. I designed Spaceblox, programmed it, tested it, and built the site. I also build websites, apart from the games. There is no second department holding the rules while I hold the code. When a rule is hard to explain, the tutorial, the in-game guide, and the store text all have to change together, because they are all mine.

A generic solo process looks like this. You write a rule. You make one small board that uses only that rule. You play the board. If the rule cannot be taught on that board, you change the rule or you throw the board away. Spaceblox follows that shape in a concrete way. The tutorial introduces one rule at a time, on a small board, with a highlighted cell to practise on. Then it moves to the next rule. You can replay the tutorial from the main menu. During a level, How to Play opens the full guide, with valid and invalid examples, without making you quit.

I prefer small steps that are tested before they land. I would rather remove something that does not work than pile another system on top of it. That is a working rule I have stated for this project, not a slogan. You can see it in what the game refuses to have. There is no energy meter. There is no game-over countdown. A clock, when a level has one, only decides whether you earn the optional time star. On some purple boards that star is a hop limit instead. Missing it does not fail the level.

## The rules are the feature list

Before there is a campaign, there is a checker. A Spaceblox board is solved only when the published rules all hold. No three of the same color in a row or column. Equal yellow and blue on every finished line. Green counted as both colors for that three-in-a-row test, and as neither color for the balance test, with at most one green per line. Purple filling a cell without joining the yellow/blue count, and hopping only into a cell that is not already purple. Locks left alone. "=" pairs matching. "×" pairs differing.

A generic puzzle game turns that checker into levels by adding clues until only one solution remains, then asking a person to solve it with no extra information. I do the campaign half of that with automated logic tests. Those tests check puzzle validation and every campaign level. The point I have published is simple: a level that ships is a level that can be solved. I have not published a level count, so I will not guess how many boards those tests cover. I also have not named the test tool in any public page, so I will not name one here.

Practice mode, in the 1.2.0 notes, is a different promise. It is unlimited random puzzles, with hints allowed, in easy, medium, or hard. A closed-test note asked testers whether those random boards feel fair. I am not going to convert a test question into a claim that every random board has been through the same campaign check. The campaign is the set I have said is validated level by level.

## One project, two ways to play

The browser build is a Godot web export. The page is portrait, which matches a phone, and it also runs on a desktop browser. Progress for that build stays in the browser's own storage on that device. It is not sent to me. The export registers a service worker so that a published update can replace a stale game pack instead of leaving you on an old one. The offline page that ships with the export says the application needs an internet connection the first time it runs. I have not published a stronger offline promise than that sentence.

The Android app stores progress on the device: unlocked levels, stars, best times, achievements, settings, and an in-progress level if you have one. Settings include language, sound, background, and colorblind mode. From version 1.1.0 you can optionally sign in to Google Play Games. Google then keeps a cloud copy of progress, settings, and achievements. In-progress levels are not part of that upload. I do not run a save server. Signing in is never required to play. The browser build does not have this cloud save. Your browser progress does not move to the phone by itself.

That split is the sort of thing a single project makes you decide on purpose. A generic port might share rules and differ in accounts. Here the rules, the tutorial, and the campaign are shared. Cloud save, and later the daily puzzle, are not. Version 1.2.0's notes put Daily, Practice, and leaderboards in the mobile app only. On the web they show as **APP ONLY**, with a short note. I do not have the text of that note in the patch writeup, so I will not invent the reason it gives. The practical result is the one I can stand behind: if you want the daily board, you want [Google Play](https://play.google.com/store/apps/details?id=com.spaceblox.game). If you want to try a campaign level in the [browser](/spaceblox/play/), you can do that without installing anything.

## Teaching, hints, and the decision to keep mistakes cheap

A logic puzzle feels worse when one wrong cell costs the whole attempt. The tools in Spaceblox are there to make the cost small, and each one is specific. A broken rule highlights the cells involved, in red, immediately. Undo and Redo step backward and forward, and on a campaign level they are not limited. Press and hold clears one tile. In the browser you hold for about a second. Restart restores the starting layout, including locks. The in-progress board is saved if you close the game.

Hints were a design choice with a published reason. A hint that fills a cell solves the puzzle and teaches nothing. A Spaceblox hint reveals an "=" or "×" between two cells. You still place the color. Each campaign level includes a small number of hints, more when the level is harder. An optional ad can add three more. Because a star requires a clear with no hints, using one is a decision, not a failure state. The daily puzzle, in the 1.2.0 notes, turns hints off entirely. Practice leaves them on. I can describe that difference. I cannot tell you a playtest quote about it, because I have not published one.

## Languages, fonts, and the store text

The game is in seven languages: English, Spanish, German, French, Polish, Georgian, and Ukrainian. A generic translation pass on a puzzle game is mostly short strings: button labels, rule names, a star description, a settings row. Those strings have to stay readable on a phone. I have not published a list of which strings were too long. What I have published, in the 1.2.0 notes, is the font work that came out of supporting those languages. There is a new pixel font with better accented letters and full Ukrainian support. Georgian keeps its own font. The notes also mention a new credits and licenses screen, which is where engine and font credits belong. I am not reproducing those licenses here.

The store page and this website are part of the same solo job. The press kit has the factsheet, the short and long descriptions, the logo, the icon, screenshots, key art, and a gameplay GIF. You may use those assets for coverage of Spaceblox without asking first. If you need a review copy, or you want to name a channel, the contact email is giga.sichinava@gmail.com. Messages in English are the ones I can answer most easily. I read every message. I cannot promise a clock time for the reply.

## Money, ads, and what I left off the board

Spaceblox is free. The Android app shows ads through AdMob. This site shows ads through AdSense. Full-screen ads wait until you have cleared several levels, and then they run between levels. They do not run in the middle of a puzzle. The ad that grants extra hints runs only if you ask for it. Where consent is required, the site uses Google's certified consent tool before analytics or advertising cookies. The privacy policy's effective date is 1 September 2026, the Play release date. From Android 1.1.0 the app also uses Firebase Analytics and Firebase Crashlytics. Earlier app versions do not. I use the crash reports to fix bugs. That sentence is the published purpose, and it is as specific as the policy gets.

Version 1.1.0, dated 5 October 2026 on the live site, is also when Android gained achievements, cloud save, colorblind mode, and TalkBack support. The browser build already had achievements, the colorblind patterns, and the screen-reader labels. I mention the order because "solo in Godot" can sound like every feature appears on every platform on the same day. It did not. One project still ships two builds, and I have turned features on per build.

## What this page is not

It is not a Godot tutorial. I have not published a project template, a scene tree, or a script you can copy. It is not a schedule. I have not said how long any version took. It is not a second game. I am not describing unreleased work here. The public game is Spaceblox, first released on Google Play on 1 September 2026, current public version 1.1.0 as the press page states it, with 1.2.0 written up in patch notes that the live press page has not yet adopted as the current version.

[CONFIRM] Those 1.2.0 notes also say the level editor was redesigned. They do not say whether that editor is something players open. Until that is confirmed, "I build the levels" is the accurate description, and a public editor is not.

If you want the rules instead of the toolchain, the guide on the site walks through them with examples. If you want to tell me that a step in this process produced a wrong level, or a bad translation, use the [contact page](/spaceblox/contact/). A bug report I can use includes the platform, the device or browser, the level, and what you expected to happen.
