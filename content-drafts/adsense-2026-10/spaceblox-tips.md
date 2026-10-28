---
title: "Spaceblox solving tips"
description: "Twelve Spaceblox solving strategies, each with a small text grid: pairs, sandwiches, counts, green, links, hoppers, and hints."
path: /spaceblox/tips/
---

# Spaceblox solving tips

These are deductions from the published rules, worked on small text grids. None of the grids is a campaign level. I am showing the pattern so you can see it on a real board. **Y** is yellow, **B** is blue, **G** is green, **P** is purple, and **.** is empty.

If you want the rules stated once, in order, read the how-to-play page first. Then come back. The game itself marks a broken rule in red as soon as you make it, and Undo is unlimited on a campaign level, so a wrong try is cheap. The point of the list is to need fewer of those tries.

Get Spaceblox on [Google Play](https://play.google.com/store/apps/details?id=com.spaceblox.game) or open the [browser version](/spaceblox/play/). Solving a campaign level without a hint earns a star, so I have put the hint advice last.

## 1. Hunt for pairs first

Two of the same color, touching, forbid that color on both sides of the pair. On a yellow-and-blue line, the neighbours are the other color.

```
. Y Y .     becomes     B Y Y B
```

```
. B B .     becomes     Y B B Y
```

Do this before you count the whole line. A pair is local, so you can mark it even when the rest of the row is still a mess. Then look at the columns those new tiles sit in. A forced blue in the row is often a pair, or a sandwich, in the column.

Green cannot be the neighbour of a same-color pair either. `G Y Y` counts as three yellows, and `G B B` counts as three blues. If the cell beside a yellow pair is still empty, it is not a home for green.

## 2. Fill the gap in a sandwich

Yellow, empty, yellow cannot be closed with yellow, and it cannot be closed with green. Green would still count as yellow.

```
Y . Y     becomes     Y B Y
```

```
B . B     becomes     B Y B
```

The same shape works in a column. When you see the sandwich, fill it before you look at longer counts. Three in a row is broken whether the middle tile is the one you place last or the one you place first.

## 3. Count to the halfway point

Equal Balance on a finished line means the same number of yellow and blue. Green and purple do not add to either count.

A six-cell line with no green and no purple needs three yellow and three blue. The moment one color reaches three, every remaining empty cell in that line is the other color.

```
Y B Y B Y .     last cell is B
```

A four-cell line needs two and two. Combined with a pair, the rest of the line is often forced:

```
Y Y . .     becomes     Y Y B B
```

`Y Y B Y` would be three yellows and one blue, so it fails the count. `Y Y Y B` fails the Rule of Two. `Y Y B B` is the one that passes both.

If the three yellows you already have are not side by side, the remaining cells are still all blue, and you then check that those blues do not form their own triple. The count and the Rule of Two have to be true together. Neither one excuses the other.

## 4. An odd line needs a tile that does not count

Yellow and blue have to match, so together they fill an even number of cells. A line of 3, 5, or 7 cells cannot be only yellow and blue. Somewhere in it there is a green or a purple.

On a five-cell line with no purple, the green has a job even before you know its column:

```
. . . . .     one of these five cells is G, and the other four are two Y and two B
```

A finished example:

```
Y B G Y B
```

Two yellow, two blue, one green, and no triple. If you have already placed two greens in that line, one of them is wrong. The Rule of One allows a single green per line.

## 5. Spend the one green on the row and the column together

One green closes the green slot in its row and in its column at the same time. When a green is already on the board, cross out green for the rest of that row and the rest of that column before you try colors.

```
. . .
. G .
. . .
```

The middle row cannot take another green. The middle column cannot take another green. Any later odd line that needed a green must take it in a different row and a different column, or it must use a purple instead.

This is why a green clue is often the key of an odd board. It removes a lot of cells at once. Look for it before you start cycling ordinary cells.

## 6. Put green beside mixed neighbours

Green counts as both colors, so it breaks if it touches a same-color pair or sits between two tiles of one color. These are all red:

```
Y Y G
Y G Y
B B G
B G B
```

Mixed neighbours give it room. This four-cell line stays legal:

```
Y B G Y
```

`Y B G` is two yellows and two blues, counting the green as both. `B G Y` is the same. If you are choosing a cell for the single green, prefer a cell whose known neighbours are different colors, and reject a cell that already has two yellows or two blues against it.

## 7. Read locks as finished facts

A locked tile cannot be cleared. Build out from it the way you would build from your own certain placement.

```
Y* . . B*
```

On a four-cell line, the locks have already supplied one yellow and one blue. The two empty cells must finish two and two, so one of them is yellow and one is blue, and neither placement may make three in a row. You do not spend an undo on a lock. It will still be there.

When a lock sits beside another tile of the same color, the pair rule fires immediately, even though you did not place the lock:

```
Y* Y .     the empty cell cannot be Y or G
```

## 8. Use an × as a copy of the opposite color

On a yellow-and-blue board, an "×" link means the two cells are opposites. Knowing one tells you the other.

```
Y × .     becomes     Y × B
```

An "=" link copies the same color:

```
B = .     becomes     B = B
```

Chains carry a fact across the grid, including into a column you have not counted yet:

```
Y = . × .     becomes     Y = Y × B
```

```
B × . = .     becomes     B × Y = Y
```

Mark the chain before you count, because a copied color can complete a pair or reach the halfway count in a line you thought was still open.

[CONFIRM] I am not telling you to treat green as "a match either way" on these links. An older press-kit line said that, and said purple only matches purple. The live rules only say same color and different color. If a green on a link turns red, believe the highlight.

## 9. Park purple hoppers before you fill around them

A hop moves the empty cell. If you fill both cells of a hopper's path, you have decided where it lives, and you may have blocked another hopper that needed that cell.

Sketch the rest position first:

```
P→  .        or, after one hop,        .  P
```

If a second purple tile is already on the destination, the first hop is illegal until you move the blocker. On a star that limits hops, the star asks you to stay under a set number of hops. Extra hops do not fail the level. They leave that star empty. Decide the resting cell before you fill both ends of the arrow.

Purple also completes an odd line without being green. A three-cell line can be:

```
Y P B
```

One yellow, one blue, and a purple that Equal Balance ignores. If the line already has its one green, a remaining oddness problem belongs to a purple, not to a second green.

## 10. Let the red cells name the rule

Red is not a general "wrong" mark. It lights the cells in the broken rule. Before you clear a whole row, ask which rule those cells are breaking.

- Three touching cells, and one of them is green between two yellows: that is the Rule of Two, because green counts as yellow. `Y G Y` is the usual shape.
- A finished line whose yellows and blues differ: that is Equal Balance. Count them. Green and purple stay out of the tally.
- Two greens in one row or one column: that is the Rule of One.
- Two cells joined by "=" that do not match, or two cells joined by "×" that do: that is the link.

Undo once, change the cell the rule is actually about, and look again. Guessing a new color on top of a red line usually adds a second break.

## 11. Finish one line, then immediately read the crossings

A cell is in one row and one column. When a halfway count forces a color, write it, and then run the pair and sandwich checks on the other line through that cell.

Suppose a row forces a blue:

```
row:     Y B Y B Y .
column:  .
         B
         B
```

The new blue may complete a vertical pair. If it does, the cells above and below that pair are not blue. Players lose time by finishing every row on its own and only then looking down. The crossing is where the next forced cell usually is.

## 12. Save the hint for a real dead end

A campaign hint reveals one "=" or "×". It does not place a tile. You still have to read the link with tips 8 and 1. Harder levels give you more hints. If you run out, an optional ad can give you three more. You can ignore that offer.

Before you spend the hint, scan once more for:

- a touching pair whose neighbour is still empty
- a sandwich `Y . Y` or `B . B`
- a line where one color has already hit half the cells that count
- an odd line that does not yet have its green or its purple
- a green that has already closed its row and its column
- an "=" or "×" chain you have not copied to the end

The no-hint star is lost for that attempt as soon as you use one hint. You can replay the level later and try again with the star still available. Nothing in the campaign locks you out for using help. The same level is in the Android app and in the browser build. Replay it on whichever one you already have open. The patterns on this page, pairs and sandwiches and halfway counts, are the campaign patterns from v1.0, and 1.1.0 did not change them.
