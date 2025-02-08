export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpAmt = Math.floor(Math.sqrt(breaks.length));

    let j = 0;
    let i = 0;
    for (; i < breaks.length; i += jumpAmt) {
        if (breaks[i]) {
            j = i - jumpAmt;
            break;
        }
    }

    for (j; j <= i; j++) {
        if (breaks[j]) {
            return j;
        }
    }

    return -1;
}
