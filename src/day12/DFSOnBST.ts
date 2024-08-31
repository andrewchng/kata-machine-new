export default function dfs(head: BinaryNode<number>, needle: number): boolean {
 return walk(head, needle);
}

function walk(cur : BinaryNode<number> | null, needle: number) :boolean{
    if(!cur){
        return false;
    }
    if(cur.value === needle){
        return true;
    }

    if(walk(cur.left, needle)){
        return true
    }

    if(walk(cur.right, needle)){
        return true;
    }

    return false;
}