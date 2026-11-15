# ArrayList

## What it asks

Build a list backed by an array that can grow. The operations match the linked-list katas. The test constructs it with a capacity: `new ArrayList<number>(3)`. The generated stub's `constructor()` takes no argument, so add a capacity parameter yourself.

```ts
export default class ArrayList<T> {
    public length: number;
    constructor(capacity?: number);
    prepend(item: T): void;
    insertAt(item: T, idx: number): void;
    append(item: T): void;
    remove(item: T): T | undefined;
    get(idx: number): T | undefined;
    removeAt(idx: number): T | undefined;
}
```

## Pattern

**Dynamic array.** Spot it when you want O(1) access by index, and you are willing to slide items over when you insert or remove in the middle.

One-line picture: books on a shelf. Grabbing book 3 is instant; inserting a book in the middle means sliding the others down.

## How to run

```bash
npx jest ArrayList
```

The test is the shared list suite in `src/__tests__/ListTest.ts`.

## Hints

<details>
<summary>Nudge</summary>

Store items in a backing array and track `length` separately from the array's capacity. `get(idx)` is just `arr[idx]` after a bounds check. Inserts and removes in the middle need to shift items.
</details>

<details>
<summary>Approach</summary>

If the backing array is full, allocate a larger one (often double the capacity) and copy. `append` writes at `arr[length]` and increments. `prepend` / `insertAt` shift a slice to the right first. `removeAt` saves the item, shifts the tail left, and decrements `length`. `remove(item)` finds the first match, then uses `removeAt`.
</details>

<details>
<summary>Pseudocode</summary>

```
grow if length == capacity:
    allocate a larger array and copy the current items into it

append(item):
    grow if needed
    arr[length] = item
    length++

insertAt(item, idx):
    grow if needed
    shift arr[idx..length) one slot to the right
    arr[idx] = item
    length++

removeAt(idx):
    if idx is out of range: return undefined
    value = arr[idx]
    shift arr[idx+1..length) one slot to the left
    length--
    return value
```
</details>

## Edge cases to check

- The test starts with capacity `3` and fills three items, then removes and appends. Growth may not be forced, but you should still grow if you go past capacity.
- `get` / `removeAt` out of range return `undefined`.
- `remove` of a missing value returns `undefined`.
- The list must work after it has been emptied.

## Complexity

- Time: **O(1)** for `get` and amortized `append`, **O(n)** for `prepend`, `insertAt`, `remove`, `removeAt`
- Space: **O(n)**

Index access is a direct lookup. Inserting or removing in the middle slides up to n items. Doubling capacity makes append cheap on average.

## Common mistakes

- Confusing `length` with the backing array's size.
- Forgetting to shift items, so a hole appears or an old value is left behind.
- Not growing when capacity is reached.
- Off-by-one when shifting, especially around `idx === 0` or `idx === length`.

## Related

The operations match [LeetCode 707. Design Linked List](https://leetcode.com/problems/design-linked-list/), but here the backing store is an array.
