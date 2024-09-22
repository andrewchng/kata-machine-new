export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = new Array(graph.length).fill(-1);
    const queue: number[] = [source];
    seen[source] = true;

    while (queue.length > 0) {
        const cur = queue.shift() as number;
        const adj = graph[cur];
        if(cur === needle){
            break;
        }
        for (let i = 0; i < adj.length; i++) {
            if(seen[i]){
                continue;
            }
            if (adj[i] === 0) {
                continue;
            }
            seen[i] = true;
            prev[i] = cur;
            queue.push(i);
        }
    }

    if(prev[needle] === -1){
        return null;
    }

    let cur = needle;
    let out = [];
    while(prev[cur] != -1){
        out.push(cur);
        cur = prev[cur];
    }
    out.push(source);

    return out.reverse();
}

//
