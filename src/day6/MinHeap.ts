export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data.push(value)
        this.heapifyUp(this.length)
        this.length++;
        
}
    delete(): number {
        if (this.length === 0 )return -1;

        
        const out = this.data[0]
        if(this.length == 1 ){
            this.length--;
            this.data = []
            return out
        }
        
        this.data[0] = this.data[this.length-1]
        this.length--;
        this.heapifyDown(0)


        return out;
}

private heapifyDown(idx : number){
    const leftIdx = this.leftChild(idx);
    const rightIdx = this.rightChild(idx)
    
    if (idx >= this.length || leftIdx >= this.length) return;

    const lV = this.data[leftIdx];
    const rV = this.data[rightIdx];
    const v = this.data[idx]

    if ( lV < rV && v > lV){
        [this.data[leftIdx], this.data[idx]] = [this.data[idx], this.data[leftIdx]]
        this.heapifyDown(leftIdx)
    }
    if ( lV > rV && v > rV){
        [this.data[rightIdx], this.data[idx]] = [this.data[idx], this.data[rightIdx]]
        this.heapifyDown(rightIdx)
    }

}

private heapifyUp(idx: number){
    if (idx == 0){
        return;
    }

    const p = this.parent(idx)
    const parentValue = this.data[p]

    if (this.data[idx] < this.data[p]){
        [this.data[p], this.data[idx]] = [this.data[idx], this.data[p]]
        this.heapifyUp(p)
    }
}

private parent(idx: number) : number {
    return Math.floor((idx-1)/2);
}

private leftChild(idx : number) : number {
    return idx * 2 +1;
}
private rightChild(idx : number) : number {
    return idx * 2 +2;
}


}