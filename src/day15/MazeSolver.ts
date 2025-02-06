export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    let path: Point[] = [];
    const seen: boolean[][] = new Array(maze.length);
    for (let i = 0; i < seen.length; i++) {
        seen[i] = new Array(maze[0].length).fill(false);
    }
    walk(maze, wall, start, end, path, seen);
    return path;
}

const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

function walk(
    maze: string[],
    wall: string,
    cur: Point,
    end: Point,
    path: Point[],
    seen: Boolean[][]
) {
    if (cur.y === end.y && cur.x === end.x) {
        path.push(cur);
        return true;
    }
    
    if (
        cur.y >= maze.length ||
        cur.x >= maze[0].length ||
        cur.x < 0 ||
        cur.y < 0
    ) {
        return false;
    }
    
    if (maze[cur.y][cur.x] === wall) {
        return false;
    }
    
    if(seen[cur.y][cur.x]){
        return false;
    }
    seen[cur.y][cur.x] = true;
    path.push(cur);
    
    for (let [x, y] of directions) {
        if (walk(maze, wall, { x: cur.x + x, y: cur.y + y } as Point, end, path, seen)) {
            return true
        }
    }


    path.pop();
    return false;
}
