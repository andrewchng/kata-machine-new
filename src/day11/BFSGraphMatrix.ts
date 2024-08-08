export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = new Array(graph.length).fill(-1);
    const queue: number[] = [source];
    seen[source] = true;

    while (queue.length) {
        const curr = queue.shift() as number;
        if (curr === needle) {
            break;
        }

        const adj = graph[curr];

        for (let i = 0; i < adj.length; i++) {
            if (adj[i] === 0) {
                continue;
            }

            if (seen[i]) {
                continue;
            }

            prev[i] = curr;
            seen[i] = true;
            queue.push(i);
        }
    }
    let curr = needle;
    let out: number[] = [];
    while (prev[curr] != -1) {
        out.push(curr);
        curr = prev[curr];
    }

    if (out.length) {
        out.push(source);
        return out.reverse();
    }
    return null;
}
