type node<T> = {
    value: T,
    next: node<T> | undefined
}

export default class Stack<T> {
    public length: number;
    private head: node<T> | undefined;


    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        let node = { value: item } as node<T>;
        if (!this.head) {
            this.length++;
            this.head = node;
            return;
        }
        this.length++;
        node.next = this.head;
        this.head = node;
    }


    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        let val = this.head.value;
        if (this.length === 1) {
            this.length--;
            this.head = undefined;
            return val;
        }

        this.head = this.head.next;
        this.length--;
        return val;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
