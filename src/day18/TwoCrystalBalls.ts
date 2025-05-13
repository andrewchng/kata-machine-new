export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpstep = Math.floor(Math.sqrt(breaks.length));
    let i = 0;
    for (; i < breaks.length; i += jumpstep) {
        if (breaks[i]) {
            break;
        }
    }

    let j = i - jumpstep;
    for (; j < breaks.length; j++) {
        if (breaks[j]) {
            return j;
        }
    }

    return -1;
}
