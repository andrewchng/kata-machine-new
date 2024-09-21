type node<T> = {
    value: T;
    next: node<T>;
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
        const node = { value: item } as node<T>;
        if (!this.tail) {
            this.head = this.tail = node;
            this.length++;
            return;
        }
        this.length++;
        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const value = this.head.value;
        if (this.length == 1) {
            this.length--;
            this.head = this.tail = undefined;
            return value;
        }
        this.head = this.head.next;
        this.length--;
        return value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
