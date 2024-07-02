export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path : number[] = [];
    walk(head, path);
    return path;
}

function walk(currNode: BinaryNode<number> | null, path: number[]) {
    if (!currNode) return;

    path.push(currNode.value);
    walk(currNode.left, path);
    walk(currNode.right, path);
}
