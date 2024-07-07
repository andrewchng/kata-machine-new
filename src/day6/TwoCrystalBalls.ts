//[ false, false , false, true, true. true]

export default function two_crystal_balls(breaks: boolean[]): number {

    const jumpStep = Math.sqrt(breaks.length);

    let i = 0;
    for ( ; i < breaks.length; i += jumpStep){
        if ( breaks[i] ){
            i -= jumpStep;
            break;     
        }
    }

    for (; i < breaks.length ; i++){
        if(breaks[i]) return i
    }


    return -1
}