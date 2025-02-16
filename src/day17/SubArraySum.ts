export default function sub_array_sum(arr: number[], k: number): number {

    let sum = 0;    
    let prefixSum = new Map();
    prefixSum.set(0, 1);
    let count = 0;
    for(let i = 0 ; i < arr.length; i++){
        sum += arr[i];
        let diff = sum - k;
        if(prefixSum.has(diff)){
            count += prefixSum.get(diff);
        }

        prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
    }
    return count
}