# RingBuffer

## What it asks

Build a circular buffer. `push` adds at the back, `pop` removes from the front (FIFO), and `get(idx)` returns the item `idx` steps from the front, or `undefined`. The generated constructor takes no arguments, and the tests never overflow a small buffer, so pick a reasonable default capacity (or grow when full).

This kata is not in `ligma.config.js` yet. Add `"RingBuffer"` to that list before `yarn generate` if you want a fresh stub.

```ts
export default class RingBuffer<T> {
    public length: number;
    constructor();
    push(item: T): void;
    get(idx: number): T | undefined;
    pop(): T | undefined;
}
```

## Pattern

**Circular buffer.** Spot it when you want a queue in a fixed array, and the end of the array should wrap back to index 0.

One-line picture: a clock face of slots. After the last slot, the next write wraps around to zero. Head and tail are two hands on that clock.

## How to run

```bash
npx jest RingBuffer
```

## Hints

<details>
<summary>Nudge</summary>

Store items in an array, plus a `head` index and a `length`. `push` writes at `(head + length) % capacity` and increments `length`. `pop` reads `data[head]`, then moves `head` forward with `% capacity`.
</details>

<details>
<summary>Approach</summary>

`get(idx)` is `data[(head + idx) % capacity]` after a bounds check. `pop` on an empty buffer returns `undefined`. If you hit capacity, either grow and copy (resetting `head` to 0) or reject the push; the current tests only ever hold three items.
</details>

<details>
<summary>Pseudocode</summary>

```
push(item):
    if length == capacity: grow or drop the oldest, depending on your design
    data[(head + length) % capacity] = item
    length++

pop():
    if length is 0: return undefined
    value = data[head]
    head = (head + 1) % capacity
    length--
    return value

get(idx):
    if idx is out of range: return undefined
    return data[(head + idx) % capacity]
```
</details>

## Edge cases to check

- `push` then `pop` returns that item; a second `pop` returns `undefined`.
- After two pushes, pops come out in FIFO order (`42` then `9`).
- After `push(42)`, `push(9)`, `push(12)`, `get(0)` is `42`, `get(1)` is `9`, `get(2)` is `12`.
- `get` of a bad index should be `undefined` (not tested, but worth handling).
- If you test wrapping yourself, `head` should wrap past the end of the array without breaking `get` or `pop`.

## Complexity

- Time: **O(1)** for `push`, `pop`, and `get` (growing, if you do it, is occasional O(n))
- Space: **O(capacity)**

All of the work is arithmetic on indexes, not shifting the whole array.

## Common mistakes

- Forgetting `% capacity`, so `head` or the write index runs off the end.
- Treating `get(idx)` as a raw array index instead of "idx from the front".
- Mixing up empty and full when `head === tail`. Storing `length` separately avoids that trap.
- Using `shift()` on a normal array, which is O(n) and not a ring buffer.
