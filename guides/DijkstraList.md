# DijkstraList

## What it asks

Find the cheapest path from `source` to `sink` in a weighted adjacency list, and return the path as node indices. Edges have different weights, so fewest hops is not always cheapest.

```ts
export default function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[]
```

The test on `list1` expects `[0, 1, 4, 5, 6]` from `0` to `6`.

## Pattern

**Dijkstra's shortest path.** Spot it when edges have different non-negative weights and you need the cheapest route, not just the fewest hops.

One-line picture: a GPS that keeps picking the closest unexplored junction by travel time, then updates better routes through that junction.

## How to run

```bash
npx jest DijkstraList
```

## Hints

<details>
<summary>Nudge</summary>

Keep a `dist` array (best known cost from `source`) and a `prev` array (how you got there). Start with `dist[source] = 0` and every other distance as Infinity. Repeatedly pick the unseen node with the smallest `dist`, then "relax" its edges: if going through it makes a neighbor cheaper, update that neighbor.
</details>

<details>
<summary>Approach</summary>

A simple version uses an array to find the next closest unseen node, which is O(V²) and is enough for this kata. A min-heap is faster on sparse graphs, but is more code. When `sink` is settled (or when no unseen node has a finite distance), walk `prev` from `sink` back to `source` and reverse it.
</details>

<details>
<summary>Pseudocode</summary>

```
n = arr.length
dist = array of Infinity, dist[source] = 0
prev = array of -1
seen = array of false

repeat n times:
    current = unseen node with the smallest dist
    if current is missing or dist[current] is Infinity: break
    seen[current] = true
    for each edge in arr[current]:
        if seen[edge.to]: continue
        next = dist[current] + edge.weight
        if next < dist[edge.to]:
            dist[edge.to] = next
            prev[edge.to] = current

walk from sink back along prev to source, reverse, return the path
```
</details>

## Edge cases to check

- The cheapest path is not always the one with the fewest edges.
- `source === sink` should return `[source]`.
- Unreachable sink: decide what to return (this test always has a path).
- Weights are non-negative in the usual Dijkstra algorithm. Negative weights would need a different algorithm.

## Complexity

- Time: **O(V²)** with an array of distances, or **O((V + E) log V)** with a min-heap
- Space: **O(V)**

The array version scans all nodes to pick the next closest one, V times. `dist`, `prev`, and `seen` are all one entry per node.

## Common mistakes

- Using BFS, which ignores weights and can pick a more expensive route.
- Forgetting to update `prev` when you find a cheaper distance, so the path is wrong even if the cost is right.
- Marking a node seen before all cheaper routes to it have been considered, or never marking seen and looping.
- Adding an edge weight to the wrong side (`dist[neighbor]` instead of `dist[current] + weight`).

## Related

[LeetCode 743. Network Delay Time](https://leetcode.com/problems/network-delay-time/) is Dijkstra for a distance, not a path. The same relaxation idea applies.
