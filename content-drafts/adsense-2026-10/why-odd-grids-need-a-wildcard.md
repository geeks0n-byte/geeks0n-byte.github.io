---
title: "Why odd Spaceblox grids need a wildcard"
description: "Why an odd Spaceblox line cannot balance with only yellow and blue, and how green counts as both colors and as neither."
path: /spaceblox/devlog/why-odd-grids-need-a-wildcard/
---

# Why odd Spaceblox grids need a wildcard

Equal Balance is a small rule with a sharp edge. A finished row or column in Spaceblox must contain the same number of yellow tiles and blue tiles. Same number plus same number is always even. A line with an odd number of cells cannot be filled with only those two colors. I added green so those lines could exist. This page is the design, in the form of counts and text grids, not a story about a particular week of development. I do not have that kind of note written down, and I will not invent one.

I am Giga. Spaceblox is on [Google Play](https://play.google.com/store/apps/details?id=com.spaceblox.game) and in the [browser](/spaceblox/play/). The in-game guide calls the pieces of this rule by name: Equal Balance, the Rule of Two, and the Rule of One. The tips on the site also call green a wildcard that can block itself. That phrase is right, as long as you remember the wildcard is not free.

## The even sum, on a line you can see

Take a finished line and count only yellow and blue. Suppose the line has three yellows. Equal Balance says it also has three blues. Three plus three is six. Suppose it has one yellow. Then it has one blue. The yellow-and-blue cells occupy two places. There is no integer that makes the two sides equal and the total odd. One and one is two. Two and two is four. Three and three is six. Zero and zero is a line with no yellow and no blue at all.

So if a line has 3, 5, or 7 cells, and every cell is yellow or blue, the counts cannot match. Those three lengths are the odd lengths the rules mention. The same arithmetic applies to any odd length. A 9-cell line, which shows up as a daily-puzzle size in the 1.2.0 notes, has the same problem if it is only yellow and blue.

Here is a five-cell attempt that uses every trick available inside two colors. Alternating feels balanced, and it is not:

```
Y B Y B Y
```

Yellows: three. Blues: two. Illegal. The other alternating pattern is three blues and two yellows:

```
B Y B Y B
```

Also illegal. Two yellows at one end do not rescue the count:

```
Y Y B B Y
```

Still three and two. You can rearrange a five-cell line for as long as you like. Three plus two, or four plus one, or five plus zero, are the only integer splits of five, and none of them are equal pairs.

A six-cell line does not need help:

```
Y B Y B Y B
```

Three and three. A four-cell line does not need help either: `Y Y B B` is two and two, and it also obeys the Rule of Two, because the pairs stop at two. Odd lines are the ones that run out of room.

## What the extra cell is allowed to be

The extra cell has to occupy space and add nothing to either count. Spaceblox has two tiles that do that. Green is one. Purple is the other. Both "fill a cell without counting toward Equal Balance." After you set one of them aside, the cells that remain are even in number, and those cells can be split into equal yellow and blue.

A five-cell line with one ignored cell has four cells that count. Four cells can be two yellow and two blue. A three-cell line with one ignored cell has two cells that count: one yellow and one blue. A seven-cell line with one ignored cell has six: three and three.

Purple can be that ignored cell. `Y P B` is a legal three-cell balance: one yellow, one blue, purple left out of the tally. Purple has a second job. It hops between two linked cells, and another purple on the destination blocks the hop. The campaign teaches green before those hoppers. Green is a tile you place yourself: you cycle an empty cell Yellow, then Blue, then Green. You do not cycle a cell to purple.

One ignored cell is the smallest fix. A line can also balance with more than one ignored cell, as long as what remains is even and the two colors match. Two purples and one green on a five-cell line would leave two counting cells, which can be one yellow and one blue. The Rule of One still caps green at one per line. Purple is not under that cap. The clean case, and the one the early boards are about, is a single green doing the whole job.

## Why green could not be "just empty" for the neighbour rule

If green only stepped out of the count, and the Rule of Two ignored it, green would be a gap that happens to look filled. `Y Y G` would be two yellows and a blank. `Y G Y` would be two yellows with a hole between them. You could drop green beside any pair and call the triple broken up. The odd-line problem would be solved, and the neighbour rule would get weaker on every board that had a green.

The published rule does not treat green as a hole. For the **Rule of Two**, green counts as **both** yellow and blue. It is a yellow when you are asking "is this three yellows?" and a blue when you are asking "is this three blues?" These lines are broken:

```
Y Y G
G Y Y
Y G Y
B B G
B G B
```

`Y Y G` is three yellows because the green counts as yellow. `B G B` is three blues because the green counts as blue. `Y G Y` is three yellows with the wildcard in the middle, which is the case players miss, because the two yellows do not touch.

So green is a wildcard with a cost. It gives you the cell that Equal Balance is not allowed to see. It charges you a neighbour on both colors at once. The tips phrase this as a wildcard that can block itself. The blocking is the Rule of Two, not a separate hidden rule.

A legal five-cell line shows the cost and the payment together:

```
Y B G Y B
```

Balance: the green is invisible, so yellows are the first and the fourth cell, blues are the second and the fifth. Two and two.

Neighbours, one triple at a time:

- `Y B G`. Yellows: the Y and the green, so two. Blues: the B and the green, so two.
- `B G Y`. Blues: the B and the green. Yellows: the green and the Y. Two and two.
- `G Y B`. Same split.

Nothing reaches three. Compare it with a line that pays the count and refuses the neighbours:

```
Y G Y B B
```

Yellows in the whole line, ignoring the "both" rule and only using real yellow tiles: two. Blues: two. Equal Balance would pass. The first triple is `Y G Y`, which is three yellows. The line is illegal. When you place green, you check the count with green removed, and you check every touching triple with green added to both colors. Skipping either check is how a board turns red.

## Why only one green per line

If a line could hold several greens, the odd-length problem would collapse into a different puzzle. A five-cell line could be five greens, or three greens and one yellow and one blue, or any other mix that left an even remainder. The question "where does the single green go?" would disappear. A lot of the deduction on an odd board is that question.

The **Rule of One** says a row may contain at most one green, and a column may contain at most one green. One green spends the slot twice: once horizontally, once vertically. On a 3×3 with a green already in the center, the center row and the center column are closed:

```
. . .
. G .
. . .
```

The four corners are the only cells that could still be green, and each corner you spend will close a different row and column. You cannot solve an odd board by painting a green stripe.

This is also why two odd lines that cross have to share their plan. A five-cell row needs a non-counting cell. A five-cell column needs one too. If they both want a green, and they cross, either they share the green at the crossing, or each of them gets its own green in a cell the other line does not use. Shared green:

```
. . . . .
. . . . .
. . G . .
. . . . .
. . . . .
```

That single G can be the ignored cell for its row and for its column at the same time, which is the most efficient spend the Rule of One allows. If the row already used its green somewhere else, the column cannot use a second green in the crossing cell. The column then needs a green in another row, or a purple.

The constraint stays inside the same three sentences. Both for neighbours. Neither for the count. Once per line. You do not have to remember a fourth exception to place the tile.

## A three-cell line is the whole design in one triple

Three cells, one green, and the other two must be one yellow and one blue. Every arrangement of those three tiles is legal:

```
Y G B
Y B G
B G Y
B Y G
G Y B
G B Y
```

Take `G Y B`. As a triple it is the whole line. Yellows, counting green: G and Y, so two. Blues, counting green: G and B, so two. Not three. Balance, ignoring green: one yellow, one blue. One green. Done.

Every arrangement with two yellows and a green fails, in every position:

```
Y Y G
Y G Y
G Y Y
```

Same for two blues. So a 3-line does not ask you where green is allowed to sit relative to a pair. It asks you to make the other two cells different. The position of the green starts to matter once the line is long enough to contain more than one triple, which is the five-cell example above. `Y G Y B B` fails even though a different arrangement of the same tiles, `Y B G Y B`, passes. Same multiset of tiles. Different order. The wildcard is sensitive to neighbours, which is what keeps it from being a blank.

## What I ask you to do with this in a real level

On an odd line, before you cycle a string of yellows and blues, find the cell that will not count. If the line has no purple, that cell is the one green. Mark the row and the column as spent. Then fill the remaining even length with equal yellow and blue, and run the Rule of Two with green included in both colors.

On an even line, you may not need a green at all. A six-cell row can be three and three. Dropping a green into it anyway means the other five cells have to balance, which is impossible with one green, because five is odd. An even line that contains a green needs another ignored cell, or it cannot balance. That second ignored cell would be a purple, or you remove the green. This is the flip side of the odd-line rule, and it catches a green placed "just in case" on a line that was already even.

The red highlight is there for the moment the check fails. It marks the cells in the broken rule while the level is still open. Undo is unlimited on a campaign level, so you can take the green back. A hint will not place the green for you. It adds an "=" or "×" link, and you still choose the cell.

That is the whole design of the tile. Odd length needs a cell the count cannot see. Green is that cell, once per line, and it refuses to sit quietly next to a pair.
