# BTPostOrder

## What it asks

Walk a binary tree and return the node values in post-order: left subtree, then right subtree, then the node itself.

```ts
export default function post_order_search(head: BinaryNode<number>): number[]
```

## Pattern

**Tree DFS (post-order).** Spot it when you need to process children before the parent (cleanup, deleting a tree, evaluating an expression tree).

One-line picture: walk a family tree and announce the children first, yourself last.

## How to run

```bash
npx jest BTPostOrder
```

## Hints

<details>
<summary>Nudge</summary>

Go left, then go right, then visit. If a child is `null`, skip it.
</details>

<details>
<summary>Approach</summary>

Recurse on `head.left`, recurse on `head.right`, then push `head.value`. The test expects `[7, 5, 15, 10, 29, 45, 30, 100, 50, 20]`.
</details>

<details>
<summary>Pseudocode</summary>

```
walk(node, path):
    if node is null: return
    walk(node.left, path)
    walk(node.right, path)
    path.push(node.value)

post_order_search(head):
    path = []
    walk(head, path)
    return path
```
</details>

## Edge cases to check

- The provided tree must produce `[7, 5, 15, 10, 29, 45, 30, 100, 50, 20]`.
- The root is last in a post-order walk.

## Complexity

- Time: **O(n)**
- Space: **O(h)** plus the output array

Each node is visited once. Recursion depth is the height of the tree.

## Common mistakes

- Pushing the value too early (pre-order or in-order).
- Forgetting the `null` base case.
- Swapping the left and right recursive calls.

## Related

[LeetCode 145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)
