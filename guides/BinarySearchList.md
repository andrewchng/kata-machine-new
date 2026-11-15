# BinarySearchList

## What it asks

Return whether `needle` appears in a **sorted** array. Do not scan every item.

```ts
export default function bs_list(haystack: number[], needle: number): boolean
```

## Pattern

**Binary search.** Spot it when a sorted array can be halved, and you only care if the value is in the left or right half.

One-line picture: tear a phone book in half, keep the half that must hold the name, repeat.

## How to run

```bash
npx jest BinarySearchList
```

## Hints

<details>
<summary>Nudge</summary>

Keep two indices, `lo` and `hi`, that bound the slice you still need to search. Each step looks at the midpoint and throws away half of what is left.
</details>

<details>
<summary>Approach</summary>

Use `mid = lo + Math.floor((hi - lo) / 2)` so the midpoint starts at `lo` and you avoid overflow. If `haystack[mid]` is the needle, return `true`. If it is smaller, search the right half with `lo = mid + 1`. If it is larger, search the left half with `hi = mid - 1`. Loop while `lo <= hi`.
</details>

<details>
<summary>Pseudocode</summary>

```
lo = 0
hi = haystack.length - 1
while lo <= hi:
    mid = lo + floor((hi - lo) / 2)
    if haystack[mid] equals needle:
        return true
    if haystack[mid] < needle:
        lo = mid + 1
    else:
        hi = mid - 1
return false
```
</details>

## Edge cases to check

- The needle is the first or last item.
- The needle is missing, just below the first value or just above the last.
- A one-item array.

## Complexity

- Time: **O(log n)**
- Space: **O(1)**

Each step halves the remaining items, so 1,000 items take about 10 steps. You only keep `lo`, `hi`, and `mid`.

## Common mistakes

- Using `mid = (lo + hi) / 2` without `Math.floor`, or forgetting that `lo` is the starting point: `mid = lo + Math.floor((hi - lo) / 2)`.
- Looping with `lo < hi` while also setting `hi = mid - 1`, which can skip the last item.
- Setting `lo = mid` or `hi = mid` instead of `mid ± 1`, which can loop forever.
- Assuming the array is unsorted. This kata only works because it is sorted.

## Related

[LeetCode 704. Binary Search](https://leetcode.com/problems/binary-search/)
