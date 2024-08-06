export default function bs_list(haystack: number[], needle: number): boolean {
    let hi = haystack.length - 1;
    let lo = 0;

    while (lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2);
        if(haystack[mid] === needle){
            return true;
        }else if(haystack[mid] < needle){
            lo = mid + 1;
        }else{
            hi = mid - 1
        }
    }

    return false;
}

// [1, 2, 3]
//mid = 2 + 2 - 2 / 2 = 


