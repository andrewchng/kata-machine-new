# QuickSort

## What it asks

Sort `arr` in place, smallest to largest. The function returns `void`.

```ts
export default function quick_sort(arr: number[]): void
```

## Pattern

**Divide and conquer (quick sort).** Spot it when you pick a pivot, put everything smaller on one side and everything larger on the other, then sort each side.

One-line picture: pick one person in a line, ask everyone else to stand to their left if shorter and to their right if taller, then repeat in each group.

## How to run

```bash
npx jest QuickSort
```

## Hints

<details>
<summary>Nudge</summary>

Choose a pivot (the last item in the slice is a simple choice). Partition the slice so the pivot ends in its final index. Recurse on the left of that index and on the right. Stop when a slice has 0 or 1 items.
</details>

<details>
<summary>Approach</summary>

In `partition`, walk the slice with an index `i` that marks the end of the "smaller than pivot" side. Swap any item `<= pivot` into that side, then swap the pivot into place and return its index. Recurse on `[lo, pivot)` and `(pivot, hi]`. Do not include the pivot again, or you can loop forever.
</details>

<details>
<summary>Pseudocode</summary>

```
quick_sort_slice(arr, lo, hi):
    if lo >= hi: return
    pivot_index = partition(arr, lo, hi)
    quick_sort_slice(arr, lo, pivot_index - 1)
    quick_sort_slice(arr, pivot_index + 1, hi)

partition(arr, lo, hi):
    pivot = arr[hi]
    i = lo
    for j from lo to hi - 1:
        if arr[j] <= pivot:
            swap arr[i] and arr[j]
            i = i + 1
    swap arr[i] and arr[hi]
    return i

quick_sort(arr) = quick_sort_slice(arr, 0, arr.length - 1)
```
</details>

## Edge cases to check

- The sample `[9, 3, 7, 4, 69, 420, 42]` becomes `[3, 4, 7, 9, 42, 69, 420]`.
- Already sorted or reverse sorted (worst case if you always pick the last item as pivot).
- Duplicates, one item, or two items.

## Complexity

- Time: **O(n log n)** average, **O(n²)** worst case
- Space: **O(log n)** average for the call stack, **O(n)** worst case

Each partition walks the slice once. If the pivot is usually near the middle, the depth is log n. If the array is already sorted and the pivot is always the last item, one side is empty every time, which is the slow case.

## Common mistakes

- Recursing on a range that still includes the pivot, which can infinite-loop.
- Off-by-one in `partition` (forgetting to swap the pivot into index `i`).
- Building a new array of "left" and "right" items. That can work, but this kata expects an in-place sort of `arr`.
