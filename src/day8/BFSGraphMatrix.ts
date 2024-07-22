export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {

    const seen : boolean[] = new Array(graph.length).fill(false);
    const prev : number[] = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q : number[] = [source]
    
    while(q.length > 0){
        const curr = q.shift() as number;
        
        if (curr === needle){
            break;
        }

        const adj = graph[curr];

        for(let i = 0; i < adj.length; i++){
            if(adj[i] === 0){
                continue;
            } 

            if(seen[i]){
                continue;
            }

            seen[i] = true;
            prev[i] = curr;

            q.push(i)
        }
    }

    let curr = needle;
    const out : number[] = []

    while(prev[curr] != -1){
        out.push(curr)
        curr = prev[curr]
    }

    if(out.length != 0){
        out.push(source);
        return out.reverse();
    }

    return null;
}