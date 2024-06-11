export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    //initial sort first before we sort the children
    const pivot = partition(arr, lo, hi);

    qs(arr, lo, pivot - 1);
    qs(arr, pivot + 1, hi);
}

//returns the pivot index
function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let idx = lo - 1;

    //rmb need use hi as the condition as we no need to unclude hi, need start from lo too
    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            swap(arr, i, idx);
        }
    }
    idx++; //pivot will point to last swapped index, need ++ to pinpoint the position in which the pivot will swap with
    swap(arr, idx, hi);
    return idx;
}

function swap(arr: number[], a: number, b: number) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
