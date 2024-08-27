export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data.push(value);
        this.heapifyUp(this.length)
        this.length++;
    }

    delete(): number {
        if (this.length == 0) {
            return -1;
        }

        if (this.length == 1) {
            this.length--;
            return this.data.pop() as number;
        }

        const delVal = this.data[0];
        [this.data[0], this.data[this.length - 1]] = [this.data[this.length - 1], this.data[0]];
        this.length--;

        this.data.pop();
        this.heapifyDown(0);
        return delVal;
    }

    heapifyUp(id: number) {
        if (id == 0) return;

        const parentId = this.parent(id);
        if (this.data[parentId] > this.data[id]) {
            [this.data[id], this.data[parentId]] = [this.data[parentId], this.data[id]];
            this.heapifyUp(parentId)
        }
    }

    heapifyDown(id: number) {
        const rIdx = this.rChild(id);
        const lIdx = this.lChild(id);
        const rVal = this.data[rIdx];
        const lVal = this.data[lIdx];
        const curVal = this.data[id];

        if (!lVal || !curVal) {
            return;
        }

        if (lVal < rVal && curVal > lVal) {
            [this.data[lIdx], this.data[id]] = [this.data[id], this.data[lIdx]]
            this.heapifyDown(lIdx)
        }
        if (rVal < lVal && curVal > rVal) {
            [this.data[rIdx], this.data[id]] = [this.data[id], this.data[rIdx]]
            this.heapifyDown(rIdx)
        }

    }

    parent(id: number): number {
        return Math.floor((id - 1) / 2);
    }

    lChild(id: number): number {
        return 2 * id + 1;
    }

    rChild(id: number): number {
        return 2 * id + 2
    }
}