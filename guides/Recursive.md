# Recursive

## What it asks

Return the sum `1 + 2 + ... + n` using recursion. The tests are `sum(4) === 10`, `sum(5) === 15`, and `sum(6) === 21`.

This kata is not in `ligma.config.js` or `scripts/dsa.js`, so `yarn generate` will not create a stub. If you want a fresh attempt, add `src/dayN/Recursive.ts` yourself (Jest is already pointed at the latest day after you generate). A copy exists in `src/day1/Recursive.ts`; do not peek if you are practicing cold.

```ts
export default function sum(n: number): number
```

## Pattern

**Recursion.** Spot it when the answer for `n` is a smaller version of the same problem, plus a little work.

One-line picture: nesting dolls. `sum(n)` is `n` plus the same problem for `n - 1`, until you reach the smallest doll.

## How to run

```bash
npx jest Recursive
```

## Hints

<details>
<summary>Nudge</summary>

You need a base case that stops the calls, and a recursive case that reduces `n`. `sum(0)` is `0`. `sum(n)` is `n + sum(n - 1)`.
</details>

<details>
<summary>Approach</summary>

If `n` is `0` (or `1`, if you return `1`), stop. Otherwise return `n` plus the result of calling `sum` on `n - 1`. Do not forget the base case, or the function will call itself forever.
</details>

<details>
<summary>Pseudocode</summary>

```
sum(n):
    if n is 0: return 0
    return n + sum(n - 1)
```
</details>

## Edge cases to check

- `sum(4)`, `sum(5)`, and `sum(6)` match the triangular numbers 10, 15, and 21.
- `sum(0)` should be `0`, and `sum(1)` should be `1`, if you try them yourself.

## Complexity

- Time: **O(n)**
- Space: **O(n)**

There are n calls, and each one waits on the stack until the base case returns.

## Common mistakes

- Missing the base case, which causes an infinite recursion.
- Using a loop only. A loop can compute the same number, but this kata is for practicing recursion.
- Returning `n` without adding `sum(n - 1)`, or adding `sum(n)` (that never shrinks).
