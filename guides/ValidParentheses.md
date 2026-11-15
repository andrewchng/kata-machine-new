# ValidParentheses

## What it asks

Return whether a string of `'('`, `')'`, `'{'`, `'}'`, `'['`, and `']'` is valid: every opener is closed by the matching closer, and they nest in the right order.

```ts
export default function valid_parentheses(s: string): boolean
```

## Pattern

**Stack.** Spot it when the last unmatched opener has to be closed first.

One-line picture: a stack of open boxes. Each closer must match the box you most recently opened; if the stack is empty at the end, everything was closed.

## How to run

```bash
npx jest ValidParentheses
```

## Hints

<details>
<summary>Nudge</summary>

Walk the string once. Push openers onto a stack. When you see a closer, the top of the stack must be its matching opener. Anything else is invalid.
</details>

<details>
<summary>Approach</summary>

Keep a map from opener to closer (or closer to opener). Only push openers. A closer pops and compares; if the stack is empty, or the popped opener does not match, return `false`. After the loop, the stack must be empty (leftover openers mean the string is invalid). An empty string is valid.
</details>

<details>
<summary>Pseudocode</summary>

```
closerFor = { "(": ")", "[": "]", "{": "}" }
stack = []
for each char in s:
    if char is an opener:
        stack.push(char)
    else:
        if stack is empty: return false
        opener = stack.pop()
        if closerFor[opener] != char: return false
return stack is empty
```
</details>

## Edge cases to check

- `""` is valid.
- A single opener `"("` or a single closer `")"` is invalid.
- `"()[]{}"` is valid; `"(]"` and `"([)]"` are not.
- `"{[]}"` is valid nested.
- Only openers, only closers, or a closer before any opener (`")("`) must fail.
- A long string that is almost valid, with one leftover opener or closer at the end, must fail.

## Complexity

- Time: **O(n)**
- Space: **O(n)**

You look at each character once. In the worst case you push every character (all openers) onto the stack.

## Common mistakes

- Pushing closers as well as openers. Only openers go on the stack.
- A closer must pop and compare with the top. Do not just count openers and closers; `"([)]"` has even counts and is still invalid.
- A closer when the stack is empty must fail. Do not pop from an empty stack.
- The stack must be empty at the end. Leftover openers mean something was never closed.
- Matching by type but ignoring order.

## Related

[LeetCode 20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
