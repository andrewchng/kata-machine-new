# BTInOrder

## What it asks

Walk a binary tree and return the node values in in-order: left subtree, then the node itself, then the right subtree.

```ts
export default function in_order_search(head: BinaryNode<number>): number[]
```

## Pattern

**Tree DFS (in-order).** Spot it when you need values in sorted order on a binary search tree, or "left, me, right" on any binary tree.

One-line picture: walk a family tree by fully finishing the left branch, then announcing yourself, then the right branch.

## How to run

```bash
npx jest BTInOrder
```

## Hints

<details>
<summary>Nudge</summary>

Go left, then visit, then go right. If a child is `null`, skip it. On a BST this produces sorted values. The test tree is a BST, and the expected output is sorted.
</details>

<details>
<summary>Approach</summary>

Recurse on `head.left`, push `head.value`, recurse on `head.right`. The test expects `[5, 7, 10, 15, 20, 29, 30, 45, 50, 100]`.
</details>

<details>
<summary>Pseudocode</summary>

```
walk(node, path):
    if node is null: return
    walk(node.left, path)
    path.push(node.value)
    walk(node.right, path)

in_order_search(head):
    path = []
    walk(head, path)
    return path
```
</details>

## Edge cases to check

- The provided tree must produce `[5, 7, 10, 15, 20, 29, 30, 45, 50, 100]`.
- Nodes with only one child still work: visit the existing side, then (or before) the node.

## Complexity

- Time: **O(n)**
- Space: **O(h)** plus the output array

Each node is visited once. Recursion depth is the height of the tree.

## Common mistakes

- Pushing the value before or after both children, which is pre-order or post-order.
- Forgetting the `null` base case.
- Assuming the tree is always a BST. In-order still has a defined order on any binary tree.

## Related

[LeetCode 94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)
