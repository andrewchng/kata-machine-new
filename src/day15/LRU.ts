type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class LRU<K, V> {
    private length: number;
    private head: Node<V> | undefined;
    private tail: Node<V> | undefined;
    private lookupMap: Map<K, Node<V>>;
    private reverselookupMap: Map<Node<V>, K>;
    private capacity;

    constructor(capacity = 3) {
        this.capacity = capacity;
        this.length = 0;
        this.head = this.tail = undefined;
        this.lookupMap = new Map();
        this.reverselookupMap = new Map();
    }

    update(key: K, value: V): void {
        let node = this.lookupMap.get(key);
        if(!node){
            node = { value } as Node<V>;
            this.lookupMap.set(key, node);
            this.reverselookupMap.set(node, key);
            this.prepend(node);
            this.length++; 
            this.trim();
        }else{
            node.value = value;
            this.detach(node);
            this.prepend(node);
        }
    }
    get(key: K): V | undefined {
        let node = this.lookupMap.get(key);
        if(node){
            this.detach(node);
            this.prepend(node);
            return node.value;
        }
        return undefined;
    }
    prepend(node : Node<V>){
        if(!this.head){
            this.head = node;
            this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    detach(node : Node<V>){
        if(node === this.head){
            this.head = node.next;
        }
        if(node === this.tail){
            this.tail = node.prev;
        }

        if(node.prev) node.prev.next = node.next
        if(node.next) node.next.prev = node.prev
    }
    trim(){
        if(this.length > this.capacity){
            const tail = this.tail as Node<V>;
            this.detach(tail);
            const key = this.reverselookupMap.get(tail) as K;
            this.lookupMap.delete(key);
            this.reverselookupMap.delete(tail);
            this.length--;
            this.tail = tail.prev;
        }
    }

    
}
