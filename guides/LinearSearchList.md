# LinearSearchList

## What it asks

Return whether `needle` appears anywhere in `haystack`. Walk the array from left to right; it is not sorted.

```ts
export default function linear_search(haystack: number[], needle: number): boolean
```

## Pattern

**Linear scan.** Spot it when the array is unsorted, or you have no better way than checking every item.

One-line picture: walk a shelf of books one by one until you find the title, or run out of books.

## How to run

```bash
npx jest LinearSearchList
```

## Hints

<details>
<summary>Nudge</summary>

Start at index 0. Compare each value to `needle`. Stop early if you find it. If you reach the end, it is not there.
</details>

<details>
<summary>Approach</summary>

A single `for` loop is enough. Return `true` on a match. After the loop, return `false`. You do not need extra memory.
</details>

<details>
<summary>Pseudocode</summary>

```
for i from 0 to haystack.length - 1:
    if haystack[i] equals needle:
        return true
return false
```
</details>

## Edge cases to check

- The first or last item is the needle.
- The needle is missing, including a value just outside the range of the array.
- A one-item array, or (if you test it yourself) an empty array.

## Complexity

- Time: **O(n)**
- Space: **O(1)**

In the worst case you look at every item once, and you only keep a loop index.

## Common mistakes

- Forgetting to return `false` after the loop.
- Stopping one item short (`i < length - 1`).
