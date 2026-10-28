---
title: "Designing accessible color puzzles"
description: "How Spaceblox handles a color-logic puzzle: optional tile patterns, a separated palette, screen-reader labels, TalkBack, and seven languages."
path: /spaceblox/devlog/designing-accessible-color-puzzles/
---

# Designing accessible color puzzles

Spaceblox is a puzzle whose rules are colors. Yellow and blue have to stay balanced. Three of a color in a row is illegal. Green counts as both of those colors when you check the row, and as neither when you check the count. If the only way to know a tile's identity is the hue, then a player who cannot separate those hues cannot play the rules. I am Giga, and I built Spaceblox. This page is what I have actually shipped for that problem, and what I have not claimed.

The game is on [Google Play](https://play.google.com/store/apps/details?id=com.spaceblox.game) and in the [browser version](/spaceblox/play/). Colorblind mode and the screen-reader labels are in the browser build. On Android they arrived in version 1.1.0, which the home page dates to 5 October 2026. The Android line for the screen reader says TalkBack support.

## Why color is load-bearing here

In a lot of games, color is a coat of paint on a shape you could still read. A red door and a blue door can also be a square door and a round door. In Spaceblox the color is the move. Placing yellow next to two yellows breaks the Rule of Two. Placing one more yellow than blue on a finished line breaks Equal Balance. Swapping a yellow and a blue can fix one line and break the column it crosses.

A general rule for this kind of puzzle is easy to say and easy to skip. Do not make color the only channel. Give the same fact a second form: a pattern, a symbol, a letter, a spoken label. I am stating that as the general rule. The rest of this page is the narrower list of what Spaceblox does.

The tiles you cycle are yellow, then blue, then green. Purple is already on the board and hops. A lock is an icon on a fixed tile. An "=" between two cells means they are the same color. An "×" means they are different. Those marks are symbols, which helps, and they do not replace the need to tell yellow from blue from green. You can know that two linked cells must match and still be unable to see which color the known cell is.

## What colorblind mode changes

Colorblind mode is optional. It is a setting, stored with language, sound, and the choice of a dynamic or static background. Turned on, it adds patterns to the tiles, and it uses a palette adjusted for better separation. The live FAQ states the goal in one sentence: the patterns are there so no rule depends on telling colors apart. An earlier devlog sentence says the same thing from the other side. The color rules should not rely on color alone. The patterns let you tell tiles apart by shape as well as by color.

I have not published the pattern shapes on the site. I will not describe them here from memory, because a wrong stripe or a wrong dot would be a fact I invented. When you turn the mode on, the tiles themselves are the description. What I can say without the artwork is what the mode is for. Yellow, blue, green, and purple need to stay distinct after the palette shift, and the pattern has to survive on a small phone tile, because the browser build is laid out in portrait and the Android game is a phone game.

The mode is optional on purpose. The default board can stay the plain soft-pixel tiles. Players who want the patterns turn them on. I am not claiming that the default palette is unusable, and I am not claiming that the adjusted palette covers every kind of color vision by name. The published phrase is "better separation." It does not list protanopia, deuteranopia, tritanopia, or any other condition. Those names belong in a general discussion of color vision. They are not a spec I have attached to this palette.

## The red highlight is still a color

When a placement breaks a rule, Spaceblox highlights the affected cells in red. That is immediate, and it is useful, and it is another color channel. I have not published a non-color substitute for the red itself. I should not pretend the highlight solves the access problem. A player who cannot pick the red out of the board does not get a second, documented signal that says "these three cells."

What the red is documented to do is name a place. It is not a loose glow over the whole grid. It sits on the cells involved in the broken rule. If you can see it, you can ask which rule those cells violate: three in a row, with green counted as both; a finished line whose yellows and blues differ, with green and purple ignored; two greens in one line; an "=" pair that does not match; an "×" pair that does. Undo is unlimited on a campaign level, so the highlight is something you can answer and then remove. That is a useful loop for players who can see the red. It is not, by itself, the accessibility feature. The patterns are.

Here is the same deduction written with letters, which is the point of a second channel. `Y Y .` cannot take another Y in the gap, and it cannot take G either, because green counts as yellow. The neighbour is B: `Y Y B`. A player who has patterns turned on is matching pattern to pattern, then applying that same neighbour rule. The letter grid is how this page shows the rule. In the game, the pattern on the tile is what stands in for the letter. Colorblind mode has been in the browser build from early on, and on Android since 1.1.0. v1.0 on Google Play, 1 September 2026, is the campaign. The Android colorblind option is part of the 5 October 2026 update, not part of that first upload.

## Screen-reader labels

Screen-reader labels cover the menus and the game screen. On Android 1.1.0 the what's-new line calls this TalkBack support. TalkBack is the screen reader that ships with Android. The labels were already in the browser version before that update. The home page's footnote says the 1.1.0 items are on Android now, and in the browser where they had already shipped. Cloud save is the one item in that update that the browser does not have. The labels are not in that exception.

I have not published the wording of the labels. I will not guess the phrase a screen reader speaks for a yellow tile, a locked tile, or a hopper. "Menus and the game screen" is the scope I have written down. Menus include the places you start a level, change settings, and read How to Play. The game screen is the board you play on. If a control outside those two phrases is unlabeled, I have not documented it, and I would rather hear about it than imply it is covered.

A general screen-reader pass on a puzzle has to answer questions the mouse already answers by looking. Which cell is selected? What color is in it? Is it locked? Which rule is currently broken? Is this control Undo, Hint, or Restart? Spaceblox documents labels on the menus and the game screen, and documents a top bar with Pause, Restart, How to Play, Hint, Undo, and Redo. I am not drawing a line from those button names to a specific spoken string. The honest next step, if you use a screen reader and a label is missing or wrong, is the contact email at the bottom of this page. Tell me the screen and what you heard.

## Language is a separate door

Accessibility is not only color. Spaceblox is translated into English, Spanish, German, French, Polish, Georgian, and Ukrainian. A player who can see every tile and cannot read the language of the menus is blocked at How to Play, at the settings, and at the star text. The seven languages are the published answer to that.

A generic puzzle interface makes translation harder than a paragraph of prose does, because the strings are short. A button that says "Hint" in English has to stay a button in the other six languages. I have not published a case of a string overflowing. What I have published is the list itself, and that language is a setting next to sound, background, and colorblind mode. Georgian and Ukrainian are on that list with English, Spanish, German, French, and Polish. A correction needs the language, the screen, and the replacement text, because I cannot guess which string you mean from "the rules screen" alone.

If a translation is wrong, I want the correction in a form I can apply. The language, the screen, and the corrected text. That request lives on the contact page because a bad string is a bug in the interface, including for the players who rely on it.

## What I kept optional, and what stays on for everyone

Colorblind mode is optional. The screen-reader labels are part of the build, not a mode you have to discover before the menus can be read. I have described them as labels across menus and the game screen, present in the browser and, from 1.1.0, on Android with TalkBack named in the release line.

Some supports are not behind a setting, because they are rules of the game rather than display options. Locks use an icon. Hoppers use an arrow. Links use "=" and "×". You can replay the tutorial from the main menu, and you can open How to Play mid-level, so the rule text is not a one-time screen you have to memorize. Hints add a link instead of filling a cell, which means a hint is another symbol on the board, not a color dropped in for you. None of those is a substitute for the pattern mode. They are extra channels the rules already had, and they remain useful when the patterns are on.

The calm pacing is not a labelled accessibility feature, and I will not file it as one. It is still part of how the game treats a player who needs more time. There is no energy meter. A campaign clock does not end the level. Missing the time star, or the hop star, leaves the star empty and leaves the puzzle open. Undo does not run out on a campaign level. Someone who is tracing patterns cell by cell can take the time the tracing needs. That is true on v1.0 and on 1.1.0. The clock never became a fail state.

## What I am not claiming

I have not published a WCAG level, a contrast ratio, or an audit. I have not said the patterns work for every reader. I have not said the red highlight is available to a screen reader. I have not described the pattern art. Those would be precise claims, and they are not in the sources.

What I have shipped, and what you can turn on or rely on today, is this. An optional colorblind mode with patterns and a palette adjusted for better separation, in the browser and on Android since 1.1.0. Screen-reader labels for menus and the game screen, with TalkBack named for the Android update. Seven languages: English, Spanish, German, French, Polish, Georgian, and Ukrainian. The current public version is 1.1.0. If one of those does not work on your device, write to me. The address is [giga.sichinava@gmail.com](mailto:giga.sichinava@gmail.com). Tell me Android or browser, the version if you know it, the screen, and what you expected to be able to tell apart or to hear.
