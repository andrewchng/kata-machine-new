# PrimsList

## What it asks

Build a minimum spanning tree (MST) for an undirected weighted graph given as an adjacency list. Return the MST as a `WeightedAdjacencyList`, or `null` if it cannot be built.

This kata is not in `ligma.config.js` yet. Add `"PrimsList"` to that list before `yarn generate` if you want a stub. There is a filename quirk: the test file is `src/__tests__/PrimsList.ts`, but it imports `@code/PrimsAlgorithm`. The implementation file must be named `PrimsAlgorithm.ts`, not `PrimsList.ts`. `yarn generate` would still create `PrimsList.ts`, so rename or copy it after you generate.

```ts
export default function prims(list: WeightedAdjacencyList): WeightedAdjacencyList | null
```

## Pattern

**Minimum spanning tree (Prim's algorithm).** Spot it when you must connect every node with the cheapest possible set of edges, and you cannot leave a cycle.

One-line picture: connecting cities with the cheapest set of roads, adding one cheapest road at a time to the growing network, never making a loop.

## How to run

```bash
npx jest PrimsList
```

## Hints

<details>
<summary>Nudge</summary>

Start from any node (node 0 is fine). Repeatedly add the cheapest edge that touches a node already in the tree and a node that is not. Record that edge in both directions, because the MST is undirected.
</details>

<details>
<summary>Approach</summary>

Keep `seen`, and for each node not yet in the tree, track the cheapest edge that would connect it (a `dist` and a `prev`). Each step, pick the unseen node with the smallest `dist`, mark it seen, and add the edge `prev → node` (and `node → prev`) to the result. The test on `list1` has one correct MST; compare your adjacency lists carefully, including edge direction and weights.
</details>

<details>
<summary>Pseudocode</summary>

```
n = list.length
seen = array of false
dist = array of Infinity, dist[0] = 0
prev = array of -1
tree = array of n empty edge lists

repeat n times:
    current = unseen node with the smallest dist
    if current is missing or dist[current] is Infinity: return null
    seen[current] = true
    if prev[current] is not -1:
        add { to: current, weight: dist[current] } to tree[prev[current]]
        add { to: prev[current], weight: dist[current] } to tree[current]
    for each edge in list[current]:
        if not seen[edge.to] and edge.weight < dist[edge.to]:
            dist[edge.to] = edge.weight
            prev[edge.to] = current

return tree
```
</details>

## Edge cases to check

- The test graph has one expected MST; edge lists should be bidirectional and use the same weights as the input.
- A disconnected graph cannot form a spanning tree; return `null`.
- Do not add an edge that would connect two nodes already in the tree (that would be a cycle).

## Complexity

- Time: **O(V²)** with an array of distances, or **O(E log V)** with a heap
- Space: **O(V + E)**

The array version is the same shape as Dijkstra, except you compare edge weight, not path cost. The result stores the MST edges.

## Common mistakes

- Building a directed tree (only storing one direction of each edge). The test expects both.
- Using Dijkstra-style path costs instead of a single edge weight.
- Leaving a node unconnected, or returning an empty list for some nodes that should have edges.
- Naming the file `PrimsList.ts`. The test imports `PrimsAlgorithm`.

## Related

[LeetCode 1584. Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) is Prim's (or Kruskal's) on a complete graph.
