type node<T> = {
    value: T;
    next?: node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    public head: node<T> | undefined;
    public tail: node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        let node = { value: item } as node<T>;
        if (this.length == 0) {
            this.head = this.tail = node;
            this.length++;
            return;
        }

        this.length++;
        node.next = this.head;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        let node = { value: item } as node<T>;
        if (this.head === undefined) {
            return;
        }

        if (idx >= this.length) return;

        this.length++;
        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx == this.length - 1) {
            this.append(item);
            return;
        }

        let curr: node<T> | undefined = this.head;
        let prev: node<T> | undefined;
        for (let i = 0; i < idx; i++) {
            prev = curr;
            curr = curr?.next;
        }

        if (prev) prev.next = node;
        node.next = curr;
    }

    append(item: T): void {  
        let node = { value: item } as node<T>;
        if (this.length == 0) {
            this.tail = this.head = node;
            this.length++;
            return;
        }

        this.length++;
        if (this.tail) this.tail.next = node;
        this.tail = node;        
    }

    remove(item: T): T | undefined {
        if (this.head == undefined) return undefined;
        let curr: node<T> | undefined = this.head;
        if (curr.value === item) {
            if (this.length === 1) {
                this.length--;
                this.head = this.tail = undefined;
                return curr.value;
            }

            this.length--;
            if(this.length === 1){
                this.head = this.tail;
            }

            this.head = curr.next;
            return curr.value;
        }
        for (let i = 0; i < this.length; i++) {
            // while (curr != undefined) {
            if (curr?.next?.value === item) {
                this.length--;
                curr.next = curr.next.next;
                return curr.next?.value;
            }
            curr = curr?.next;
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx == 0) return this.head?.value;
        if (idx == this.length - 1) return this.tail?.value;

        let curr = this.head;
        for (let i = 0; i < idx; i++) {
            curr = curr?.next;
        }

        return curr?.value;
    }

    removeAt(idx: number): T | undefined {
        this.logbefore("removeAt");
        if (!this.head) return undefined;
        if (this.length == 1 && idx == 0) {
            this.length--;
            let remove = this.head.value;
            this.head = this.tail = undefined;
            return remove;
        }
        let curr: node<T> | undefined = this.head;
        let prev: node<T> | undefined;
        for (let i = 0; i < idx; i++) {
            prev = curr;
            curr = curr?.next;
        }


        let remove = curr?.value;
        if (prev) prev.next = curr?.next;
        if (idx == this.length - 1) {
            this.tail = prev;
        }
        this.length--;
        if( this.length == 1){
            this.head = this.tail;
        }
        this.logAfter("removeAt");
        return remove;
    }

    logbefore(funcName: string){
        console.log(`before ${funcName} head:`, this.head)
        console.log(`before ${funcName} tail:`, this.tail)
        console.log(`length`, this.length)

    }

    logAfter(funcName: string){
        console.log(`after ${funcName} head:`, this.head)
        console.log(`after ${funcName} tail:`, this.tail)
        console.log(`length`, this.length)
    }
}
