export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const prev: number[] = new Array(graph.length).fill(-1);
    const seen: boolean[] = new Array(graph.length).fill(false);

    const queue: number[] = [source];
    while (queue.length) {
        const cur = queue.shift() as number;
        if (cur === needle) break;
        const adj = graph[cur];
        for (let i = 0; i < adj.length; i++) {
            if (seen[i]) continue;
            if (adj[i] === 0) continue;
            prev[i] = cur;
            seen[i] = true;
            queue.push(i);
        }
    }

    if (prev[needle] === -1) return null;

    let cur = needle;
    let out = [];
    while (prev[cur] !== -1) {
        out.push(cur);
        cur = prev[cur];
    }

    out.push(source);

    return out.reverse();
}
