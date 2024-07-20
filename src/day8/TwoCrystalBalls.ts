export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpVal = Math.floor(Math.sqrt(breaks.length));

    let idx = -1;
    for (let i = 0; i < breaks.length; i+= jumpVal){
        if(breaks[i]){
            idx = i - jumpVal;
            break;
        }
    }

    for (let j = idx; j < breaks.length; j++){
        if(breaks[j]){
            return j;
        }
    }

    return -1;
}