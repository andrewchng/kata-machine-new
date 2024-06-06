//Given 2 crystal balls that will break if dropped from a high enough distance, determine the exact spot in which they’ll break in the most optimized way.

// [false, false, false, true, true ]

export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmt = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmt;
    for (; i < breaks.length; i += jumpAmt) {
        if (breaks[i]) {
            break;
        }
    }
    for (let j = i - jumpAmt; j < i; j++) {
        if (breaks[j]) {
            return j;
        }
    }
    return -1;
}
