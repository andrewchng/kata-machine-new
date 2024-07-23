function qs(arr: number[], lo: number, hi: number) {
    if (hi <= lo) {
        return;
    }

    let pivot = partition(arr, lo, hi);

    qs(arr, lo, pivot - 1);
    qs(arr, pivot + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] < pivot) {
            idx++;
            [arr[idx], arr[i]] = [arr[i], arr[idx]];
        }
    }

    idx++;
    [arr[idx], arr[hi]] = [arr[hi], arr[idx]];

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
