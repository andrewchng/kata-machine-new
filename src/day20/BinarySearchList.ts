export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length - 1;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] < needle) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return false;
}

// Time Complexity = o(log n)
// how many times can you devide n into 1 =  o(logn)
// Space Complexity = o(n)
