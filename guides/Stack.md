# Stack

## What it asks

Build a stack: last item in is first item out.

```ts
export default class Stack<T> {
    public length: number;
    constructor();
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
}
```

## Pattern

**Stack (LIFO).** Spot it when the newest item should leave first, or when you need to undo the most recent action.

One-line picture: a stack of plates. You put a plate on top, and you take from the top.

## How to run

```bash
npx jest Stack
```

## Hints

<details>
<summary>Nudge</summary>

You only need a `head` (the top). `push` puts a new node in front of `head`. `pop` takes `head` off. `peek` reads `head` without removing it.
</details>

<details>
<summary>Approach</summary>

This is a singly linked list that only grows and shrinks at the front. `pop` and `peek` on an empty stack return `undefined`. After the stack is emptied, `push` must still work. Keep `length` in sync.
</details>

<details>
<summary>Pseudocode</summary>

```
push(item):
    node = { value: item, next: head }
    head = node
    length++

pop():
    if head is missing: return undefined
    value = head.value
    head = head.next
    length--
    return value

peek():
    return head.value if head exists, else undefined
```
</details>

## Edge cases to check

- `pop` on an empty stack returns `undefined`.
- After you empty it, `push` still works (the test pushes `69` at the end).
- `peek` does not change `length`.
- Several pushes, then pops, should come back in reverse order.

## Complexity

- Time: **O(1)** for `push`, `pop`, and `peek`
- Space: **O(n)**

Every operation only touches the top node.

## Common mistakes

- Forgetting to move `head` on `pop`, or to update `length`.
- `peek` accidentally removing the top item.
- Using `array.shift()` from the front; if you use an array, push and pop at the end.

## Related

The idea shows up in [LeetCode 20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) and [LeetCode 155. Min Stack](https://leetcode.com/problems/min-stack/).
