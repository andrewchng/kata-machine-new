import { isForInStatement } from "typescript";

type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    head: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = {value : item} as Node<T>;
        if (this.length == 0) {
            this.head = node;
            this.length++;
            return
        }

        node.prev = this.head;
        this.head = node;
        this.length++;
    }

    pop(): T | undefined {
        if(this.length == 0){
            return undefined
        }

        const v = this.head?.value;
        if(this.length == 1){
            this.length--;
            this.head = undefined;
            return v;
        }

        this.length--;
        this.head = this.head?.prev
        return v;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
