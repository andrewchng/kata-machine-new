export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    let queue = [head];

    while(queue.length){
        const cur = queue.shift() as BinaryNode<number>;
        if (cur.value === needle) return true;

        if(needle < cur.value){
            if(cur.left) queue.push(cur.left);
        }else{
            if(cur.right) queue.push(cur.right);
        }

    }

    return false;
}