# TwoCrystalBalls

## What it asks

`breaks` is a boolean array that stays `false` until some floor, then stays `true`. Find the first index that is `true`. If the ball never breaks, return `-1`. You are only allowed two "breaks", so a full binary search is the wrong tool.

```ts
export default function two_crystal_balls(breaks: boolean[]): number
```

## Pattern

**Jump search.** Spot it when you have two chances, and you want better than a linear walk but cannot keep halving (halving would use more than two breaks).

One-line picture: you have two crystal balls and a building; jump up by √n floors, then walk the last stretch one floor at a time.

## How to run

```bash
npx jest TwoCrystalBalls
```

## Hints

<details>
<summary>Nudge</summary>

If you jump in steps of size √n, you make about √n jumps, then at most √n steps back. That is much better than walking every floor, and you only break two balls.
</details>

<details>
<summary>Approach</summary>

Set `jump = floor(sqrt(n))`. Walk `i = jump, 2jump, 3jump, ...` until you see `true` or go past the end. Then walk linearly from the previous jump point up to `i`, looking for the first `true`. If none exists, return `-1`.
</details>

<details>
<summary>Pseudocode</summary>

```
n = breaks.length
jump = floor(sqrt(n))
i = jump
while i < n and breaks[i] is false:
    i = i + jump
start = i - jump
for j from max(start, 0) to min(i, n - 1):
    if breaks[j] is true:
        return j
return -1
```
</details>

## Edge cases to check

- The ball never breaks (the test uses an all-`false` array of length 821, expect `-1`).
- It breaks on the first floor, or on the last floor.
- Array length that is not a perfect square.

## Complexity

- Time: **O(√n)**
- Space: **O(1)**

You jump about √n times, then walk at most √n floors. No extra arrays.

## Common mistakes

- Using binary search. That finds the answer, but it is not the point of this kata: binary search can "break" the first ball more than once.
- Jumping by a constant (like 10) instead of √n, which is not O(√n) for large n.
- Forgetting the all-`false` case and returning `0` or `n` instead of `-1`.
- Walking off the end of the array when the last jump overshoots.
