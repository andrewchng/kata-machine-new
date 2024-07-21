const direction: number[][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {

    if (curr.x == end.x && curr.y == end.y) {
        path.push(curr);
        return true;
    }

    if (maze[curr.y][curr.x] == wall) {
        return false;
    }

    if (seen[curr.y][curr.x]) {
        return false;
    }

    seen[curr.y][curr.x] = true;
    path.push(curr);

    for (let dir of direction) {
        const [x, y] = dir;
        let newCurr = {
            x: curr.x + x,
            y: curr.y + y
        } as Point;
        if (walk(maze, wall, newCurr, end, seen, path)) {
            return true;
        }
    }


    path.pop()
    return false;

}


export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];
    for (let i of maze) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}