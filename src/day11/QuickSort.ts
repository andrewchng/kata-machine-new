export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

function qs(arr: number[], lo: number, hi: number) {
    if (lo >= hi) {
        return;
    }
    const pivot = partiton(arr, lo, hi);

    qs(arr, pivot + 1, hi)
    qs(arr, lo, pivot - 1)
}

function partiton(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] < pivot) {
            idx++;
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
        }
    }

    idx++;
    [arr[hi], arr[idx]] = [arr[idx], arr[hi]]

    return idx;
}