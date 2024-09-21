type node<T> = {
    value: T;
    prev?: node<T>;
};

export default class Stack<T> {
    public length: number;
    private head: node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = { value : item } as node<T>;
        if(!this.head){
            this.head = node;
            this.length++;
            return;
        }

        this.length++;
        node.prev = this.head;
        this.head = node;
    }


    pop(): T | undefined {
        if(!this.head){
            return undefined;
        }

        const value = this.head.value;
        if(this.length == 1){
            this.head = undefined;
            this.length--;
            return value
        }

        this.length--;
        this.head = this.head.prev
        return value;
    }


    peek(): T | undefined {
        return this.head?.value
    }
}
