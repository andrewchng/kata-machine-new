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
        this.heapifyUp(this.length - 1);
    }
    delete(): number {
        const deleteValue = this.data[0];
        [this.data[0], this.data[this.length-1]] = [this.data[this.length-1], this.data[0]];
        this.data.pop();
        this.length--;
        this.heapifyDown(0);

        return deleteValue;
    }

    parentId(id: number) {
        return Math.floor((id - 1 )/ 2);
    }

    rChildId(id: number) {
        return 2 * id + 2;
    }

    lChildId(id: number) {
        return 2 * id + 1;
    }

    heapifyUp(id: number) {
        if (id === 0) {
            return;
        }

        const parentId = this.parentId(id);
        const parentVal = this.data[parentId];
        const currVal = this.data[id];
        if (parentVal > currVal) {
            [this.data[parentId], this.data[id]] = [
                this.data[id],
                this.data[parentId],
            ];
            this.heapifyUp(parentId);
        }
    }

    heapifyDown(id: number) {
        const rChildId = this.rChildId(id);
        const lChildId = this.lChildId(id);

        const curr = this.data[id];
        const lChildData = this.data[lChildId];
        const rChildData = this.data[rChildId];

        if (!curr || !lChildData) {
            return;
        }

        if (lChildData < rChildData && curr > lChildData) {
            [this.data[lChildId], this.data[id]] = [
                this.data[id],
                this.data[lChildId],
            ];
            this.heapifyDown(lChildId);
        }

        if (rChildData < lChildData && curr > rChildData) {
            [this.data[rChildId], this.data[id]] = [
                this.data[id],
                this.data[rChildId],
            ];
            this.heapifyDown(rChildId);
        }
    }
}
