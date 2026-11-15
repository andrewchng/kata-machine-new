# MergeSort

## What it asks

Sort `arr` in place (the test inspects the same array). Split, sort, and merge.

This kata is not in `ligma.config.js` yet. Add `"MergeSort"` to that list before `yarn generate` if you want a fresh stub.

```ts
export default function merge_sort(arr: number[]): void
```

## Pattern

**Divide and conquer (merge sort).** Spot it when you split the work in half, solve each half, then zip the two sorted halves together.

One-line picture: split a messy pile of papers in half until each pile is tiny, then merge the piles like a zipper.

## How to run

```bash
npx jest MergeSort
```

## Hints

<details>
<summary>Nudge</summary>

If the slice has 0 or 1 items, it is already sorted. Otherwise sort the left half, sort the right half, then merge them into a sorted result and copy it back into `arr`.
</details>

<details>
<summary>Approach</summary>

Write a helper that sorts `arr[lo..hi)`. Midpoint is `lo + floor((hi - lo) / 2)`. After both halves are sorted, walk both with two pointers and always take the smaller head. Because the merge needs a temporary array, this is not O(1) extra space.
</details>

<details>
<summary>Pseudocode</summary>

```
sort(arr, lo, hi):          # sorts the slice [lo, hi)
    if hi - lo <= 1: return
    mid = lo + floor((hi - lo) / 2)
    sort(arr, lo, mid)
    sort(arr, mid, hi)
    merge arr[lo..mid) and arr[mid..hi) into a temp array
    copy temp back into arr[lo..hi)

merge_sort(arr) = sort(arr, 0, arr.length)
```
</details>

## Edge cases to check

- The sample `[9, 3, 7, 4, 69, 420, 42]` becomes `[3, 4, 7, 9, 42, 69, 420]`.
- Odd length, already sorted, or all equal values.
- One item or empty.

## Complexity

- Time: **O(n log n)**
- Space: **O(n)**

The array is halved about log n times, and each level walks all n items. The merge step needs a temporary array of up to n items.

## Common mistakes

- Forgetting to copy the merged slice back into the original array (the test checks `arr` itself).
- Off-by-one on `lo` / `hi` / `mid`, which can drop an item or recurse forever.
- Using `<=` when both halves still have items, which is usually fine, but then forgetting to drain the leftover half.
