export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen: boolean[] = new Array(arr.length).fill(false);
    const prev: number[] = new Array(arr.length).fill(-1);
    const dists: number[] = new Array(arr.length).fill(Infinity);

    dists[source] = 0;

    while (hasUnvistedNodes(seen, dists)) {
        const cur = getLowestUnvistedNodes(seen, dists);
        seen[cur] = true;
        let adj: GraphEdge[] = arr[cur];

        for (let edge of adj) {
            const newDist = dists[cur] + edge.weight;
            if (newDist < dists[edge.to]) {
                dists[edge.to] = newDist;
                prev[edge.to] = cur;
            }
        }
    }

    console.log("here");

    if (prev[sink] == -1) {
        return [];
    }

    let out = [];
    let cur = sink;
    while (prev[cur] !== -1) {
        out.push(cur);
        cur = prev[cur];
    }
    out.push(source);
    return out.reverse();
}

const hasUnvistedNodes = (seen: boolean[], dists: number[]) => {
    return seen.some((s, i) => !s && dists[i] < Infinity);
};

const getLowestUnvistedNodes = (seen: boolean[], dists: number[]) => {
    let lo = Infinity;
    let idx = -1;

    for (let i = 0; i < dists.length; i++) {
        if (seen[i]) continue;
        let cur = dists[i];
        if (cur < lo) {
            lo = cur;
            idx = i;
        }
    }
    return idx;
};
