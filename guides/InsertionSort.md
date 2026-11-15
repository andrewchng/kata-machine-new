# InsertionSort

## What it asks

Sort `arr` in place, smallest to largest. The function returns `void`.

This kata is not in `ligma.config.js` yet. Add `"InsertionSort"` to that list before `yarn generate` if you want a fresh stub.

```ts
export default function insertion_sort(arr: number[]): void
```

## Pattern

**Sorting (insertion sort).** Spot it when you grow a sorted prefix, and each new item is slipped into its place, like sorting cards in your hand.

## How to run

```bash
npx jest InsertionSort
```

## Hints

<details>
<summary>Nudge</summary>

Treat `arr[0..i-1]` as already sorted. Take `arr[i]`, shift every larger item one slot to the right, and drop it into the hole.
</details>

<details>
<summary>Approach</summary>

Start at index 1. Save the current value, then walk left while the left neighbor is larger, shifting those neighbors right. Write the saved value into the open index. Repeat for every later item.
</details>

<details>
<summary>Pseudocode</summary>

```
for i from 1 to n - 1:
    current = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > current:
        arr[j + 1] = arr[j]
        j = j - 1
    arr[j + 1] = current
```
</details>

## Edge cases to check

- The sample `[9, 3, 7, 4, 69, 420, 42]` becomes `[3, 4, 7, 9, 42, 69, 420]`.
- Already sorted (should be close to O(n) if you stop shifting early).
- Reverse sorted, or a one-item array.

## Complexity

- Time: **O(n²)** average and worst case, **O(n)** if already sorted
- Space: **O(1)**

Each new item may have to slide past every item on its left, and you only need a few variables.

## Common mistakes

- Overwriting `arr[i]` before you have saved it.
- Stopping the shift at `j > 0` and missing index 0.
- Building a new array instead of sorting in place.
