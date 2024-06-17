type node<T> = {
    prev?: node<T>;
    value: T;
};

export default class Queue<T> {
    public length: number;
    public head: node<T> | undefined;
    public tail: node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        // join q from tail
        const node = { value: item } as node<T>;
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
        }

        this.tail.prev = node;
        this.tail = node;
    }
    deque(): T | undefined {
        // exit q from head
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const exitNode = this.head;
        this.head = this.head.prev;

        if (this.length == 0) {
            this.tail = this.head = undefined;
        }

        return exitNode.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
