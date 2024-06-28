export default class MinHeap {
    public length: number;
    private data : number[]    
    constructor() {
        this.data = []
        this.length = 0
    }

    insert(value: number): void {
        this.data[this.length] = value
        this.heapifyUp(this.length);
        this.length++


}
    delete(): number  {
        if (this.length===0){
            return -1
        }

        if (this.length ==1){
            const out = this.data[0];
            this.data = []
            this.length = 0
            return out
        }
        const out = this.data[0];
        this.data[0] = this.data[this.length-1];
        this.length--;
        this.heapifyDown(0)


        return out;


}

    private parent(idx: number): number {
        return Math.floor((idx -1) /2);
    }

    private leftchild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightchild(idx: number): number {
        return idx * 2 + 2 ;
    }

    private heapifyUp(idx: number): void {
        if (idx===0) return
        const p = this.parent(idx);
        const parentVal = this.data[p]
        const val = this.data[idx];
        if (parentVal > val) {
            [this.data[idx], this.data[p]] = [this.data[p], this.data[idx]];
            this.heapifyUp(p)
        }
    }

    private heapifyDown(idx: number): void {
        const l = this.leftchild(idx);
        const r = this.rightchild(idx);
        if (idx >= this.length || l >= this.length) {
            return 
        }
        const lv = this.data[l];
        const rv = this.data[r]
        const v = this.data[idx];

        if (lv > rv && v  > rv){
            [this.data[idx], this.data[r]] = [this.data[r], this.data[idx]];
            this.heapifyDown(r)
        }else if (v > lv && lv < rv ) {
            [this.data[idx], this.data[l]] = [this.data[l], this.data[idx]];
            this.heapifyDown(l);
        }
    }
}