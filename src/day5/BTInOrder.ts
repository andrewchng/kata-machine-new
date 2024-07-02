export default function in_order_search(head: BinaryNode<number>): number[] {
    const path : number[] = [];
    walk(head, path);
    return path;
}

function walk(currNode: BinaryNode<number> | null, path: number[]) {
    if (!currNode) return;
    
    walk(currNode.left, path);
    path.push(currNode.value);
    walk(currNode.right, path);
}
