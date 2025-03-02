export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const visited: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = new Array(graph.length).fill(-1);
    const queue: number[] = [source]

    while (queue.length > 0) {
        const curr = queue.shift() as number;
        if (curr === needle) break;

        const adj = graph[curr];
        for (let i = 0; i < adj.length; i++) {
            if (adj[i] === 0) continue;
            if (visited[i]) continue;

            visited[i] = true;
            prev[i] = curr;
            queue.push(i);

        }
    }

    if (prev[needle] === -1) return null;

    let curr = needle;
    let output = [];
    while (prev[curr] !== -1) {
        output.push(curr);
        curr = prev[curr];
    }
    output.push(source);
    return output.reverse();


}
