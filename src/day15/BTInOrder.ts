export default function in_order_search(head: BinaryNode<number>): number[] {
    let path : number[] = [];
    dfs(head, path);
    return path;
}

function dfs(node: BinaryNode<number> | null, path: number[]){
    if(node === null){
        return;
    }

    dfs(node.left, path);
    path.push(node.value);
    dfs(node.right, path);

}