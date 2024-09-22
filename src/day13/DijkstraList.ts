export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen: boolean[] = new Array(arr.length).fill(false);
    const prev: number[] = new Array(arr.length).fill(-1);
    const dists: number[] = new Array(arr.length).fill(Infinity);
    dists[source] = 0;

    while (hasUnvisited(dists, seen)) {
        const cur = getLowestUnvisited(dists, seen);
        seen[cur] = true;

        const adj: GraphEdge[] = arr[cur];
        for (let i = 0; i < adj.length; i++) {
            const edge = adj[i];
            if (seen[edge.to]) {
                continue;
            }
            const newDist = dists[cur] + edge.weight;
            if (newDist < dists[edge.to]) {
                dists[edge.to] = newDist;
                prev[edge.to] = cur;
            }
        }
    }

    if (prev[sink] == -1) {
        return [];
    }

    let cur = sink;
    let out = [];
    while (prev[cur] !== -1) {
        out.push(cur);
        cur = prev[cur];
    }

    out.push(source);

    return out.reverse();
}

function hasUnvisited(dists: number[], seen: boolean[]) {
    return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisited(dists: number[], seen: boolean[]): number {
    let idx = -1;
    let lowest = Infinity;

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) continue;
        if (lowest > dists[i]) {
            lowest = dists[i];
            idx = i;
        }
    }
    return idx;
}
