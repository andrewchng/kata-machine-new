type Node<T> = {
    value: T,
    prev: Node<T> | undefined
}

export default class Stack<T> {
    public length: number;

    private head: Node<T> | undefined

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = {value : item} as Node<T>;
        if(this.length == 0){
            this.length++;
            this.head = node;
            return;
        }
        
        this.length++;
        node.prev = this.head
        this.head = node; 
    }

    pop(): T | undefined {
        if(this.length == 0){
            return undefined;
        }
        const pop = this.head;
        if(this.length == 1){
            this.length--;
            this.head = undefined;
            return pop?.value;
        }

        this.length--;
        this.head = this.head?.prev

        return pop?.value;
        


    }

    peek(): T | undefined {
        return this.head?.value;
    }
}