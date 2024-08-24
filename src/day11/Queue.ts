type Node<T> = {
    value: T,
    next: Node<T>
}

export default class Queue<T> {
    public length: number;
    head: Node<T> | undefined
    tail: Node<T> | undefined

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value : item} as Node<T>;
        if(this.length == 0){
            this.head = this.tail = node;
            this.length++;
            return;
        }
        this.length++;
        if(this.tail) this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if(this.length == 0){
            return undefined;
        }

        const pop = this.head;
        if(this.length == 1){
            this.head = this.tail = undefined;
            this.length--;
            return pop?.value;
        }

        this.length--;
        this.head = this.head?.next;
        return pop?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}