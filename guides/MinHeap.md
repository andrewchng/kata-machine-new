# MinHeap

## What it asks

Build a min-heap of numbers. `insert` adds a value. `delete` removes and returns the current smallest. Keep public `length` accurate.

```ts
export default class MinHeap {
    public length: number;
    constructor();
    insert(value: number): void;
    delete(): number;
}
```

## Pattern

**Heap (priority queue).** Spot it when you always need the smallest (or largest) item next, in better than linear time.

One-line picture: a pyramid stored in an array. The smallest value always sits at the top. When you add or remove, the value bubbles up or down until the pyramid rule holds again.

## How to run

```bash
npx jest MinHeap
```

## Hints

<details>
<summary>Nudge</summary>

Store the heap in an array. For index `i`, the parent is at `Math.floor((i - 1) / 2)`, and the children are at `2i + 1` and `2i + 2`. The rule is: a parent is never larger than its children.
</details>

<details>
<summary>Approach</summary>

`insert` puts the value at the end (`data[length]`) and bubbles it up while it is smaller than its parent. `delete` saves `data[0]`, moves the last value to index 0, shrinks `length`, and bubbles that value down: swap with the smaller child until the heap rule holds. The test inserts `5, 3, 69, 420, 4, 1, 8, 7` and expects deletes in order `1, 3, 4, 5, 7, 8, 69, 420`.
</details>

<details>
<summary>Pseudocode</summary>

```
insert(value):
    data[length] = value
    length++
    bubble up from length - 1

bubble up(i):
    while i > 0 and data[i] < data[parent(i)]:
        swap data[i] with data[parent(i)]
        i = parent(i)

delete():
    if length is 0: return (or throw; the test never does this)
    out = data[0]
    length--
    if length is 0: return out
    data[0] = data[length]
    bubble down from 0
    return out

bubble down(i):
    while a child exists:
        smallest = index of the smaller existing child
        if data[i] <= data[smallest]: break
        swap data[i] with data[smallest]
        i = smallest
```
</details>

## Edge cases to check

- `length` is 0 before the first insert, 8 after all inserts, 4 after four deletes, and 0 after all deletes.
- Deletes come out in sorted order for this set of inserts.
- After the heap is empty, `length` must be 0. Decide how `delete` on empty should behave; the test does not call it.

## Complexity

- Time: **O(log n)** for `insert` and `delete`
- Space: **O(n)**

Each bubble walk follows a path in a complete binary tree, which is at most log n levels. The array holds every item.

## Common mistakes

- Off-by-one parent or child indexes (`2i + 1` and `2i + 2` for a 0-based array).
- Forgetting to decrement `length` before bubbling down, or leaving a stale tail item in play.
- Always swapping with the left child, even when the right child is smaller.
- Building a sorted array and using `shift()`, which makes `delete` O(n).

## Related

Heaps show up in [LeetCode 215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) and [LeetCode 703. Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/).
