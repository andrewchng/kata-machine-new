import { walkForTsConfig } from "tsconfig-paths/lib/tsconfig-loader";

export default class MinHeap {
    public length: number;
    private data: number[];


    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data.push(value);
        this.length++;
        this.heapifyUp(this.length - 1)
    }

    delete(): number {
        let value = this.data[0];
        this.data[0] = this.data[this.length - 1];
        this.data.pop();
        this.length--;
        this.heapifyDown(0);
        return value;
    }

    parent(id: number) {
        return Math.floor((id - 1) / 2);
    }

    rChild(id: number) {
        return id * 2 + 2;
    }

    lChild(id: number) {
        return id * 2 + 1;
    }

    heapifyUp(id: number) {
        if (id === 0) {
            return;
        }

        let parentId = this.parent(id);

        if (this.data[parentId] > this.data[id]) {
            [this.data[parentId], this.data[id]] = [this.data[id], this.data[parentId]]
            this.heapifyUp(parentId)
        }

    }

    heapifyDown(id: number) {
        let rightId = this.rChild(id);
        let leftId = this.lChild(id);
        let smallest = id;

        if (rightId < this.length && this.data[rightId] < this.data[smallest]) {
            smallest = rightId;
        }

        if (leftId < this.length && this.data[leftId] < this.data[smallest]) {
            smallest = leftId;
        }

        if (id !== smallest) {
            [this.data[id], this.data[smallest]] = [this.data[smallest], this.data[id]];
            this.heapifyDown(smallest)
        }
    }

    peek() {
        return this.data[0];
    }

    size() {
        return this.length;
    }
}

