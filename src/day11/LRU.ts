type Node<T> = {
    value: T
    prev: Node<T> | undefined
    next: Node<T> | undefined
}

export default class LRU<K, V> {
    private length: number;
    private head: Node<V> | undefined;
    private tail: Node<V> | undefined;
    private lookup: Map<K, Node<V>>
    private reserveLookup: Map<Node<V>, K>
    private capacity: number;


    constructor(capacity = 10) {
        this.length = 0;
        this.head = this.tail = undefined;
        this.capacity = capacity;
        this.lookup = new Map();
        this.reserveLookup = new Map();
    }

    update(key: K, value: V): void {
        const node = this.lookup.get(key);
        if (!node) {
            let newNode = { value: value } as Node<V>;
            this.prepend(newNode);
            this.lookup.set(key, newNode);
            this.reserveLookup.set(newNode, key);
            this.length++;
            this.trimCache();
        } else {
            node.value = value;
            this.detach(node);
            this.prepend(node);
        }

    }


    get(key: K): V | undefined {
        const node = this.lookup.get(key);
        if (!node) return undefined;
        this.detach(node);
        this.prepend(node);

        return node.value;

    }

    prepend(node: Node<V>) {
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;

    }

    detach(node: Node<V>) {
        if (node === this.head) {
            this.head = node.next;
            // if(this.head) this.head.prev = undefined;
        }

        if (node === this.tail) {
            this.tail = node.prev;
            // if(this.tail) this.tail.next = undefined;
        }

        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev
        node.prev = node.next = undefined
    }


    trimCache() {
        if (this.length <= this.capacity) {
            return;
        }

        const tail = this.tail as Node<V>
        this.detach(tail);
        const keyOfNode = this.reserveLookup.get(tail) as K;
        this.lookup.delete(keyOfNode)
        this.reserveLookup.delete(tail);
        this.length--;
    }


}