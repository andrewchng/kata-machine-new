export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];
    walk(graph, source, needle, seen, path);
    return path.length === 0 ? null : path;
}

function walk(
    graph: WeightedAdjacencyList,
    cur: number,
    needle: number,
    seen: boolean[],
    path: number[],
) {
    if (cur === needle) {
        path.push(cur);
        return true;
    }

    if (seen[cur]) {
        return false;
    }

    seen[cur] = true;

    path.push(cur);

    const adjacencyList = graph[cur];
    for (const edge of adjacencyList) {
        if (walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }

    path.pop();

    return false;
}
