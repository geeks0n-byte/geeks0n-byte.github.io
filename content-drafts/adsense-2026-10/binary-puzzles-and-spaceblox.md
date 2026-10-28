---
title: "Binary puzzles, and how Spaceblox twists them"
description: "A beginner's guide to takuzu-style binary puzzles, and the color, green, purple, and link rules that make Spaceblox different."
path: /spaceblox/devlog/binary-puzzles-and-spaceblox/
---

# Binary puzzles, and how Spaceblox twists them

A binary puzzle, often called takuzu or binairo, asks you to fill a grid with two symbols. Spaceblox starts from that idea and then changes it. I am Giga, the person who makes Spaceblox. This page teaches the classic deductions first, on tiny lines I drew for the lesson, and then shows the places where my game does not follow the classic grid. Nothing below is a campaign level.

You can play the result on [Google Play](https://play.google.com/store/apps/details?id=com.spaceblox.game) or in the [browser version](/spaceblox/play/). The in-game tutorial teaches the Spaceblox rules one at a time. This article is the longer "why does this feel familiar?" version.

## Two symbols, two rules

Classic takuzu uses 0 and 1. Some books use black and white. The names do not matter. What matters is that there are two of them, and that every row and every column has to satisfy the same pair of rules.

The first rule is about neighbours. You may not have three identical symbols in a row, horizontally or vertically. Two is allowed. Three touching copies is not. A diagonal does not count. People sometimes say "no more than two the same, side by side." That sentence and "no three in a row" are the same rule.

The second rule is about counts. A finished row must contain the same number of 0s and 1s. A finished column must do the same. Two of each on a four-cell line. Three of each on a six-cell line. Because the two counts match, their sum is even, so a classic line has an even length. A 5×5 takuzu grid, under this count rule alone, does not have a way to fill a row with only 0 and 1.

A third classic rule is uniqueness. No two rows may be identical, and no two columns may be identical. I mention it because you will meet it if you look up takuzu in a puzzle book. **Spaceblox does not publish that rule.** I am not asking you to compare whole rows for duplicates when you play my game. If two Spaceblox rows come out the same and every color rule holds, the duplicate is not, by itself, a reason the board is wrong.

## A four-cell line, solved without a guess

Start with two 1s touching, and two empty cells:

```
1 1 . .
```

The third cell cannot be 1, because `1 1 1` is three in a row. So:

```
1 1 0 .
```

Now count. The line needs two 1s and two 0s. There is already a second 1 waiting in the first two cells, so a third 1 is one too many even before you look at neighbours. The last cell has to be 0:

```
1 1 0 0
```

Check both rules. The pairs are length two, which is allowed. The counts are two and two. That is the whole deduction. You did not try a color and delete it. The empty cells were forced.

The mirror image is the same lesson:

```
0 0 . .     becomes     0 0 1 1
```

A sandwich is the neighbour rule from the other direction:

```
1 . 1     becomes     1 0 1
```

`1 1 1` is illegal, so the gap is 0. On a longer line you still have to finish the counts. The sandwich only tells you the middle.

## Where beginners usually guess, and why they do not need to

The tempting moment is a line that is half full and looks open:

```
1 0 . .
```

Nothing is three in a row yet. The counts are one and zero, on a line that needs two and two. Several endings still look possible, until you use both rules on the whole line rather than on one cell.

`1 0 1 1` has three 1s. The count fails, and the last two 1s are only a pair, so the count is the rule that caught it. `1 0 0 0` has three 0s in a row and the wrong count. `1 0 1 0` has two of each and no triple. `1 0 0 1` also has two of each and no triple. So this particular line is not fully forced. That is useful to notice. A binary puzzle is not "every gap has one answer the moment you see it." Some gaps wait until a column, or another clue, removes one of the legal endings.

Givens do that removing. A printed 1 or 0 is a fact you may not flip. Spaceblox uses the same idea. A tile with a lock icon is fixed. You build out from it. You do not spend a move "testing" the lock, because the game will not let you clear it.

If you want a method that works in both games, use this order. First mark every cell that would make three in a row. Then count the line, and if one symbol has already reached half the cells, fill the rest with the other symbol, and check that the fill did not create a triple. Then move to the crossing line, because the cell you just wrote belongs to a column too. Repeat. Guessing is what you do when that loop finds nothing, and on a campaign board in Spaceblox the loop is supposed to find something. The campaign levels are designed to be solved by reasoning, and the game turns the broken cells red as soon as a placement fails.

## The same two rules, with yellow and blue

Spaceblox uses yellow and blue where takuzu uses 1 and 0. I call the neighbour rule the **Rule of Two**. Two yellows may touch. A third may not. The same goes for blue. I call the count rule **Equal Balance**. A finished row, and a finished column, must contain the same number of yellow tiles and blue tiles.

Here is the four-cell line again, in my colors:

```
Y Y . .     becomes     Y Y B B
```

And the sandwich:

```
Y . Y     becomes     Y B Y
```

```
B . B     becomes     B Y B
```

On a six-cell line with only yellow and blue, half is three. Three yellows already placed means the empty cells are blue, provided those blues do not form a triple of their own:

```
Y B Y B Y .     becomes     Y B Y B Y B
```

Three of each, no three touching. If the line had been `Y Y Y . . .`, it would already be illegal before you filled it. The Rule of Two does not wait for the count.

Early Spaceblox levels live in this two-color world. If you have played takuzu, those levels will feel like a board you already know how to start. Pairs first, then sandwiches, then the halfway count. I even recommend that order in the tips.

## The twist that classic grids do not have: green

Equal Balance is an even-number rule. Yellows plus blues is always even, because the two sides match. A line of five cells cannot be filled with only yellow and blue. Classic takuzu simply does not ask you to fill odd lines. Spaceblox does. **Green** is the tile that makes those lines possible.

Green does not behave like a third ordinary color, and it does not behave like a 0 or a 1.

For the Rule of Two, green counts as **both** yellow and blue. `Y Y G` is three yellows. `B G B` is three blues. `Y G Y` is three yellows even with the green in the middle. In takuzu there is no symbol that counts as both digits at once. That is the first twist, and it is why a green beside a pair is a mistake rather than a clever save.

For Equal Balance, green counts as **neither**. It fills a cell and adds zero to both counts. A five-cell line with one green has four cells left, and four cells can be two yellow and two blue:

```
Y B G Y B
```

Count the triples before you trust it. `Y B G` is two yellows (the Y and the green) and two blues (the B and the green). `B G Y` and `G Y B` come out the same way. The balance ignores G, so the line is two and two. Legal.

This one is the trap:

```
Y G Y B B
```

The balance would have been two and two, and `Y G Y` is still three yellows. In a classic binary line you never have to ask "does this symbol count as both of the others?" In Spaceblox that question is the green question, and you ask it every time.

There is a third green rule, the **Rule of One**. A row may hold at most one green. A column may hold at most one green. A classic grid has no "at most one wild symbol" rule, because it has no wild symbol. In Spaceblox, placing the green spends it for the whole row and the whole column. The interesting question on an odd board is often not "what color is this cell?" but "which single cell is the green?"

On a three-cell line the position is freer than people expect, and the colors around it are not. One green, one yellow, and one blue is legal in any order:

```
Y G B
Y B G
G Y B
B G Y
```

Each of those triples is two yellows and two blues once green is counted twice, and one of each once green is ignored. Two yellows plus a green fails in every position: `Y Y G`, `Y G Y`, and `G Y Y`. So on a 3-line, find the green, then make the other two cells different from each other.

## Purple, links, and locks

Three more Spaceblox ideas have no takuzu equivalent.

**Purple** tiles hop. A purple tile sits on one of two linked cells. You tap it and it slides along its arrow. If another purple tile is already on the destination, the hop is blocked. Like green, purple fills a cell and does not count toward Equal Balance. Unlike green, the rules do not say that purple counts as yellow and blue for the Rule of Two. `Y P B` can balance a three-cell line (one yellow, one blue, purple ignored) without being a green. A hop also changes which cell is empty, so the "fill every cell" goal and the purple's position are the same problem. Some stars limit how many hops you may use. Extra hops do not fail the level. They only leave that star empty.

**Links** are marks between cells. "=" means the two cells are the same color. "×" means they are different colors. On a yellow-and-blue board, an "×" is a copy of the opposite symbol, which is a very fast takuzu-style deduction:

```
Y = . × .     becomes     Y = Y × B
```

A hint in Spaceblox reveals one of these links. It does not drop a finished color into a cell the way a pencil mark in a newspaper takuzu might fill a digit. You still have to read the link. [CONFIRM] An older press-kit line said green counts as a match either way on a link, and that purple only matches purple. The live rules do not say that. I am not teaching it as a takuzu variant until it is confirmed.

**Locks** are the givens. They play the role of the printed 0s and 1s. The rest of the board is what you place, cycling Yellow, then Blue, then Green. You do not cycle a cell into purple. Purple is already on the board, waiting to hop.

## What I kept from the calm side of paper puzzles

A newspaper takuzu does not kick you out for thinking. Spaceblox is built the same way, with a few extra tools the paper grid does not have. There is no energy meter and no game-over clock. Time, on a campaign level, only decides an optional star. Undo and Redo are unlimited there. A broken rule turns red on the cells involved, so the grid tells you which constraint you hit. You can reopen How to Play in the middle of a level.

The daily puzzle, on the Android app only, is closer to a scored paper contest: one shared board each day at 07:00 UTC, no hints, undo still allowed, and a score that falls by 10 points a second and by 50 points a hopper slide. That mode is not in the browser build. The browser shows it as **APP ONLY**. The campaign, which is the takuzu-like part of the game, is in both.

If you already like binary puzzles, start Spaceblox on the early campaign boards and use the pair, the sandwich, and the halfway count. When the first green shows up, stop treating the grid as two symbols. From that level on, one cell is allowed to be both, and neither, and only once per line.
