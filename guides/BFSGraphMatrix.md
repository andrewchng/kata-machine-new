# BFSGraphMatrix

## What it asks

Same problem as BFS on an adjacency list: return a shortest path from `source` to `needle`, or `null` if none exists. The graph is a weighted adjacency matrix: `graph[from][to]` is the weight, and `0` means no edge.

```ts
export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null
```

`WeightedAdjacencyMatrix` is `number[][]`. Treat a non-zero entry as an edge. For this kata, hop count is what matters, not the weight value.

## Pattern

**Graph BFS (adjacency matrix).** Spot it when you need a shortest unweighted path, and neighbors live in a row of a matrix instead of a list.

One-line picture: still a ripple in a pond. The only change is how you look up who is next door: scan a whole row.

## How to run

```bash
npx jest BFSGraphMatrix
```

## Hints

<details>
<summary>Nudge</summary>

The algorithm is the same as list BFS. To find neighbors of `current`, scan `graph[current]`. If `graph[current][to]` is not `0`, there is an edge to `to`.
</details>

<details>
<summary>Approach</summary>

Queue, `seen`, and `prev` work exactly as in BFSGraphList. The test uses `matrix2` and expects `[0, 1, 4, 5, 6]` from `0` to `6`, and `null` from `6` to `0`.
</details>

<details>
<summary>Pseudocode</summary>

```
# same as BFSGraphList, except neighbor lookup is:

for to from 0 to n - 1:
    if graph[current][to] is 0: continue
    if seen[to]: continue
    seen[to] = true
    prev[to] = current
    queue.push(to)
```
</details>

## Edge cases to check

- `0` to `6` returns `[0, 1, 4, 5, 6]`.
- `6` to `0` returns `null`.
- `graph[i][j] === 0` is not an edge, including the diagonal if it is 0.
- `source === needle` should return `[source]`.

## Complexity

- Time: **O(V²)**
- Space: **O(V)**

For every node you may scan a whole row of V possible edges, which is why a matrix BFS is O(V²) even if the graph is sparse.

## Common mistakes

- Treating `0` as a real edge, or forgetting that a non-zero weight is "connected" for this search.
- Forgetting `prev` and being unable to rebuild the path.
- Using DFS, which may not be shortest.
- Copying the list version and still writing `graph[current]` as if it were an array of `{ to, weight }`.

## Related

The same BFS-path idea shows up in [LeetCode 1091. Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/).
