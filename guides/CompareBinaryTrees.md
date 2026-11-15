# CompareBinaryTrees

## What it asks

Return whether two binary trees are the same: the same shape and the same value at every node. `null` must match `null`.

```ts
export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean
```

## Pattern

**Tree DFS / recursion.** Spot it when two structures must match together, including the places where a child is missing.

One-line picture: two family trees are the same only if every person, and every missing branch, lines up.

## How to run

```bash
npx jest CompareBinaryTrees
```

## Hints

<details>
<summary>Nudge</summary>

If both nodes are `null`, they match. If only one is `null`, they do not. If both exist, their values must be equal, and both left subtrees and both right subtrees must match.
</details>

<details>
<summary>Approach</summary>

This is a simultaneous walk of both trees. The first two checks (both null, or one null) are the base cases. Then compare `a.value` with `b.value` and recurse: `compare(a.left, b.left) && compare(a.right, b.right)`.
</details>

<details>
<summary>Pseudocode</summary>

```
compare(a, b):
    if a is null and b is null: return true
    if a is null or b is null: return false
    if a.value != b.value: return false
    return compare(a.left, b.left) and compare(a.right, b.right)
```
</details>

## Edge cases to check

- A tree compared with itself is `true`.
- `tree` and `tree2` in the test have the same values in a slightly different shape, and must be `false`.
- One tree is `null` and the other is not.
- Values match but a left/right child is swapped.

## Complexity

- Time: **O(n)**
- Space: **O(h)**

You stop early on the first mismatch, and in the worst case you visit every node. Recursion depth is the height.

## Common mistakes

- Comparing values only, and ignoring structure (a missing child vs a present child).
- Treating "one is null" as a match.
- Comparing `a.left` with `b.right` by accident.

## Related

[LeetCode 100. Same Tree](https://leetcode.com/problems/same-tree/)
