---
title: "How to play Spaceblox"
description: "Every Spaceblox rule, with small text grids: Rule of Two, Equal Balance, green, purple hoppers, locks, and = and × links."
path: /spaceblox/how-to-play/
---

# How to play Spaceblox

Spaceblox gives you a grid and asks you to fill every empty cell. Yellow, blue, green, and purple do not behave the same way, so the color you pick is a logic step, not a decoration. This page states every rule I have published, then shows a small text grid for each one. The grids are teaching examples. They are not campaign levels.

Get the game on [Google Play](https://play.google.com/store/apps/details?id=com.spaceblox.game), or open the [browser version](/spaceblox/play/) and keep this page beside it. The first time you press Play, a tutorial introduces one rule at a time on a small board. You can replay that tutorial from the main menu. During any level, How to Play opens the in-game guide with valid and invalid examples.

In the grids below, **Y** is yellow, **B** is blue, **G** is green, **P** is purple, and **.** is empty. A locked tile is written with an asterisk, as in `Y*`.

## Place, clear, undo

On a phone, tap an empty cell to cycle Yellow, then Blue, then Green. Press and hold a filled cell to clear it. Tap a purple tile to slide it. In the browser, click a cell to cycle the same three colors, click and hold a filled cell for about a second to clear it, and click a purple tile to slide it. The top bar has Pause, Restart, How to Play, Hint, Undo, and Redo.

Undo and Redo are unlimited on a campaign level. Restart returns the board to its starting layout, including every locked clue. The level you are in the middle of is saved, so leaving the game does not wipe the board.

A level ends when every cell is filled and no rule is broken. You then see how many of the three optional stars you earned. Running out of time does not fail the level. I will come back to stars after the rules, because the rules are what make a board valid.

## Rule of Two

You may never have three tiles of the same color next to each other in a row or a column. Two of a color are allowed. A third, touching them, is not. The rule applies along the line. A diagonal does not count.

Two yellows with room on the right:

```
Y Y .
```

The empty cell cannot be yellow. Yellow, then blue, is fine:

```
Y Y B
```

Yellow three times is broken, and the game highlights those cells in red:

```
Y Y Y
```

The same pattern works for blue. `B B .` cannot take another blue in the empty cell. `B B Y` is allowed. `B B B` is not.

The useful form of this rule is the pair. When two yellows already touch, both neighbours of that pair are forbidden from being yellow. On a line that only uses yellow and blue, those neighbours are blue:

```
. Y Y .     becomes     B Y Y B
```

Green is not a way around the pair. Green counts as yellow for this rule, so `G Y Y` is three yellows as well. I cover green in its own section, because it also counts as blue.

A sandwich is the same rule seen from the other side. Yellow, empty, yellow cannot close as three yellows:

```
Y . Y     becomes     Y B Y
```

`Y G Y` is also three yellows, because the green counts as yellow. So the gap in `Y . Y` is blue, not green. Blue works the same way: `B . B` becomes `B Y B`.

## Equal Balance

When a row or a column is complete, it must contain the same number of yellow tiles and blue tiles. The rule is checked on the finished line. While the line still has empty cells, you use it by counting what is left.

On a six-cell line with no green and no purple, equal means three yellow and three blue. If three yellows are already down, every remaining cell in that line is blue, and those blues still have to obey the Rule of Two:

```
Y B Y B Y .     the last cell is B     Y B Y B Y B
```

That line has three of each, and no three in a row. This one does not balance, even though the colors alternate at the start:

```
Y B Y B Y Y
```

Four yellows and two blues. It is not a finished line.

A four-cell line needs two and two. If it already starts `Y Y`, the Rule of Two has also spoken:

```
Y Y . .     becomes     Y Y B B
```

`Y Y Y B` breaks the Rule of Two. `Y Y B Y` has three yellows and one blue, so it breaks Equal Balance. `Y Y B B` is the line that satisfies both.

Rows and columns use the same two rules. A cell you write to finish a row is also a cell in a column, so a color that saves the row can break the column. When that happens, the red highlight shows the cells in the line that failed.

## Green counts as both, and as neither

Green is the tile that makes odd-length lines possible, and it is also the tile that most often paints a line red.

For the **Rule of Two**, green counts as both yellow and blue. These are all three in a row:

```
Y Y G
G Y Y
Y G Y
B B G
B G B
```

`Y Y G` is three yellows because the green counts as yellow. `B G B` is three blues because the green counts as blue. `Y G Y` is three yellows even though the two yellows are not touching each other.

For **Equal Balance**, green counts as neither. It fills a cell and adds nothing to the yellow count or the blue count. A five-cell line cannot be split into equal yellow and blue if every cell counts, because five is odd. One green leaves four cells, and four cells can be two yellow and two blue:

```
Y B G Y B
```

Check the triples. `Y B G` is two yellows (Y and G) and two blues (B and G). `B G Y` is the same kind of pair. `G Y B` is two yellows and two blues. The balance count ignores G, so the line is two yellow and two blue. One green. Nothing red.

This looks balanced and is not legal, because of the first triple:

```
Y G Y B B
```

`Y G Y` is three yellows. The yellow/blue count would have been two and two, and the line is still broken.

Green is easiest to place beside mixed neighbours, where it is not asked to be the third yellow or the third blue. `Y B G Y` keeps every triple at two of each:

```
Y B G Y
```

**Rule of One:** a row or a column may contain at most one green tile. Two greens in the same line are illegal before you think about anything else:

```
G Y B Y G     illegal, two greens in one line
```

A single green spends the green slot for its whole row and its whole column. If the middle of a 3×3 already holds the green, no other cell in that row or that column can be green:

```
. . .
. G .
. . .
```

The center row and the center column are closed for a second green. The four corners are still open, until some other rule closes them.

Odd lengths that show up in the rules are 3, 5, and 7. The same arithmetic covers each of them. Yellow plus blue must be an even total, so at least one cell in an odd line has to be a tile that Equal Balance ignores. Green is one such tile. Purple is the other.

## Purple hoppers

A purple tile sits on one of two linked cells, with an arrow toward the other. Tap it and it slides along the arrow. The cell it leaves becomes empty.

Before the hop:

```
P→   .
```

After the hop:

```
.    P
```

If the destination already holds a purple tile, the hop does not happen. Move the blocker first. Two purples can want the same cell, and only one of them can sit there.

Like green, purple fills a cell and does not count toward Equal Balance. A three-cell line can balance with a purple in it:

```
Y P B
```

The count is one yellow and one blue. The purple is the extra cell that lets the odd length work.

The published rules do not say that purple counts as yellow or blue for the Rule of Two. That "counts as both" sentence is only about green. So purple is not a second copy of green. `Y Y P` is not the green pattern `Y Y G`. Read purple as its own tile: it occupies a cell, it hops, and it stays out of the yellow/blue tally.

Some levels replace the time star with a hop limit. The star then asks you to solve the board with no more than a set number of purple hops. Extra hops do not fail the level. They only leave that star empty. Planning where each hopper should rest, before you fill the cells around it, matters on those boards, because a hop also changes which cell is empty.

## Locks

A lock icon means the tile is fixed. You cannot cycle it and you cannot clear it. Locked tiles are the clues the level starts with.

```
Y*  .  .  B*
```

The yellow on the left and the blue on the right are facts. On a four-cell line that needs two yellow and two blue, one yellow and one blue are still missing, and the Rule of Two still applies to whatever you write between the locks. Treat every lock as a cell you are not allowed to "try and undo" away. Undo will not remove it, because it was never your placement.

## = and × links

An **=** between two cells means those cells must be the same color. An **×** means they must be different colors.

If one side of an equals link is a known yellow, the other side is yellow:

```
Y = .
```

becomes `Y = Y`.

If one side of a difference link is yellow, the other side is not yellow. On a yellow-and-blue board, it is blue:

```
Y × .
```

becomes `Y × B`.

Links chain. Read them from the cell you know.

```
Y = . × .
```

The first empty matches the yellow, so it is yellow. The second empty differs from that yellow. On a two-color board it is blue:

```
Y = Y × B
```

The other direction works too:

```
B × . = .     becomes     B × Y = Y
```

A hint uses these same marks. When you ask for a hint, the game reveals a helpful "=" or "×" on the board instead of filling a cell. You still place the color. Each campaign level includes a small number of hints, more on harder levels. An optional ad can add three more. The daily puzzle, which is mobile-only, does not allow hints at all.

[CONFIRM] An older press-kit paragraph said that on a link, green counts as a match either way, and purple only matches purple. The live guide and the live press page do not say that. They only say "=" is the same color and "×" is a different color. I have not used the older sentence in the examples above. Until it is confirmed, play "=" and "×" as same color and different color, and let the red highlight show you if a green or a purple on that link is rejected.

## What "solved" means

The board is solved when three things are true at once. Every cell that belongs to the puzzle is filled. No row or column has three of the same color in a row, counting green as both yellow and blue. Every completed row and column has an equal number of yellow and blue, ignoring green and ignoring purple, with at most one green in each of those lines. Locks are unchanged. Every "=" pair matches. Every "×" pair differs. Purple hoppers are resting on one of their two cells, not left in an illegal overlap.

You do not lose by being slow, and you do not lose by being wrong once. Red means a current placement breaks a rule. Undo, or hold-to-clear, removes the tile you want to reconsider. The how-to-play button stays available in the top bar for the rest of the level.
