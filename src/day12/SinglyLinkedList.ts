type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class SinglyLinkedList<T> {
    public length: number;

    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.tail = this.head = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        if (this.length == 0) {
            this.length++;
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head = node;
        this.length++;
    }


    insertAt(item: T, idx: number): void {

    }
    append(item: T): void {
        const node = { value: item } as Node<T>;
        if (this.length == 0) {
            this.length++;
            this.head = this.tail = node;
            // this.printList("append");
            return;
        }
        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }
        // this.printList("append");
    }
    remove(item: T): T | undefined {
        let cur = this.head;
        let prev
        do {
            if (cur?.value === item) {
                if (prev) prev.next = cur.next;
                if (this.head === cur) {
                    this.head = cur.next;
                }
                if (this.tail === cur) {
                    this.tail = prev;
                }
                this.length--;
                cur.next = undefined;
                return cur.value;
            }
            cur = cur?.next;
            prev = cur;
        } while (cur?.next !== undefined)

        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx == 0) return this.head?.value;
        if (idx == this.length - 1) return this.tail?.value;
        let cur = this.head;
        for (let i = 0; i < idx; i++) {
            cur = cur?.next
        }
        return cur?.value;
    }

    removeAt(idx: number): T | undefined {
        console.log("START, remove at " + idx);
        if (idx >= this.length || this.length == 0) {
            return undefined;
        }
        let cur = this.head;
        let prev;
        for (let i = 0; i < idx; i++) {
            prev = cur;
            cur = cur?.next
        }

        if (prev) prev.next = cur?.next

        if (cur === this.head) {
            this.head = cur?.next;
        }
        if (cur === this.tail) {
            this.tail = prev;
        }
        this.printList("removeAt" + idx + " removed" + cur?.value);
        this.length--;
        if(cur) cur.next = undefined;
        return cur?.value;
    }

    printList(action : string){
        console.log(action);
        let cur = this.head;
        while(cur){
            console.log(cur?.value)
            cur = cur.next;
        }
    }
}