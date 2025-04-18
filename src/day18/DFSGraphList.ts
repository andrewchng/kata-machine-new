export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    let path: number[] = [];
    let seen: boolean[] = new Array(graph.length).fill(false);
    walk(graph, source, needle, path, seen);
    return path.length ? path : null;
}

function walk(graph: WeightedAdjacencyList, cur: number, needle: number, path: number[], seen: boolean[]) {
    if (cur === needle) {
        path.push(cur);
        return true;
    }

    path.push(cur);
    seen[cur] = true;

    let adj = graph[cur];

    for (let edge of adj) {
        if (seen[edge.to]) {
            continue
        }
        if (walk(graph, edge.to, needle, path, seen)) {
            return true;
        }

    }

    path.pop();

    return false;
}
