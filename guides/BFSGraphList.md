# BFSGraphList

## What it asks

Find a shortest path (fewest hops) from `source` to `needle` in a weighted adjacency list, and return it as node indices. If there is no path, return `null`. The test has a path from `0` to `6`, but not from `6` to `0`.

This kata is not in `ligma.config.js` yet. Add `"BFSGraphList"` to that list before `yarn generate` if you want a fresh stub.

```ts
export default function bfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null
```

Weights can be ignored: every edge counts as one hop.

## Pattern

**Graph BFS.** Spot it when you need the shortest path in an unweighted graph, or in a graph where every edge has the same cost.

One-line picture: a ripple in a pond. You reach closer rooms before farther ones, so the first time you arrive is the shortest route.

## How to run

```bash
npx jest BFSGraphList
```

## Hints

<details>
<summary>Nudge</summary>

Start a queue at `source`. For each node you pop, enqueue its unseen neighbors. Record a `prev` array so you can rebuild the path when you first reach `needle`.
</details>

<details>
<summary>Approach</summary>

`seen[source] = true`. While the queue is not empty, take the front node. For each unused neighbor, set `prev[neighbor] = current`, mark it seen, and enqueue it. If the neighbor is the needle, stop. Then walk `prev` from `needle` back to `source` and reverse that list. If `needle` was never reached, return `null`.
</details>

<details>
<summary>Pseudocode</summary>

```
seen = array of false
prev = array of -1
queue = [source]
seen[source] = true

while queue is not empty:
    current = queue.shift()
    if current equals needle: break
    for each edge in graph[current]:
        if seen[edge.to]: continue
        seen[edge.to] = true
        prev[edge.to] = current
        queue.push(edge.to)

if needle was never reached: return null
walk from needle back along prev until -1, reverse, return the path
```
</details>

## Edge cases to check

- `0` to `6` on `list2` returns `[0, 1, 4, 5, 6]`.
- `6` to `0` returns `null`.
- `source === needle` should return `[source]`.
- Do not reconstruct a path if `prev[needle]` was never set (unless source equals needle).

## Complexity

- Time: **O(V + E)**
- Space: **O(V)**

Each node is enqueued at most once, and you scan each edge once. The queue, `seen`, and `prev` are all O(V).

## Common mistakes

- Using DFS, which can find a path that is not the shortest.
- Forgetting `prev`, so you know you arrived but cannot name the route.
- Treating the graph as undirected.
- Marking a node seen too late, which can enqueue the same node twice.

## Related

The same BFS-path idea shows up in grid problems like [LeetCode 1091. Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/).
