export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen: boolean[] = new Array(arr.length).fill(false);
    const prev: number[] = new Array(arr.length).fill(-1);
    const dists: number[] = new Array(arr.length).fill(Infinity);

    dists[source] = 0;

    while (hasUnvisitedNodes(dists, seen)) {
        const cur = getLowestUnvisitedNode(dists, seen);
        let adj = arr[cur];
        seen[cur] = true;
        for (let i = 0; i < adj.length; i++) {
            const node: GraphEdge = adj[i];
            if (seen[node.to]) {
                continue;
            }
            const newDist = dists[cur] + node.weight;
            if (newDist < dists[node.to]) {
                prev[node.to] = cur;
                dists[node.to] = newDist;
            }
        }
    }

    if (prev[sink] === -1) return [];
    let out = [];
    let cur = sink;

    while (prev[cur] !== -1) {
        out.push(cur);
        cur = prev[cur];
    }

    out.push(source);
    return out.reverse();
}

function hasUnvisitedNodes(dists: number[], seen: boolean[]) {
    return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisitedNode(dists: number[], seen: boolean[]) {
    let lo = Infinity;
    let idx = -1;
    for (let i = 0; i < dists.length; i++) {
        if (seen[i]) continue;
        const dist = dists[i];
        if (dist < lo) {
            lo = dist;
            idx = i;
        }
    }

    return idx;
}
