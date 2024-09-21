export default class MinHeap {
    public length: number;
    public data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data.push(value);
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        const toDelete = this.data[0];
        if (this.length == 1) {
            this.data = [];
            this.length--;
            return toDelete;
        }
        this.data[0] = this.data[this.length - 1];
        this.data.pop();
        this.length--;
        this.heapifyDown(0);

        return toDelete;
    }

    parent(id: number): number {
        return Math.floor((id - 1) / 2);
    }

    rChild(id: number): number {
        return 2 * id + 2;
    }
    lChild(id: number): number {
        return 2 * id + 1;
    }

    heapifyUp(id: number) {
        if (id === 0) {
            return;
        }

        const parentId = this.parent(id);
        const parentVal = this.data[parentId];
        const currVal = this.data[id];
        if (currVal < parentVal) {
            [this.data[id], this.data[parentId]] = [
                this.data[parentId],
                this.data[id],
            ];
            this.heapifyUp(parentId);
        }
    }

    heapifyDown(id: number) {
        const rightId = this.rChild(id);
        const leftId = this.lChild(id);
        const rightVal = this.data[rightId];
        const leftVal = this.data[leftId];
        const currVal = this.data[id];

        if (!leftVal || !currVal) {
            return;
        }

        if (leftVal < rightVal && leftVal < currVal) {
            [this.data[leftId], this.data[id]] = [
                this.data[id],
                this.data[leftId],
            ];
            this.heapifyDown(leftId);
        }

        if (rightVal < leftVal && rightVal < currVal) {
            [this.data[rightId], this.data[id]] = [
                this.data[id],
                this.data[rightId],
            ];
            this.heapifyDown(rightId);
        }
    }
}
