# SinglyLinkedList

## What it asks

Build a singly linked list: each node points only to the next node. Support the operations below and keep `length` accurate.

```ts
export default class SinglyLinkedList<T> {
    public length: number;
    constructor();
    prepend(item: T): void;
    insertAt(item: T, idx: number): void;
    append(item: T): void;
    remove(item: T): T | undefined;
    get(idx: number): T | undefined;
    removeAt(idx: number): T | undefined;
}
```

## Pattern

**Linked list.** Spot it when you need a list that grows from the ends without sliding a block of memory, and you are willing to walk the chain to reach the middle.

One-line picture: a train where each car only knows the car behind it.

## How to run

```bash
npx jest SinglyLinkedList
```

The test is the shared list suite in `src/__tests__/ListTest.ts`.

## Hints

<details>
<summary>Nudge</summary>

Keep a `head` pointer (and a `tail` if you want cheap `append`). `length` starts at 0. Every insert or remove must update those pointers and `length`.
</details>

<details>
<summary>Approach</summary>

Walk from `head` to reach index `idx` or a value. For `prepend`, the new node becomes `head`. For `append`, attach at `tail` (or walk to the end). For `removeAt` / `insertAt`, you usually need the node *before* the index so you can retarget `next`. `remove(item)` finds the first match and unlinks it, or returns `undefined`. Out-of-range `get` / `removeAt` should return `undefined`.
</details>

<details>
<summary>Pseudocode</summary>

```
get(idx):
    if idx is out of range: return undefined
    walk idx steps from head and return that node's value

prepend(item):
    node.next = head
    head = node
    if tail is missing: tail = node
    length++

append(item):
    if there is no head: same as prepend
    else: tail.next = node, tail = node, length++

removeAt(idx):
    if idx is 0: detach head, update tail if the list is now empty
    else: find the node before idx, skip the target, update tail if you removed the last node
    length--, return the removed value
```
</details>

## Edge cases to check

- `append` then `get` at the last index.
- `removeAt` in the middle, then at both ends, until the list is empty (`length === 0`).
- `remove` of a value that is not in the list returns `undefined`.
- `prepend` on an empty list, then `get(0)` and `get(last)`.
- Operations after the list has been emptied should still work.

## Complexity

- Time: **O(1)** for `prepend` (and `append` if you keep a tail), **O(n)** for `get`, `insertAt`, `remove`, `removeAt`
- Space: **O(n)**

You must walk from the head to reach a middle index. You store one node per item.

## Common mistakes

- Forgetting to update `length`, or `head` / `tail` when the list becomes empty or goes from empty to one item.
- Losing the rest of the list by overwriting `next` without saving it.
- Off-by-one when walking to `idx` (stopping at the target when you needed the previous node).
- `get` or `removeAt` on a bad index not returning `undefined`.

## Related

[LeetCode 707. Design Linked List](https://leetcode.com/problems/design-linked-list/)
