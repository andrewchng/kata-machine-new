export default function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] {
    const seen: boolean[] = new Array(arr.length).fill(false);
    const prev: number[] = new Array(arr.length).fill(-1);
    const dists: number[] = new Array(arr.length).fill(Infinity);

    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        let cur = getLowestUnvisited(seen, dists);

        const adj = arr[cur];
        seen[cur] = true;

        for (let i = 0; i < adj.length; i++) {
            const edge : GraphEdge = adj[i];
            if(seen[edge.to]) continue;
            const dist = dists[cur] + edge.weight;
            if(dist < dists[edge.to]){
                dists[edge.to] = dist;
                prev[edge.to] = cur;
            } 

        }
    }

    if(prev[sink] == -1) return [];

    let out = [];
    let cur = sink;
    while(prev[cur] != -1){
        out.push(cur);
        cur = prev[cur];
    }

    out.push(source);
    return out.reverse();

}

function hasUnvisited(seen: boolean[], dists: number[]) {
    return seen.some((s, i) => !s && dists[i] < Infinity)
}

function getLowestUnvisited(seen: boolean[], dists: number[]) {
    let lowest = Infinity;
    let idx = -1;

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) continue;
        if (lowest > dists[i]) {
            lowest = dists[i];
            idx = i;
        }
    }

    return idx;
}