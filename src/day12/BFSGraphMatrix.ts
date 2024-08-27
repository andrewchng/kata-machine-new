export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const seen :  boolean[] = new Array(graph.length).fill(false);
    const prev :  number[] = new Array(graph.length).fill(-1);

    const queue : number[] = [source];
    seen[source] = true;
    
    while(queue.length){
        const cur = queue.shift() as number;
        
        if(cur === needle){
            break;
        }
        
        const adj = graph[cur];
        for(let i = 0 ; i < adj.length; i++){
            if(seen[i]) continue;
            if(adj[i] !== 0){
                queue.push(i);
                seen[i] = true;
                prev[i] = cur;
            }
        }

    }
    let out : number[] = []
    let cur = needle;
    while(prev[cur] != -1){
        out.push(cur);
        cur = prev[cur];
    }

    if(out.length == 0){
        return null;
    }

    out.push(source);
    return out.reverse();



}