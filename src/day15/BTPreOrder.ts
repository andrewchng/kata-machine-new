export default function pre_order_search(head: BinaryNode<number>): number[] {
    let path: number[] = [];
    dfs(head, path);
    return path;
}

function dfs(node: BinaryNode<number> | null, path: number[]) {
    if (node === null) {
        return;
    }
    path.push(node.value);
    dfs(node.left, path);
    dfs(node.right, path);
}
