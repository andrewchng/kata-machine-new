type node<T> = {
    value: T;
    prev?: node<T>;
    next?: node<T>;
};

export default class LRU<K, V> {
    private length: number;
    private head: node<V> | undefined;
    private tail: node<V> | undefined;
    private lookup: Map<K, node<V>>;
    private reverseLookup: Map<node<V>, K>;
    private capacity: number;

    constructor(capacity = 3) {
        this.capacity = capacity;
        this.head = this.tail = undefined;
        this.reverseLookup = new Map<node<V>, K>();
        this.lookup = new Map<K, node<V>>();
        this.length = 0;
    }

    update(key: K, value: V): void {
        const node = this.lookup.get(key);
        if(!node){
            this.length++;
            const newNode = {value:value} as node<V>;
            this.lookup.set(key, newNode);
            this.reverseLookup.set(newNode, key);
            this.prepend(newNode);
            this.trimCache();
        }else{
            node.value = value;
            this.detach(node);
            this.prepend(node);
        }

    }
    
    get(key: K): V | undefined {
        const node = this.lookup.get(key);
        if(!node){

            return undefined;
        }

        this.detach(node)
        this.prepend(node);

        return node.value;
    }

    detach(node : node<V>){
        if(this.head === node){
            this.head = node.next;
        }

        if(this.tail === node){
            this.tail = node.prev
        }

        if(node.prev){
            node.prev.next = node.next;
        }

        if(node.next){
            node.next.prev = node.prev
        }
        
    }

    prepend(node : node<V>){
        if(!this.head){
            this.head = this.tail = node;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    trimCache(){
        if(this.capacity >= this.length){
            return
        }

        const lastNode = this.tail as node<V>;
        this.detach(lastNode);
        const key = this.reverseLookup.get(lastNode) as K; 
        this.lookup.delete(key);
        this.reverseLookup.delete(lastNode);
        this.length--;

    }

}
