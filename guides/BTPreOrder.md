# BTPreOrder

## What it asks

Walk a binary tree and return the node values in pre-order: the node itself, then its left subtree, then its right subtree.

```ts
export default function pre_order_search(head: BinaryNode<number>): number[]
```

## Pattern

**Tree DFS (pre-order).** Spot it when you need to process a node before you process its children.

One-line picture: walk a family tree and announce yourself first, then the left branch, then the right branch.

## How to run

```bash
npx jest BTPreOrder
```

## Hints

<details>
<summary>Nudge</summary>

Visit, then go left, then go right. If a child is `null`, skip it. Collect values in an array as you go.
</details>

<details>
<summary>Approach</summary>

A recursive helper is the cleanest. Push `head.value`, recurse on `head.left` if it exists, then recurse on `head.right`. The test tree's pre-order starts with `20, 10, 5, 7, 15, ...`.
</details>

<details>
<summary>Pseudocode</summary>

```
walk(node, path):
    if node is null: return
    path.push(node.value)
    walk(node.left, path)
    walk(node.right, path)

pre_order_search(head):
    path = []
    walk(head, path)
    return path
```
</details>

## Edge cases to check

- The provided tree must produce `[20, 10, 5, 7, 15, 50, 30, 29, 45, 100]`.
- A node with only a left child, or only a right child (the test tree has both).
- A single-node tree would return just that value.

## Complexity

- Time: **O(n)**
- Space: **O(h)** plus the output array, where h is the height

You visit each node once. The call stack follows the current path down the tree, not the whole tree.

## Common mistakes

- Mixing the order (pushing the value after the children is post-order; between them is in-order).
- Forgetting the `null` base case, which will crash on a missing child.
- Returning the array from the wrong place, so only one subtree is included.

## Related

[LeetCode 144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)
