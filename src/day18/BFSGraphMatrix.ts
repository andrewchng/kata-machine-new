export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    let seen = Array(graph.length).fill(false);
    let prev = Array(graph.length).fill(-1);
    let queue = [source];

    while (queue.length) {
        let cur = queue.shift() as number;

        if (cur === needle) {
            break;
        }

        seen[cur] = true;

        let adj = graph[cur];
        for (let i = 0; i < adj.length; i++) {
            if (seen[i]) {
                continue;
            }

            if (adj[i] === 0) {
                continue;
            }
            prev[i] = cur;
            queue.push(i);
        }
    }

    if (prev[needle] === -1) {
        return null;
    }

    let cur = needle;
    let path = [];
    while (prev[cur] !== -1) {
        path.push(cur)
        cur = prev[cur];
    }

    path.push(source);
    return path.reverse();

}
