export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}

function search(cur: BinaryNode<number> | null, needle: number): boolean {
    if (!cur) return false;
    if (cur.value === needle) return true;

    return needle > cur.value ? search(cur.right, needle) : search(cur.left, needle);
}
