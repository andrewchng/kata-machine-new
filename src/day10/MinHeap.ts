export default class MinHeap {
    public length: number;

    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.length++;
        this.data.push(value);
        this.heapifyUp(this.length - 1);
    }

    delete(): number {
        if (this.length === 0) return -1;

        const toDelete = this.data[0];
        const last = this.length - 1;
        [this.data[0], this.data[last]] = [this.data[last], this.data[0]];
        this.data.pop();
        this.length--;
        this.heapifyDown(0);

        return toDelete;
    }

    parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    rChild(idx: number): number {
        return 2 * idx + 2;
    }
    lChild(idx: number): number {
        return 2 * idx + 1;
    }

    heapifyUp(idx: number): void {
        if (idx == 0) {
            return;
        }
        const parentId = this.parent(idx);

        if (this.data[parentId] > this.data[idx]) {
            [this.data[parentId], this.data[idx]] = [
                this.data[idx],
                this.data[parentId],
            ];
            this.heapifyUp(parentId);
        }
    }

    heapifyDown(idx: number): void {
        if (idx >= this.length) {
            return;
        }

        const rightIdx = this.rChild(idx);
        const leftIdx = this.lChild(idx);

        if (
            this.data[rightIdx] > this.data[leftIdx] &&
            this.data[idx] > this.data[leftIdx]
        ) {
            [this.data[leftIdx], this.data[idx]] = [
                this.data[idx],
                this.data[leftIdx],
            ];
            this.heapifyDown(leftIdx);
        }
        if (
            this.data[rightIdx] < this.data[leftIdx] &&
            this.data[idx] > this.data[rightIdx]
        ) {
            [this.data[rightIdx], this.data[idx]] = [
                this.data[idx],
                this.data[rightIdx],
            ];
            this.heapifyDown(rightIdx);
        }
    }
}
