type node<T> = {
    value?: T;
    prev?: node<T>;
};

export default class Stack<T> {
    public length: number;
    public head: node<T> | undefined;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const newNode = { value: item } as node<T>;
        if (this.length == 0) {
            this.length++;
            this.head = newNode;
            return;
        }
        this.length++;
        newNode.prev = this.head
        this.head = newNode
    }

    pop(): T | undefined {
        if (this.length == 0) {
            return undefined;
        }
        this.length--;
        const popHead = this.head;
        this.head = popHead?.prev;
        return popHead?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
