export default function dfs(
    head: BinaryNode<number>,
    needle: number,
): boolean {
    return search(head, needle);
}

function search(curr: BinaryNode<number> | null, needle: number): boolean {
    if (curr === null) {
        return false;
    }

    if (curr.value === needle) {
        return true;
    }

    return search(needle > curr.value ? curr.right : curr.left, needle);
}
