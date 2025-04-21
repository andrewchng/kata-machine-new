export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    let seen: boolean[][] = Array(maze.length).fill(-1).map(() => Array(maze[0].length).fill(false));
    let path: Point[] = [];
    search(maze, wall, start, end, seen, path);
    return path;
}

function search(maze: string[], wall: string, cur: Point, end: Point, seen: boolean[][], path: Point[]) {
    if (cur.x === end.x && cur.y === end.y) {
        path.push(cur);
        return true;
    }

    if (maze[cur.y][cur.x] === wall) {
        return false;
    }

    if (cur.y < 0 || cur.y >= maze.length || cur.x < 0 || cur.x >= maze[0].length) {
        return false;
    }

    if (seen[cur.y][cur.x]) {
        return false;
    }

    seen[cur.y][cur.x] = true;
    path.push(cur);

    for (let [x, y] of dir) {
        if (search(maze, wall, { x: cur.x + x, y: cur.y + y } as Point, end, seen, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}

let dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1]
]
