# DoublyLinkedList

## What it asks

Same list operations as the singly linked list, but each node has `prev` and `next`, so you can walk either way.

```ts
export default class DoublyLinkedList<T> {
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

**Linked list (doubly linked).** Spot it when you need cheap inserts and deletes once you have the node, and you want to walk backwards as well as forwards.

One-line picture: a train where each car knows the car in front and the car behind.

## How to run

```bash
npx jest DoublyLinkedList
```

The test is the shared list suite in `src/__tests__/ListTest.ts`.

## Hints

<details>
<summary>Nudge</summary>

Keep `head` and `tail`. Every link you change has two sides: `a.next = b` also means `b.prev = a`. When you unlink a node, stitch its neighbors to each other.
</details>

<details>
<summary>Approach</summary>

The operations match SinglyLinkedList, with extra `prev` updates. `append` and `prepend` are both O(1) with `head` and `tail`. For a middle insert or remove, walk to the node (from the nearer end if you want), then fix four pointers: the previous node's `next`, the next node's `prev`, and the new or removed node's `prev` / `next`. Clear `head` and `tail` when the last item is removed.
</details>

<details>
<summary>Pseudocode</summary>

```
unlink(node):
    if node.prev exists: node.prev.next = node.next
    else: head = node.next
    if node.next exists: node.next.prev = node.prev
    else: tail = node.prev
    length--

append(item):
    if tail is missing: head = tail = node
    else: tail.next = node, node.prev = tail, tail = node
    length++

insertAt(item, idx):
    if idx == 0: prepend
    if idx == length: append
    else: walk to the current node at idx, hook the new node in before it
```
</details>

## Edge cases to check

- The same shared cases as the other lists: empty after removals, `remove` of a missing value, `prepend` after emptying.
- Removing the only node must clear both `head` and `tail`.
- Inserting at index 0 and at `length` should behave like `prepend` and `append`.

## Complexity

- Time: **O(1)** for `prepend` and `append`, **O(n)** for index-based operations
- Space: **O(n)**

Ends are direct pointers. Reaching a middle index still means walking the chain.

## Common mistakes

- Updating only `next` and leaving a stale `prev` (or the other way around).
- Forgetting to update `head` or `tail` when you change the first or last node.
- Not handling the empty-list and one-node cases.
- Leaving `length` wrong after a failed `remove`.

## Related

[LeetCode 707. Design Linked List](https://leetcode.com/problems/design-linked-list/)
