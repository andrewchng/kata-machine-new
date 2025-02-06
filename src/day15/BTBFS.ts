export default function bfs(head: BinaryNode<number>, needle: number): boolean {

    const queue : BinaryNode<number>[] = [head];

    while(queue.length > 0){
        const cur = queue.shift() as BinaryNode<number>

        if(cur.value === needle){
            return true
        }

        if(cur.left) queue.push(cur.left);
        if(cur.right) queue.push(cur.right);

    }

    return false;

}