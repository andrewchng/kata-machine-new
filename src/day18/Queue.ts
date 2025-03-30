interface Node<T> {
    value: T,
    next: Node<T> | undefined
}

export default class Queue<T> {
    public length: number;
    private tail: Node<T> | undefined;
    private head: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        let node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = this.tail = node;
            this.length++;
            return;
        }

        if (this.tail) this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        let head = this.head;
        if (this.length === 1) {
            this.length--;
            this.head = this.tail = undefined;
            return head.value;
        }

        this.head = this.head?.next;
        this.length--;

        return head.value;

    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
