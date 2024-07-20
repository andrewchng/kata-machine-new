export default class MinHeap {
    public length: number;
    data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        const newIdx = this.length;
        this.data[newIdx] = value;
        this.data.push(value);
        this.length++;
        if (this.length > 1) {
            this.heapifyUp(newIdx);
        }
    }

    delete(): number {
        if (this.length == 0) return -1;
        const deleted = this.data[0];

        if (this.length == 1) {
            this.data = [];
            this.length--;
            return deleted;
        }

        this.data[0] = this.data[this.length - 1];
        this.length--;
        this.heapifyDown(0);
        return deleted;
    }

    parentId(idx: number) {
        return Math.floor((idx - 1) / 2);
    }

    rChildId(idx: number) {
        return 2 * idx + 2;
    }
    lChildId(idx: number) {
        return 2 * idx + 1;
    }

    heapifyUp(idx: number) {
        const v = this.data[idx];
        const pId = this.parentId(idx);

        if (v < this.data[pId]) {
            [this.data[pId], this.data[idx]] = [this.data[idx], this.data[pId]];
            this.heapifyUp(pId);
        }
    }

    heapifyDown(idx: number) {
        const v = this.data[idx];
        const rightIdx = this.rChildId(idx);
        const lefTIdx = this.lChildId(idx);
        const rV = this.data[rightIdx];
        const lV = this.data[lefTIdx];

        if (idx >= this.length || lefTIdx >= this.length) return;
        if (v > lV && lV < rV) {
            [this.data[idx], this.data[lefTIdx]] = [
                this.data[lefTIdx],
                this.data[idx],
            ];
            this.heapifyDown(lefTIdx);
        }

        if (v > rV && rV < lV) {
            [this.data[idx], this.data[rightIdx]] = [
                this.data[rightIdx],
                this.data[idx],
            ];
            this.heapifyDown(rightIdx);
        }
    }
}
