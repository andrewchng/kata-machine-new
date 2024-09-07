
type Node<V> = {
    value: V
    next?: Node<V>
    prev?: Node<V>
}

export default class LRU<K, V> {
    private length: number;
    private capacity: number;
    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;
    private head: Node<V> | undefined;
    private tail: Node<V> | undefined;

    constructor(capacity = 10) {
        this.capacity = capacity;
        this.length = 0;
        this.lookup = new Map<K, Node<V>>();
        this.reverseLookup = new Map<Node<V>, K>();
        this.head = this.tail = undefined;
    }

    update(key: K, value: V): void {
        const node = this.lookup.get(key);
        if (!node) {
            const newNode = { value: value } as Node<V>;
            this.prepend(newNode);
            this.lookup.set(key, newNode);
            this.reverseLookup.set(newNode, key);
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
        if (!node) {
            return undefined;
        }

        this.detach(node);
        this.prepend(node);
        return node.value;
    }

    prepend(node: Node<V>) {
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }

    detach(node: Node<V>) {
        if (!this.head || !this.tail) {
            return;
        }

        if (this.head === node) {
            this.head = node.next;
        }

        if (this.tail === node) {
            this.tail = node.prev;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        node.prev = node.next = undefined;
    }

    trimCache() {
        if (this.capacity >= this.length) {
            return;
        }
    
        const tail = this.tail as Node<V>;
        const k = this.reverseLookup.get(tail) as K;
        this.detach(tail);

        console.log("trimmed, " + k);
        this.lookup.delete(k);
        this.reverseLookup.delete(tail);
        this.length--;
    }
}