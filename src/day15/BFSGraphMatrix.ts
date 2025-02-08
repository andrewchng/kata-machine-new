export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const queue: number[] = [source];
    const prev: number[] = new Array(graph.length).fill(-1);

    while (queue.length > 0) {
        const cur = queue.shift() as number;
        if (cur === needle) {
            break;
        }

        const adjList = graph[cur];
        for (let i = 0; i < adjList.length; i++) {
            if (seen[i]) continue;
            if (adjList[i] === 0) continue;
            prev[i] = cur;
            seen[i] = true;
            queue.push(i);
        }
    }

    if(prev[needle] === -1) {
        return null
    }

    let cur = needle;
    const output = [];
    while(prev[cur] !== -1){
        output.push(cur);
        cur = prev[cur];
    }

    output.push(source)
    return output.reverse();
}
