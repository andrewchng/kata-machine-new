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
        const node = queue.shift() as number;
        if (node === needle){
            break;
        }

        const adj = graph[node];
        for(let i = 0; i < adj.length; i++){
            if(adj[i] === 0){
                continue;
            }
            if(seen[i]){
                continue;
            }

            queue.push(i);
            prev[i] = node;
            seen[i] = true;
        }
    }

    if(prev[needle] == -1){
        return null;
    }

    let curr = needle;
    const out : number[] = []
    while(prev[curr] !=  -1){
        out.push(curr);
        curr = prev[curr];
    }

    out.push(source);
    return out.reverse();
}