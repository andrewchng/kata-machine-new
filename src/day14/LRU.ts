type Node<T> = {
    value: T,
    next?: Node<T>,
    prev?: Node<T>
}

export default class LRU<K, V> {
    private length: number;
    private capacity: number;
    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;
    private head: Node<V> | undefined;
    private tail: Node<V> | undefined;

    constructor(capacity = 3) {
        this.head = this.tail = undefined;
        this.capacity = capacity;
        this.lookup = new Map<K, Node<V>>();
        this.reverseLookup = new Map<Node<V>, K>();
        this.length = 0;
    }

    update(key: K, value: V): void {
        let node = this.lookup.get(key);
        if(!node){
            const newNode = {value : value} as Node<V>;
            this.lookup.set(key, newNode);
            this.reverseLookup.set(newNode, key);
            this.length++
            this.trimCache();
        }else{
            node.value = value;
            this.detach(node);
            this.prepend(node);
        }
    }
    get(key: K): V | undefined {
        let node = this.lookup.get(key);
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
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    detach(node: Node<V>) {
        if (this.head === node) {
            this.head = this.head.next;
        }

        if (this.tail === node) {
            this.tail = this.tail.prev;
        }

        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;
    }

    trimCache() {
        if (this.capacity >= this.length) {
            return;
        }

        const tail = this.tail as Node<V>;
        this.detach(tail);
        const key = this.reverseLookup.get(tail) as K;
        this.lookup.delete(key);
        this.reverseLookup.delete(tail);
        this.length--;
    }
}