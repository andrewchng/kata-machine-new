# DFSGraphList

## What it asks

Find a path from `source` to `needle` in a weighted adjacency list, and return the path as an array of node indices. If there is no path, return `null`. The graph may be directed; the test has a path from `0` to `6`, but not from `6` to `0`.

```ts
export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null
```

`WeightedAdjacencyList` is `GraphEdge[][]`, and each edge is `{ to: number; weight: number }`. For this kata the weights do not matter; you only need a path, not the shortest one.

## Pattern

**Graph DFS.** Spot it when you walk a graph by going as deep as you can, then backing up, and you need any path (not necessarily the shortest).

One-line picture: wander down a trail in a cave, mark rooms you have seen, and back up when you hit a dead end.

## How to run

```bash
npx jest DFSGraphList
```

## Hints

<details>
<summary>Nudge</summary>

Start at `source`, mark nodes as seen so you do not loop, and recurse into each unused neighbor. Keep the path you are on. If you reach `needle`, return that path. If every branch fails, return `null`.
</details>

<details>
<summary>Approach</summary>

A `seen` array of booleans, one per node, plus a `path` array, is enough. Push the current node on entry. If it is the needle, you are done. Otherwise try each `graph[current][i].to` that is not yet seen. Pop the node if the branch fails (backtrack). The test expects `[0, 1, 4, 5, 6]` for `0 → 6` on `list2`.
</details>

<details>
<summary>Pseudocode</summary>

```
walk(current):
    if seen[current]: return false
    seen[current] = true
    path.push(current)
    if current equals needle: return true
    for each edge in graph[current]:
        if walk(edge.to): return true
    path.pop()
    return false

dfs(graph, source, needle):
    seen = array of false, one per node
    path = []
    if walk(source): return path
    return null
```
</details>

## Edge cases to check

- `0` to `6` on `list2` returns `[0, 1, 4, 5, 6]`.
- `6` to `0` returns `null` (do not treat the graph as undirected).
- `source === needle` should return `[source]`.
- Cycles must not recurse forever (use `seen`).

## Complexity

- Time: **O(V + E)**
- Space: **O(V)**

Each node and each edge is looked at at most once. `seen` and the recursion / path are proportional to the number of nodes.

## Common mistakes

- Returning `true` / `false` instead of the path, or forgetting to return `null` when there is no path.
- Not marking nodes as seen, which loops on a cycle.
- Treating edges as bidirectional when the list is directed.
- Forgetting to pop on a failed branch, so the returned path includes dead ends.

## Related

A close cousin is [LeetCode 797. All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/). Here you only need one path.
