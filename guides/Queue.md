# Queue

## What it asks

Build a queue: first item in is first item out. The removal method is spelled `deque` in this repo, not `dequeue`.

```ts
export default class Queue<T> {
    public length: number;
    constructor();
    enqueue(item: T): void;
    deque(): T | undefined;
    peek(): T | undefined;
}
```

## Pattern

**Queue (FIFO).** Spot it when the oldest item should leave first.

One-line picture: a line at a coffee shop. New people join the back; the person at the front is served next.

## How to run

```bash
npx jest Queue
```

## Hints

<details>
<summary>Nudge</summary>

A singly linked list with `head` (front) and `tail` (back) gives O(1) `enqueue` and `deque`. `peek` looks at `head` without removing it. `length` starts at 0.
</details>

<details>
<summary>Approach</summary>

`enqueue` attaches a new node at `tail` (and sets `head` if the queue was empty). `deque` takes the value at `head`, moves `head` to `head.next`, and clears `tail` if the queue is now empty. `peek` and `deque` on an empty queue return `undefined` and must not throw.
</details>

<details>
<summary>Pseudocode</summary>

```
enqueue(item):
    node = { value: item }
    if tail exists: tail.next = node
    else: head = node
    tail = node
    length++

deque():
    if head is missing: return undefined
    value = head.value
    head = head.next
    if head is missing: tail = undefined
    length--
    return value

peek():
    return head.value if head exists, else undefined
```
</details>

## Edge cases to check

- `deque` and `peek` on an empty queue return `undefined`, and `length` is 0.
- After you empty the queue, `enqueue` must still work (the test enqueues `69` at the end).
- `peek` does not change `length`.

## Complexity

- Time: **O(1)** for `enqueue`, `deque`, and `peek`
- Space: **O(n)**

With head and tail pointers you never walk the list. You store one node per item.

## Common mistakes

- Naming the method `dequeue`. The stub and the tests use `deque`.
- Forgetting to clear `tail` when the last item is removed, or to set `head` when the first item is added.
- Letting `length` go negative or stay stale.
- Implementing this with `array.shift()`, which is O(n) and not the point of the kata.
