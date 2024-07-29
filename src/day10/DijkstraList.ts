export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const prev: number[] = new Array(arr.length).fill(-1);
    const seen: boolean[] = new Array(arr.length).fill(false);
    const dist: number[] = new Array(arr.length).fill(Infinity);

    dist[source] = 0;
    while (hasUnvisited(seen, dist)) {
        const lo = getLowestUnvisited(seen, dist);
        const adj = arr[lo];
        seen[lo] = true;

        for (let edge of adj) {
            if(seen[edge.to]){
                continue;
            }
            const newDistance = dist[lo] + edge.weight;
            if (newDistance < dist[edge.to]) {
                dist[edge.to] = newDistance;
                prev[edge.to] = lo;
            }
        }
    }
    if (prev[sink] == -1) {
        return [];
    }
    let curr = sink;
    const out: number[] = [];
    while (prev[curr] != -1) {
        out.push(curr);
        curr = prev[curr]
    }

    out.push(source);
    return out.reverse();
}

function hasUnvisited(seen: boolean[], dist: number[]): boolean {
    return seen.some((s, i) => 
        !s && dist[i] < Infinity
    );
}

function getLowestUnvisited(seen: boolean[], dist: number[]): number {
    let idx = -1;
    let lowestDistance = Infinity;

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) continue;

        if (dist[i] < lowestDistance) {
            lowestDistance = dist[i];
            idx = i;
        }
    }

    return idx;
}
