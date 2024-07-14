export default function pre_order_search(head: BinaryNode<number>): number[] {
    let path: number[] = [];
    walk(head, path);
    return path;
}

function walk(curr: BinaryNode<number> | null, path: number[]) {
    if (curr === null) {
        return;
    }

    path.push(curr.value);
    walk(curr.left, path);
    walk(curr.right, path);
}