export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

function qs(arr: number[], lo: number, hi: number): void {
    if(lo >= hi){
        return;
    }

    let pivot = partition(arr, lo, hi);

    qs(arr, pivot + 1, hi);
    qs(arr, lo, pivot - 1);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = hi;
    let idx = lo - 1 ;

    for (let i = lo; i < pivot; i++) {
        if (arr[i] <= arr[pivot]) {
            idx++;
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
        }
    }

    idx++;
    [arr[pivot], arr[idx]] = [arr[idx], arr[pivot]];
    return idx;
}
