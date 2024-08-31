export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const path : number[] = [];
    const seen : boolean[] = new Array(graph.length).fill(false);

    walk(graph, source, needle, seen, path);

    return path.length? path : null;
}

function walk(graph: WeightedAdjacencyList, cur : number, needle: number, seen : boolean[], path : number[]): boolean{
    if(cur === needle){
        path.push(cur);
        return true;
    }

    if(seen[cur]){
        return false;
    }

    path.push(cur);
    seen[cur] = true;

    for(let graphEdge of graph[cur]){
        if(walk(graph, graphEdge.to, needle, seen, path)){
            return true;
        }
    }

    path.pop();
    return false;   
}