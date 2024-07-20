type Node<T> = {
    next?: Node<T>;
    value: T;
};

export default class Queue<T> {
    public length: number;
    public head: Node<T> | undefined;
    public tail: Node<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        let node = { value: item } as Node<T>;
        if (this.length == 0) {
            this.tail = this.head = node;
            this.length++;
            return
        }

        this.tail ? this.tail.next = node : undefined
        this.length++
        this.tail = node;
    }

    deque(): T | undefined {
        if (this.length == 0 ){
            return undefined
        }
        
        const v = this.head?.value;
        if (this.length === 1 ){
            this.length--;
            this.head = this.tail = undefined
            return v;
        }

        this.head = this.head?.next
        this.length--;
        return v;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
