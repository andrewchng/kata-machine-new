type node<T> = {
    prev?: node<T>;
    value: T;
};
export default class Stack<T> {
    public length: number;
    public head: node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;
        const node = { value: item } as node<T>;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;

        const pop = this.head;
        this.head = pop.prev;

        return pop.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
