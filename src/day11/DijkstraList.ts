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
        const lo = getLowestUnvisited(seen, dists);

        const adj: GraphEdge[] = arr[lo];
        seen[lo] = true;

        for (const edge of adj) {
            if(seen[edge.to]){
                continue;
            }
            const newDist =  dists[lo] + edge.weight;

            if(newDist < dists[edge.to]){
                prev[edge.to] = lo;
                dists[edge.to] = newDist
            }
        
        }
    }

    let out : number[] = [];
    let curr = sink;
    while(prev[curr] != -1){
        out.push(curr);
        curr = prev[curr];
    }
    if(!out.length){
        return out;
    }
    out.push(source);
    return out.reverse();
}

function hasUnvisited(seen: boolean[], dist: number[]): boolean {
    return seen.some((s, i) => !s && dist[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dist: number[]): number {
    let lowest = Infinity;
    let idx = -1;
    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue;
        }

        if (dist[i] < lowest) {
            idx = i;
            lowest = dist[i];
        }
    }

    return idx;
}
