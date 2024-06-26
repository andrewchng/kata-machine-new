function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivot = parition(arr, lo, hi);
    qs(arr, lo, pivot - 1);
    qs(arr, pivot + 1, hi);
}

// [0,2,6,1,3,8,3]

function parition(arr: number[], lo: number, hi: number): number {
    let idx = lo;
    let pivot = arr[hi];

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            swap(arr, idx, i);
        }
    }
    idx++;
    swap(arr, idx, hi);

    return idx;
}
export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

function swap(arr: number[], i: number, j: number): void {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
