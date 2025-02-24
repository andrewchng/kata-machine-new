type node<V> = {
    value: V,
    prev: node<V> | undefined
}

export default class Stack<T> {
    public length: number;
    private head: node<T> | undefined;
    private tail: node<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as node<T>;
        if (this.length === 0) {
            this.head = this.tail = node;
            this.length++;
            return;
        }
        this.length++;
        node.prev = this.tail;
        this.tail = node;
    }
    pop(): T | undefined {
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.length--;
            const popVal = this.head?.value
            this.head = this.tail = undefined
            return popVal;
        }
        this.length--;
        const popVal = this.tail?.value;
        this.tail = this.tail?.prev;
        return popVal;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
