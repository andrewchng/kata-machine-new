export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = []
    walk(head, path);
    return path
}

function walk(cur: BinaryNode<number> | null, path: number[]) {
    if (!cur) {
        return;
    }

    path.push(cur.value);
    walk(cur.left, path);
    walk(cur.right, path);
}