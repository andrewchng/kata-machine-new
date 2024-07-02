type node<T> = {
    value?: T;
    next?: node<T>;
};

export default class Queue<T> {
    public length: number;
    public head: node<T> | undefined;
    public tail: node<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode = { value: item } as node<T>;
        this.length++;
        if (!this.tail) {
            this.head = this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    deque(): T | undefined {
        if (this.length === 0) {
            this.head = this.tail = undefined;
            return undefined;
        }

        this.length--;
        const deqeueHead = this.head;
        this.head = deqeueHead?.next;

        return deqeueHead?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
