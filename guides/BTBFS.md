# BTBFS

## What it asks

Search a binary tree for `needle` and return whether it exists. Walk the tree level by level, not by diving down one branch first.

```ts
export default function bfs(head: BinaryNode<number>, needle: number): boolean
```

## Pattern

**Tree BFS.** Spot it when you want to visit nodes in the order of their distance from the root, using a queue.

One-line picture: a wave moving down the tree, one level at a time.

## How to run

```bash
npx jest BTBFS
```

## Hints

<details>
<summary>Nudge</summary>

Start a queue with the root. While the queue is not empty, take the front node, check its value, and enqueue its left and right children if they exist.
</details>

<details>
<summary>Approach</summary>

This is a search, so you can return `true` as soon as you see `needle`, and `false` if the queue runs out. Do not use recursion here; a recursive walk would be DFS. A simple array can be the queue if you "deque" from the front, or you can reuse your `Queue`.
</details>

<details>
<summary>Pseudocode</summary>

```
queue = [head]
while queue is not empty:
    node = queue.shift()
    if node.value equals needle:
        return true
    if node.left exists: queue.push(node.left)
    if node.right exists: queue.push(node.right)
return false
```
</details>

## Edge cases to check

- The test tree contains `45` and `7` (expect `true`) and does not contain `69` (expect `false`).
- The needle can be the root, or a leaf.
- A missing child must not be enqueued.

## Complexity

- Time: **O(n)**
- Space: **O(w)** where w is the widest level of the tree

In the worst case you look at every node, and the queue holds one level at a time.

## Common mistakes

- Using recursion or a stack, which is depth-first, not breadth-first.
- Forgetting to enqueue both children, or enqueueing `null`.
- For a tree search you usually do not need a `seen` set, because there are no cycles.

## Related

The walk is the same idea as [LeetCode 102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/).
