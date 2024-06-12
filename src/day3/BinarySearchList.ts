export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length; // [lo, hi)
    do {
        let mid = Math.floor(lo + (hi - lo) / 2);
        if (needle == haystack[mid]) return true;
        else if (needle < haystack[mid]) {
            hi = mid; // [lo, hi), hi is exclusive no need -1
        } else {
            lo = mid + 1; //[lo, hi), lo is inclusive, need +1
        }
    } while (lo < hi); // [lo, hi)

    return false;
}
// export default function bs_list(haystack: number[], needle: number): boolean {
//     let lo = 0;
//     let hi = haystack.length - 1; // [lo, hi]
//     do {
//         let mid = Math.floor(lo + (hi - lo) / 2);
//         if (needle == haystack[mid]) return true;
//         else if (needle < haystack[mid]) {
//             hi = mid - 1; // [lo, hi], hi is inclusive need -1
//         } else {
//             lo = mid + 1; //[lo, hi], lo is inclusive, need +1
//         }
//     } while (lo <= hi); // [lo, hi]

//     return false;
// }

// need to understand [lo, hi] vs [lo, hi), not quite fully grapse the concept

// The key differences here are:

// Initial upper bound hi:
// With the closed interval [lo, hi], the initial upper bound hi is set to haystack.length - 1, as the last valid index in the array is haystack.length - 1.
// Loop condition:
// For the closed interval [lo, hi], the loop condition is lo <= hi, as both lo and hi are inclusive.
// Updates to lo and hi:
// When needle is less than haystack[mid], hi is updated to mid - 1 to restrict the search to the left half of the current interval.
// When needle is greater than haystack[mid], lo is updated to mid + 1 to restrict the search to the right half of the current interval.
// The use of the closed interval [lo, hi] requires a bit more care in the implementation, as the updates to lo and hi need to account for the inclusivity of the bounds. In the case of the half-open interval [lo, hi), the updates to lo and hi are more straightforward, as the upper bound hi is always exclusive.

// Both the closed interval [lo, hi] and the half-open interval [lo, hi) are valid and commonly used approaches in binary search algorithms. The choice between the two often comes down to personal preference and the specific context of the implementation. The important thing is to be consistent in the use of the interval notation and to correctly update the bounds during the search process.
