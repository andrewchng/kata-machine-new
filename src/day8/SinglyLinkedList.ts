type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    head: Node<T> | undefined;
    tail: Node<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        if (this.length == 0) {
            this.length++;
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.length++;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        const node = { value: item } as Node<T>;
        if (this.length == 0) {
            this.length++;
            this.head = this.tail = node;
            return;
        }

        this.tail ? (this.tail.next = node) : undefined;
        this.tail = node;
        this.length++;
    }
    remove(item: T): T | undefined {
        if (this.length == 0){
            return undefined;
        }

        if(this.length == 1 ){
            if(this.head?.value == item){
                this.length--;
                const v = this.head.value;
                this.head = undefined;
                return v;
            }
            return undefined;
        }

        if(this.head?.value == item){
            const v = this.head.value;
            this.length--;
            this.head = this.head.next
            return v;
        }

        let curr = this.head;
        let prev: Node<T> | undefined;
        for (let i = 0; i < this.length; i++) {
            prev = curr;
            curr = curr?.next;
            if (curr?.value == item){
                this.length--;
                if (this.tail === curr){
                    this.tail = prev;
                }
                return curr.value;
            }
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        if (this.length == 0 || idx >= this.length) {
            return undefined;
        }
        if (this.length == 1) {
            if (idx == 0) {
                return this.head?.value;
            }
            return undefined;
        }

        if (idx == this.length - 1) {
            return this.tail?.value;
        }

        let node = this.head;
        for (let i = 0; i < idx; i++) {
            node = node?.next;
        }

        return node?.value;
    }

    removeAt(idx: number): T | undefined {
        if (this.length == 0 || idx >= this.length) {
            return undefined;
        }

        if (this.length == 1) {
            if (idx == 0) {
                this.length--;
                const v = this.head?.value;
                this.head = this.tail = undefined;
                return v;
            }
        }

        let curr = this.head;
        let prev: Node<T> | undefined;
        for (let i = 0; i < idx; i++) {
            prev = curr;
            curr = curr?.next;
        }

        prev ? (prev.next = curr?.next) : undefined;

        if (idx == this.length - 1) {
            this.tail = prev;
        }

        this.length--;
        if (idx == 0 && this.length == 1){
            this.head = this.head?.next
        }


        return curr?.value;
    }
}
