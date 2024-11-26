export default function two_crystal_balls(breaks: boolean[]): number {
    const step = Math.floor(Math.sqrt(breaks.length));

    let breakPoint = 0;
    for(let i = 0; i < breaks.length; i += step){
        if(breaks[i]){
            breakPoint = i;
            break;
        }
    }

    for(let i = breakPoint - step; i < breakPoint; i++){
        if(breaks[i]){
            return i;
        }

    }
    return -1;
}