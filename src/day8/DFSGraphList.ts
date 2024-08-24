function walk(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): boolean {
    if (curr == needle) {
        path.push(curr);
        return true;
    }

    if (seen[curr]) {
        return false;
    }

    seen[curr] = true;
    path.push(curr);

    const adj = graph[curr]

    for (let edge of adj) {
        const newCurr = edge.to;
        if (walk(graph, newCurr, needle, seen, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}


export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {

    const path: number[] = [];
    const seen: boolean[] = new Array(graph.length).fill(false);

    walk(graph, source, needle, seen, path);

    return path.length === 0 ? null : path;

}