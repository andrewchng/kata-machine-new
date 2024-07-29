type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class LRU<K, V> {
    private length: number;
    private head: Node<V> | undefined;
    private tail: Node<V> | undefined;
    private capacity: number;
    private lookUp: Map<K, Node<V>>;
    private reverseLookUp: Map<Node<V>, K>;

    constructor(capacity = 10) {
        this.head = this.tail = undefined;
        this.length = 0;
        this.capacity = capacity;
        this.lookUp = new Map<K, Node<V>>();
        this.reverseLookUp = new Map<Node<V>, K>();
    }

    update(key: K, value: V): void {
        let node = this.lookUp.get(key);
        if(!node){
            node = { value : value} as Node<V>;
            this.lookUp.set(key, node);
            this.length++;
            this.prepend(node);
            this.trimCache();
            this.reverseLookUp.set(node, key);
        }else{
            this.detach(node);
            this.prepend(node)
            node.value =  value
        }

    }


    get(key: K): V | undefined {
        const node = this.lookUp.get(key);
        if (!node) {
            return undefined;
        }

        this.detach(node);
        this.prepend(node)

        return node.value
    }

    private detach(node: Node<V>): void {
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }

        if (this.head === node) {
            this.head = node.next;
        }
        if (this.tail === node) {
            this.tail = node.prev;
        }

        node.prev = node.next = undefined;
    }

    private prepend(node: Node<V>): void {
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    private trimCache() : void {
        if (this.length <= this.capacity){
            return;
        }

        const tail = this.tail as Node<V>;
        this.detach(tail);

        const key = this.reverseLookUp.get(tail) as K;
        
        this.lookUp.delete(key)
        this.reverseLookUp.delete(tail);

        this.length--;

    }
}
