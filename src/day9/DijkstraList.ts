export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen: boolean[] = new Array(arr.length).fill(false);
    const prev: number[] = new Array(arr.length).fill(-1);
    const dists: number[] = new Array(arr.length).fill(Infinity);

    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        const curr = getLowestUnvisited(seen, dists);
        seen[curr] = true;

        const adj = arr[curr];

        for (let i = 0; i < adj.length; i++) {
            const edge = adj[i];
            if (seen[edge.to]) {
                continue;
            }
            const dist = dists[curr] + edge.weight;
            if (dist < dists[edge.to]) {
                prev[edge.to] = curr;
                dists[edge.to] = dist;
            }
        }
    }

    let curr = sink;
    const out: number[] = [];
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    if (out.length > 0) {
        out.push(source);
        return out.reverse();
    }

    return [];
}

function hasUnvisited(seen: boolean[], dist: number[]): boolean {
    return seen.some((s, i) => !s && dist[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dist: number[]): number {
    let lowestDistance = Infinity;

    let idx = -1;
    for (let i = 0; i < dist.length; i++) {
        if (seen[i]) {
            continue;
        }

        if (dist[i] < lowestDistance) {
            lowestDistance = dist[i];
            idx = i;
        }
    }

    return idx;
}
