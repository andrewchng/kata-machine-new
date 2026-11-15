# DFSOnBST

## What it asks

Search a binary search tree for `needle` and return whether it exists. Use the BST rule: left is smaller, right is larger.

```ts
export default function dfs(head: BinaryNode<number>, needle: number): boolean
```

## Pattern

**BST search.** Spot it when the tree is a binary search tree, so each comparison tells you exactly which side to walk.

One-line picture: a phone book in tree form. If the name is smaller than the current page, go left; if larger, go right.

## How to run

```bash
npx jest DFSOnBST
```

## Hints

<details>
<summary>Nudge</summary>

At each node, if the value is the needle you are done. If the needle is smaller, search only the left child. If it is larger, search only the right child. If the child is missing, the needle is not in the tree.
</details>

<details>
<summary>Approach</summary>

Recursion or a loop both work. Do not walk the other side; that would ignore the BST property and turn this into a full tree walk. The test tree contains `45` and `7`, and does not contain `69`.
</details>

<details>
<summary>Pseudocode</summary>

```
dfs(node, needle):
    if node is null: return false
    if node.value equals needle: return true
    if needle < node.value:
        return dfs(node.left, needle)
    return dfs(node.right, needle)
```
</details>

## Edge cases to check

- The needle is the root, a left leaf (`7`), or a right-side node (`45`).
- A missing value such as `69` returns `false`.
- An empty tree (`head` would be `null` if you test it yourself).

## Complexity

- Time: **O(h)**, which is **O(log n)** if the tree is balanced, **O(n)** if it is a straight line
- Space: **O(h)** with recursion, **O(1)** if you loop

You only walk one path from the root toward a leaf, not the whole tree.

## Common mistakes

- Searching both sides, which works but is not a BST search.
- Using the wrong comparison (`<=` vs `<`) and walking the wrong way on equal values. Equal should return `true` immediately.
- Forgetting the `null` base case.

## Related

[LeetCode 700. Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/)
