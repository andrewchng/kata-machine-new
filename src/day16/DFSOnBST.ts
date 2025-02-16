export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head, needle);
}

function walk(node: BinaryNode<number> | null, needle: number): boolean {
    if (node === null) {
        return false;
    }

    if (node.value === needle) {
        return true;
    }

    return node.value > needle
        ? walk(node.left, needle)
        : walk(node.right, needle);
}
