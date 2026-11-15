# BubbleSort

## What it asks

Sort `arr` in place, smallest to largest. The function returns `void`; the test checks the same array you were given.

```ts
export default function bubble_sort(arr: number[]): void
```

## Pattern

**Sorting (bubble sort).** Spot it when you repeatedly swap neighbors that are out of order, and the largest leftover value "bubbles" to the end on each pass.

## How to run

```bash
npx jest BubbleSort
```

## Hints

<details>
<summary>Nudge</summary>

On each pass, walk the unsorted prefix and swap any pair that is in the wrong order. After pass `i`, the last `i` items are already in place, so the next pass can be one item shorter.
</details>

<details>
<summary>Approach</summary>

Use two loops. The outer loop counts how many values have already settled at the end. The inner loop compares `arr[j]` and `arr[j + 1]` and swaps when needed. You can stop the inner loop at `arr.length - 1 - i`.
</details>

<details>
<summary>Pseudocode</summary>

```
for i from 0 to n - 2:
    for j from 0 to n - 2 - i:
        if arr[j] > arr[j + 1]:
            swap arr[j] and arr[j + 1]
```
</details>

## Edge cases to check

- The sample `[9, 3, 7, 4, 69, 420, 42]` becomes `[3, 4, 7, 9, 42, 69, 420]`.
- Already sorted, or reverse sorted.
- Two items, or one item (the loops should just do nothing).

## Complexity

- Time: **O(n²)**
- Space: **O(1)**

Two nested loops over the array, and you swap in place, so no extra array is needed.

## Common mistakes

- Returning a new array instead of sorting in place. The signature is `void`.
- Letting the inner loop run to `n - 1`, which reads past the last pair.
- Forgetting to shrink the unsorted range after each pass (it still works, just does extra work).
