export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length - 1;

    do {
        let mid = lo + Math.floor((hi-lo)/2)
        if(haystack[mid] === needle) return true;
        if(needle > haystack[mid]){
            lo = mid + 1;
        }else{
            hi = mid - 1;
        }
        console.log("hi",hi);
        console.log("lo",lo);
    } while (hi >= lo);

    return false;
}